export const AREAS = {
  TECNOLOGIA: "tecnologia",
  FINANZAS: "finanzas",
  PROYECTO: "proyecto",
} as const;

export type Area = (typeof AREAS)[keyof typeof AREAS]