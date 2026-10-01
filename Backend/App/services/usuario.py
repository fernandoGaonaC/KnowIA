from sqlmodel import Session, select
from schemas.usuario import UsuarioCreate, UsuarioUpdate
from models.usuario import Usuario


def crearUsuario(db: Session, usuario: UsuarioCreate):
    nuevo_usuario = Usuario(**usuario.model_dump())
    db.add(nuevo_usuario)
    db.commit()
    db.refresh(nuevo_usuario)
    return nuevo_usuario


def actualizarUsuario(db: Session, usuario_id: int, usuario: UsuarioUpdate):
    statement = select(Usuario).where(Usuario.id == usuario_id)
    usuario_db = db.exec(statement).first()

    if not usuario_db:
        return None

    datos_actualizados = usuario.model_dump(exclude_unset=True)

    for campo, valor in datos_actualizados.items():
        setattr(usuario_db, campo, valor)

    db.add(usuario_db)
    db.commit()
    db.refresh(usuario_db)

    return usuario_db


def eliminarUsuario(db: Session, id: int):
    statement = select(Usuario).where(Usuario.id == id)
    usuario = db.exec(statement).first()

    if not usuario:
        return None
    db.delete(usuario)
    db.commit()
    return usuario


def obtenerUsuarios(db: Session):
    statement = select(Usuario)
    return db.exec(statement).all()