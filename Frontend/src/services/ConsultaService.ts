import axios from 'axios'
import type { Mensaje } from '../types/Mensaje'
const api="http://localhost:8000/api"

const ConsultaService={
    obtenerRespuestas: async (mensaje: Mensaje) => {
        const response = await axios.post(`${api}/mensajes/`, mensaje);
        return response.data;
    }
}
export default ConsultaService;