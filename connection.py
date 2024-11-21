from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker


import os
from urllib.parse import quote
from dotenv import load_dotenv
load_dotenv()


DB_PASSWORD=""
DB_HOST="localhost"
DB_NAME="demo_test"
DB_USER="root"
DB_PORT=3306
DB_URL = f'mysql+pymysql://{DB_USER}:{quote(DB_PASSWORD)}@{DB_HOST}:{DB_PORT}/{DB_NAME}'


engine = create_engine(
    DB_URL,
    pool_pre_ping=True,
    pool_recycle=3600,
    pool_size=20,       # Increase the pool size
    max_overflow=50)    # Increase the max overflow

SessionMaker = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()
Base.metadata.create_all(bind=engine)


def get_db():
    db = SessionMaker()
    try:
        yield db
    finally:
        db.close()