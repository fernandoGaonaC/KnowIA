import axios from "axios";
import type { Usuario } from "../types/Usuario";

const api = "http://localhost:8000/api/usuario/";

const UsuarioService = {
  obtenerUsuario: async () => {
    return axios.get(api).then((response) => response.data);
  },

  crearUsuario: (usuario: Usuario) => {
    return axios.post(api, usuario).then((response) => response.data);
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