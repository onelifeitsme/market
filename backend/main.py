from typing import Union

from fastapi import FastAPI
from ad.router import router as ad_router

app = FastAPI()


app.include_router(
    ad_router
)