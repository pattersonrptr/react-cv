from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship

Base = declarative_base()

class Curriculum(Base):
    __tablename__ = "curriculums"
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), nullable=False)
    email = Column(String(100), nullable=False)
    phone = Column("Phone", String(50), nullable=False)
    address = Column("Address", String(255), nullable=False)
    educations = relationship("Education", back_populates="curriculum", cascade="all, delete-orphan")
    experiences = relationship("Experience", back_populates="curriculum", cascade="all, delete-orphan")

class Education(Base):
    __tablename__ = "educations"

    id = Column(Integer, primary_key=True, index=True)
    degree = Column(String(100))
    institution = Column(String(100))
    start_date = Column(String(10))
    end_date = Column(String(10))
    curriculum_id = Column(Integer, ForeignKey("curriculums.id"))
    curriculum = relationship("Curriculum", back_populates="educations")

class Experience(Base):
    __tablename__ = "experiences"

    id = Column(Integer, primary_key=True, index=True)
    position = Column(String(100))
    company = Column(String(100))
    start_date = Column(String(10))
    end_date = Column(String(10))
    curriculum_id = Column(Integer, ForeignKey("curriculums.id"))
    curriculum = relationship("Curriculum", back_populates="experiences")
