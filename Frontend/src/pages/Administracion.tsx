import Formulario from "../components/Formularios/Formulario"
import Navbar from "../components/Navegacion/Navbar"
const Administracion = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Formulario modo="crear" onCrear={async (usuario) => {}}  ></Formulario>
    </div>
  )
}

export default Administracion