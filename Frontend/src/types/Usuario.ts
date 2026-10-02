import type { Rol } from "./Roles";
import type { Area } from "./Areas";

export type Usuario = {
  id: number;
  nombre: string;
  correo: string;
  contrasena: string;
  rol: Rol;
  interes: Area;
};
export type UsuarioCreateDTO = Omit<Usuario, 'id'>;
export type UsuarioResponseDTO = Omit<Usuario, 'contrasena'>;
export type UsuarioUpdateDTO = Partial<Omit<Usuario, 'id'>>;