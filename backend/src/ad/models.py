from backend.src.database import Base
from sqlalchemy import Column, Integer, String


class AdCategory(Base):
    __tablename__ = 'ad_category'
    id = Column(Integer, primary_key=True)
    name = Column(String)


class Ad(Base):
    __tablename__ = 'ad'
    id = Column(String, primary_key=True)
    name = Column(String(255))
    phone = Column(String(20))
    email = Column(String(255))
    age = Column(Integer)