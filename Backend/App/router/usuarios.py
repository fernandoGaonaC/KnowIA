from fastapi import APIRouter, HTTPException, status, Depends
from services.usuario import crearUsuario, actualizarUsuario, eliminarUsuario, obtenerUsuarios
from database import get_session
from sqlmodel import Session
from schemas.usuario import UsuarioCreate, UsuarioUpdate, UsuarioRead

router = APIRouter(prefix="/api/usuario", tags=["usuarios"])

@router.get("/", response_model=list[UsuarioRead], status_code=status.HTTP_200_OK)
def obtener_usuarios(db: Session = Depends(get_session)):
    return obtenerUsuarios(db)

@router.post("/", status_code=status.HTTP_201_CREATED)
def crear_usuario(usuario: UsuarioCreate, db: Session = Depends(get_session)):
    return crearUsuario(usuario=usuario, db=db)

#
@router.put("/{usuario_id}")
def actualizar_usuario(usuario_id: int, usuario: UsuarioUpdate, db: Session = Depends(get_session)):
    actualizarUsuario(usuario_id, usuario, db)
    return {"message": "Usuario actualizado", "usuario_id": usuario_id, "usuario": usuario}


@router.delete("/{usuario_id}")
def eliminar_usuario(usuario_id: int, db: Session = Depends(get_session)):
    eliminarUsuario(id=usuario_id, db=db)
    return {"message": "Usuario eliminado", "usuario_id": usuario_id}
