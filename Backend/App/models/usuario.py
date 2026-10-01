from typing import Optional
from sqlmodel import SQLModel, Field

class Usuario(SQLModel, table=True):
  
    id: Optional[int] = Field(default=None, primary_key=True)
    nombre: str
    correo: str = Field(unique=True, index=True)
    contrasena: str = Field(exclude=True)  
    rol: str
    interes: str