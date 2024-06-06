from pydantic import BaseModel


class AdBase(BaseModel):
    age: int


class AdCategoryBase(BaseModel):
    id: int
    name: str