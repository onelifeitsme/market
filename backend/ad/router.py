from fastapi import APIRouter


router = APIRouter(
    prefix='/ads',
    tags=['Ads'],
)


@router.get("/")
async def get_ads():
    return {'message': 'Hello World'}