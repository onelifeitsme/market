from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession
from sqlalchemy.orm import sessionmaker
from sqlalchemy.orm import declarative_base
from backend.src.config import DB_URL, DATABASE_URL_ASYNC


engine = create_async_engine(DATABASE_URL_ASYNC)
Session = sessionmaker(engine, AsyncSession)
session = Session()
Base = declarative_base()
