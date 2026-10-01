import Navbar from "../components/Navegacion/Navbar"
import VentanaChat from "../components/ventanaChat/Ventanachat"
import type { Mensaje } from '../types/Mensaje'
import ConsultaService from "../services/ConsultaService"

const Consultas = () => {
  
  function handleChat(nuevoMensaje: Mensaje, onServerResponse: (respuesta: Mensaje) => void) {
    ConsultaService.obtenerRespuestas(nuevoMensaje)
      .then((mensajeDelServer) => {
        // 🕵️‍♂️ 'mensajeDelServer' ya contiene directamente el objeto enviado por FastAPI
        console.log("Datos limpios del servidor:", mensajeDelServer);

        const mensajeFinal: Mensaje = {
          // Usamos la información directa de la respuesta de forma segura
          id: mensajeDelServer?.id || (Date.now()).toString(),
          contenido: mensajeDelServer?.contenido || "Error: El servidor envió un mensaje vacío",
          remitente: "server", 
          fecha: mensajeDelServer?.fecha || new Date().toJSON()
        };
        
        // Enviamos al hijo para pintar en pantalla
        onServerResponse(mensajeFinal);
      })
      .catch((error) => {
        console.error("Error al obtener respuesta del backend:", error);
      });
  }

  return (
    <div>
      <Navbar />
      <VentanaChat onSend={handleChat} />
    </div>
  )
}

export default Consultas;
