import { Bubble, BubbleContent } from '../ui/bubble'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'
import { useState } from 'react'
import type { Mensaje } from '../../types/Mensaje'
interface VentanaChatProps {
    onSend?: (nuevoMensaje: Mensaje, onServerResponse: (respuesta: Mensaje) => void) => void;
}
const VentanaChat = ({ onSend }: VentanaChatProps) => {
    const [mensajes, setMensajes] = useState<Mensaje[]>([
        { 
            id: "0",
            contenido: "Hola muy buenos dias, en que te puedo ayudar?",
            remitente: "server", 
            fecha: new Date().toJSON() 
        }
    ]);
    const [contenido, setContenido] = useState("");

    const handleEnviar = () => {
        if (!contenido.trim()) return; 

        const nuevoMensaje: Mensaje = {
            id: `user-${Date.now()}`,
            contenido: contenido.trim(),
            remitente: "usuario",
            fecha: new Date().toJSON()
        };

        setMensajes((prev) => [...prev, nuevoMensaje]);
        setContenido("");

        if (onSend) {
            onSend(nuevoMensaje, (respuestaDelServidor) => {
                setMensajes((prev) => [...prev, respuestaDelServidor]);
            });
        }
    };

    return (
        <div className="relative border-x border-slate-200 bg-white shadow-[0_0_50px_-12px_rgba(0,0,0,0.12)] p-4 flex w-[70vw] h-[calc(100vh-64px)] flex-col gap-8 py-12 mx-auto z-10">
            
            <div className="flex-1 overflow-y-auto flex flex-col gap-4">
                {mensajes.map((mensaje) => (
                    <Bubble key={mensaje.id} align={mensaje.remitente === 'usuario' ? 'end' : 'start'} variant={mensaje.remitente=='server'?"secondary":"default"}>
                        <BubbleContent>{mensaje.contenido}</BubbleContent>
                    </Bubble>
                    
                ))}
            </div>

            <div className="flex flex-col gap-2">
                <Textarea 
                    placeholder="Escribe un mensaje..." 
                    value={contenido} 
                    onChange={(e) => setContenido(e.target.value)} 
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                            e.preventDefault();
                            handleEnviar();
                        }
                    }}
                />    
                <Button 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full self-end" 
                    variant="default"
                    onClick={handleEnviar}
                >
                    Enviar
                </Button>
            </div>
        </div>
    );
};

export default VentanaChat;
