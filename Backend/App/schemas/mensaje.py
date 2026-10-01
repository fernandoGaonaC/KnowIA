from sqlmodel import SQLModel
class mensaje(SQLModel):
    id: str
    contenido: str
    remitente: str
    fecha: str