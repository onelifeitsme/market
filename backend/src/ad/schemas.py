from pydantic import BaseModel


class AdBase(BaseModel):
    id: int


class AdDetail(AdBase):
    name: str
    price: int
    popular: bool


class AdCategoryBase(BaseModel):
    id: int
    name: str