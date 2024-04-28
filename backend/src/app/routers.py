from fastapi import APIRouter
from fastapi_sqlalchemy import db
from typing import List
from src.app.schema import Curriculum as SchemaCurriculum
from src.app.services import CurriculumService

router = APIRouter()

@router.post("/curriculum/", response_model=SchemaCurriculum)
def create_curriculum(curriculum: SchemaCurriculum):
    return CurriculumService().create(curriculum)

@router.get("/curriculum/", response_model=List[SchemaCurriculum])
def get_all_curriculums():
    return CurriculumService().get_all()
