import type { Rol } from "./Roles";
import type { Area } from "./Areas";

export type Usuario = {
  id?: number;
  nombre: string;
  correo: string;
  contrasena: string;
  rol: Rol;
  intereses: Area[];
};