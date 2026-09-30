from fastapi import FastAPI
from router.usuarios import router
from database import create_db_and_tables
app = FastAPI()
create_db_and_tables()

app.include_router(router)

@app.get("/")
def read_root():
    return {"message": "Hello World"}