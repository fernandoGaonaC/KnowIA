from fastapi import APIRouter, HTTPException, status,Depends
from services.usuario import crearUsuario, actualizarUsuario, eliminarUsuario, obtenerUsuarios
from database import get_session


router = APIRouter()

@router.get("/usuarios")
def obtener_usuarios():
    usuarios = obtenerUsuarios()
    return {"message": "Lista de usuarios", "usuarios": usuarios}

@router.post("/usuarios")
def crear_usuario(usuario: dict):
    crearUsuario()
    return {"message": "Usuario creado", "usuario": usuario}

@router.put("/usuarios/{usuario_id}")
def actualizar_usuario(usuario_id: int, usuario: dict):
    actualizarUsuario()
    return {"message": "Usuario actualizado", "usuario_id": usuario_id, "usuario": usuario}

@router.delete("/usuarios/{usuario_id}")
def eliminar_usuario(usuario_id: int):
    eliminarUsuario()
    return {"message": "Usuario eliminado", "usuario_id": usuario_id}