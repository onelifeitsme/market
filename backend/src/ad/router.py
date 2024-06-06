from fastapi import APIRouter, Depends
from typing import List
from .models import Ad, AdCategory
from backend.src.database import session
from . import schemas


router = APIRouter(
    prefix='/ads',
    tags=['Ads'],
)


@router.get("/", response_model=List[schemas.AdBase])
async def get_ads():
    ads = session.query(Ad).all()
    return ads


@router.get("/categories", response_model=List[schemas.AdCategoryBase])
async def get_categories():
    ads_categories = session.query(AdCategory).all()
    return ads_categories