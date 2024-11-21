from sqlalchemy import Column, String, Integer
from connection import Base


class Users(Base):
    __tablename__ = 'users'

    user_id             = Column(Integer, primary_key=True)
    user_name           = Column(String(255), nullable=True)
    user_email          = Column(String(255))
    user_phone_no       = Column(String(255))
    user_password       = Column(String(255))

