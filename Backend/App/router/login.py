from fastapi import APIRouter, HTTPException, status, Depends
from schemas.usuario import UsuarioLogin
router = APIRouter()

@router.post("/login")
def login(usuario: UsuarioLogin):
    return {"message": "Login successful"}