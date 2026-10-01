from fastapi import APIRouter
from schemas.mensaje import mensaje

router = APIRouter(prefix="/api/mensajes", tags=["mensajes"])

@router.post("/",response_model=mensaje,status_code=200)
def obtener_mensajes(mensaje: mensaje):
    return {"id": "1", "contenido": "Hola", "remitente": "server", "fecha": "2024-06-01T12:00:00"}