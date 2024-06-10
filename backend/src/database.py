from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.orm import declarative_base
from backend.src.config import DB_URL, DATABASE_URL_ASYNC

# Создание синхронного движка
engine = create_engine(DB_URL)

# Создание сессии
Session = sessionmaker(engine)
session = Session()

# Создание базового класса
Base = declarative_base()

