const Navbar=() => {
  return (
 <nav className="bg-blue-800 p-4">  
 <div className="container mx-auto flex items-center justify-between">
    <div className="text-white font-bold text-xl">KnowIA</div>
    <div className="space-x-4">
      <a href="/" className="text-gray-300 hover:text-white">Home</a>
      <a href="/consultas" className="text-gray-300 hover:text-white">Consultas</a>
      <a href="/reportes" className="text-gray-300 hover:text-white">Reportes</a>
      <a href="/administracion" className="text-gray-300 hover:text-white">Administración</a>
    </div>
  </div>
 
 </nav>
  )
}
export default Navbar;