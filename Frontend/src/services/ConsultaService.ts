import axios from 'axios'
import type { Mensaje } from '../types/Mensaje'
const api= import.meta.env.VITE_DIRECCION_BACK ||"http://localhost:8000/api"

const ConsultaService={
    obtenerRespuestas: async (mensaje: Mensaje) => {
        const response = await axios.post(`${api}/mensajes/`, mensaje);
        return response.data;
    }
}
export default ConsultaService;