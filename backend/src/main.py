from fastapi import FastAPI
from backend.src.ad.router import router as ad_router
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()


app.include_router(
    ad_router
)

origins = ['*']

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['Content-Type', 'Set-Cookie', 'Access-Control-Allow-Headers', 'Access-Control-Allow-Origin',
                   'Authorization'],
)