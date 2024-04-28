from pydantic import BaseModel
from typing import List, Optional

class Education(BaseModel):
    degree: str
    institution: str

class Experience(BaseModel):
    position: str
    company: str

class Curriculum(BaseModel):
    name: str
    email: str
    phone: str = None
    address: str = None
    educations: Optional[List[Education]] = None
    experiences: Optional[List[Experience]] = None
    
    class Config:
        orm_mode = True
