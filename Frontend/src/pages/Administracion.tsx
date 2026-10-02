import Formulario from "../components/Formularios/Formulario"
import Navbar from "../components/Navegacion/Navbar"
import type { Usuario, UsuarioCreateDTO,UsuarioResponseDTO } from "@/types/Usuario"
import UsuarioService from "../services/UsuarioService"
import { Tabla } from "@/components/Tabla/Tabla"
import { Columnas } from "@/components/Tabla/Columnas"
import { useEffect } from "react"
import { useState } from "react"

const Administracion = () => {
 const [usuarios,setUsuarios]=useState<UsuarioResponseDTO[]>([])
  useEffect(() => {
    // 2. Corrección de la Promesa: resolver con .then() o async/await
    UsuarioService.obtenerUsuarios()
      .then((data) => {
        setUsuarios(data) // Guardamos los datos reales en el estado
      })
      .catch((error) => {
        console.error("Error al cargar usuarios:", error)
      })
  }, [])
  
  
  
  function handlerCrear(user:UsuarioCreateDTO){
    UsuarioService.crearUsuario(user)
  }

  return (
    
    <div>
      <Navbar></Navbar>
      <Formulario modo="crear" onCrear={handlerCrear}  ></Formulario>
      <Tabla columns={Columnas} data={usuarios}></Tabla>
    </div>
  )
}

export default Administracion