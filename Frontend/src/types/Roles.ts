export const ROLES = {
  ADMIN: "admin",
  COLABORADOR: "colaborador",
  APRENDIZ: "aprendiz",
} as const;

export type Rol = (typeof ROLES)[keyof typeof ROLES]