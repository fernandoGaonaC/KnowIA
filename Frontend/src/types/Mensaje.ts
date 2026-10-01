export type Mensaje = {
    id?: string;
    contenido: string;
    remitente: 'usuario' | 'server';
    fecha: string;
};
