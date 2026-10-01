from contextlib import asynccontextmanager
from fastapi import FastAPI
from router.usuarios import router

from models import usuario  
from database import create_db_and_tables

@asynccontextmanager
async def lifespan(app: FastAPI):
  
    create_db_and_tables()
    yield
    


app = FastAPI(lifespan=lifespan)

app.include_router(router)

@app.get("/")
def read_root():
    return {"message": "Hello World"}
