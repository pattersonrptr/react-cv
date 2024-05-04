from fastapi import FastAPI, HTTPException
from fastapi_sqlalchemy import DBSessionMiddleware
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
from starlette.responses import JSONResponse
import os
from src.app.routers import router

load_dotenv()

app = FastAPI()

app.add_middleware(DBSessionMiddleware, db_url=os.environ["DATABASE_URL"])

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.exception_handler(HTTPException)
async def http_exception_handler(request, exc):
    if exc.status_code == 405:
        return JSONResponse(
            status_code=405,
            content={"detail": "Method Not Allowed"},
        )
    return await super().http_exception_handler(request, exc)

app.include_router(router)
