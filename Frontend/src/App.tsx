import {BrowserRouter, Route, Routes} from "react-router-dom";
import { Consultas, Login, Reportes, Administracion, Home } from "./pages";
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home></Home>} />
      <Route path="/login" element={<Login></Login>} />
      <Route path="/consultas" element={<Consultas></Consultas>} />
      <Route path="/reportes" element={<Reportes></Reportes>} />
      <Route path="/administracion" element={<Administracion></Administracion>} />
    </Routes>
    </BrowserRouter>
 
   </>  )
}

export default App
