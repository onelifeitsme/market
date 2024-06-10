from backend.src.database import Base
from sqlalchemy import Column, Integer, String, Boolean, ForeignKey
from sqlalchemy.orm import relationship


class AdCategory(Base):
    __tablename__ = 'ad_category'
    id = Column(Integer, primary_key=True)
    name = Column(String)

    ads = relationship("Ad", back_populates="category")


class Ad(Base):
    __tablename__ = 'ad'
    id = Column(Integer, primary_key=True)
    name = Column(String(255))
    price = Column(Integer)
    popular = Column(Boolean)

    category_id = Column(Integer, ForeignKey('ad_category.id'))
    category = relationship("AdCategory", back_populates="ads")