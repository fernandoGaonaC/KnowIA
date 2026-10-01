from typing import Optional
from sqlmodel import SQLModel

class UsuarioRead(SQLModel):    
    id: int
    nombre: str
    correo: str
    rol: str
    interes:str

class UsuarioCreate(SQLModel):    
    nombre: str
    correo: str
    contrasena: str
    rol: str
    interes: str

class UsuarioUpdate(SQLModel):    
    nombre: Optional[str] = None
    correo: Optional[str] = None
    contrasena: Optional[str] = None
    interes: Optional[str] = None
  
class UsuarioDelete(SQLModel):    
    id: int

class UsuarioLogin(SQLModel):
    correo: str
    contrasena: str