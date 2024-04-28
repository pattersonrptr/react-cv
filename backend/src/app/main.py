from fastapi import FastAPI
from fastapi_sqlalchemy import DBSessionMiddleware
import os
from dotenv import load_dotenv
from src.app.routers import router

load_dotenv()

app = FastAPI()

app.add_middleware(DBSessionMiddleware, db_url=os.environ["DATABASE_URL"])

app.include_router(router)
