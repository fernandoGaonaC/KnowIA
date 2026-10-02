import axios from "axios";
import type { Usuario, UsuarioCreateDTO } from "../types/Usuario";
const api= import.meta.env.VITE_DIRECCION_BACK ||"http://localhost:8000/api"

const UsuarioService = {
  obtenerUsuarios: async () => {
    return axios.get(`${api}/usuario`).then((response) => response.data);
  },

  crearUsuario: (usuario: UsuarioCreateDTO) => {
    return axios.post(`${api}/usuario`, usuario).then((response) => response.data);
  },

  actualizarUsuario: (usuario: Usuario) => {
    return axios
      .put(`${api}${usuario.id}/`, usuario)
      .then((response) => response.data);
  },

  eliminarUsuario: (usuarioId: number) => {
    return axios.delete(`${api}${usuarioId}/`).then((response) => response.data);
  },
};

export default UsuarioService;