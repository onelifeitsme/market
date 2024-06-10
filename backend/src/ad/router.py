from fastapi import APIRouter, Depends
from typing import List
from .models import Ad, AdCategory
from backend.src.database import session
from . import schemas

router = APIRouter(
    prefix='/ads',
    tags=['Ads'],
)



@router.get("/categories", response_model=List[schemas.AdCategoryBase])
async def get_categories():
    ads_categories = session.query(AdCategory).all()
    return ads_categories


@router.get("/popular", response_model=List[schemas.AdDetail])
async def get_ads():
    ads = session.query(Ad).filter(Ad.popular == True)
    return ads


@router.get("/{ad_id}", response_model=schemas.AdDetail)
async def get_ad(ad_id: int):
    ad = session.query(Ad).filter_by(id=ad_id).first()
    return ad



@router.get("/categories/{category_id}", response_model=schemas.AdCategoryBase)
async def get_category(category_id: int):
    ads_category = session.query(AdCategory).filter_by(id=category_id).first()
    return ads_category
