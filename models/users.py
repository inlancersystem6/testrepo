from sqlalchemy import Column, String, Integer, Boolean ,DateTime
from connection import Base
from datetime import datetime


class Users(Base):
    __tablename__ = 'users'

    user_id             = Column(Integer, primary_key=True)
    user_name           = Column(String(255), nullable=True)
    user_email          = Column(String(255))
    user_phone_no       = Column(String(255))
    user_password       = Column(String(255))
    user_status         = Column(Boolean, default=False)
    is_deleted          = Column(Boolean, default=False)
    created_at          = Column(DateTime, default=datetime.now, nullable=True)
    updated_at          = Column(DateTime, nullable=True)

