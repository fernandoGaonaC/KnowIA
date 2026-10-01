from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from router.usuarios import router as router_usuario
from router.mensaje import router as router_mensaje

from models import usuario  

from database import create_db_and_tables

@asynccontextmanager
async def lifespan(app: FastAPI):
  
    create_db_and_tables()
    yield
    


app = FastAPI(lifespan=lifespan)
origins = ["http://localhost:5173"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router_usuario)
app.include_router(router_mensaje)

@app.get("/")
def read_root():
    return {"message": "Hello World"}
