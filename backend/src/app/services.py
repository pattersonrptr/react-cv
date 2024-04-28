from fastapi_sqlalchemy import db

from src.app.models import Curriculum as ModelCurriculum, Education, Experience


class CurriculumService:
    def create(self, curriculum):
        phone = curriculum.phone
        address = curriculum.address

        educations = [
            Education(degree=edu.degree, institution=edu.institution)
            for edu in curriculum.educations or []
        ]

        experiences = [
            Experience(position=exp.position, company=exp.company)
            for exp in curriculum.experiences or []
        ]

        db_curriculum = ModelCurriculum(
            name=curriculum.name,
            email=curriculum.email,
            phone=phone,
            address=address,
            educations=educations,
            experiences=experiences,
        )

        db.session.add(db_curriculum)
        db.session.commit()
        db.session.refresh(db_curriculum)
        return db_curriculum

    def get_all(self):
        curriculums = db.session.query(ModelCurriculum).all()
        return curriculums
