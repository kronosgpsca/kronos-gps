import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className="font-sans text-gray-900">
      {/* Barra de Navegación Simple */}
      <nav className="flex justify-between items-center p-6 bg-white shadow-md sticky top-0 z-50">
        <div className="text-2xl font-bold text-blue-900">KRONOS GPS</div>
        <div className="hidden md:flex space-x-6 font-semibold">
          <a href="#" className="hover:text-blue-600">Inicio</a>
          <a href="#servicios" className="hover:text-blue-600">Servicios</a>
          <a href="#nosotros" className="hover:text-blue-600">Nosotros</a>
          <a href="#contacto" className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-700">Cotiza Aquí</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center text-center text-white bg-blue-900">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Control y Monitoreo en Tiempo Real</h1>
          <p className="text-xl mb-8">La mejor herramienta de gestión para tu vehiculo o flota en Caracas.</p>
          <div className="flex justify-center space-x-4">
            <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-lg font-bold transition">Saber más</button>
            <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition">Cotizar</button>
          </div>
        </div>
      </section>

      {/* Servicios Rápidos */}
      <section id="servicios" className="py-20 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-12">Nuestros Servicios</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:transform hover:-translate-y-2 transition">
            <div className="text-4xl mb-4">🚗</div>
            <h3 className="text-xl font-bold mb-2">Rastreo Vehicular</h3>
            <p className="text-gray-600">Monitoreo constante para vehículos particulares y empresariales con cobertura total.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:transform hover:-translate-y-2 transition">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-bold mb-2">Gestión de Flotas</h3>
            <p className="text-gray-600">Optimiza tus tiempos en el tráfico de la ciudad y controla las rutas de tu vehículo.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:transform hover:-translate-y-2 transition">
            <div className="text-4xl mb-4">🛡️</div>
            <h3 className="text-xl font-bold mb-2">Seguridad</h3>
            <p className="text-gray-600">Control eficiente al personal en campo las 24 horas.</p>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">¿Quieres soluciones de rastreo?</h2>
            <p className="text-gray-700 mb-4">Es importante el rastreo satelital GPS, más aún en la actualidad, donde la seguridad y la eficiencia son la prioridad.</p>
            <ul className="space-y-3">
              <li className="flex items-center">✅ Respuesta inmediata a emergencias</li>
              <li className="flex items-center">✅ Soporte técnico especializado</li>
              <li className="flex items-center">✅ Calidad garantizada en el servicio</li>
            </ul>
          </div>
          <div className="bg-blue-100 h-64 rounded-2xl flex items-center justify-center text-blue-900 font-bold italic">
            [Espacio para imagen de plataforma GPS]
          </div>
        </div>
      </section>

      {/* Footer / Contacto rápido */}
      <footer id="contacto" className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">KRONOS GPS</h3>
            <p className="text-gray-400">Líderes en logística y ubicación satelital con tecnología de punta.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contáctanos</h3>
            <p className="text-gray-400">Caracas, Venezuela</p>
            <p className="text-gray-400">Ventas: +58 (XXXX) XXXXXXX</p>
            <p className="text-blue-400 font-bold mt-4 cursor-pointer hover:underline">WhatsApp Directo</p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          © 2026 Kronos GPS - Todos los derechos reservados.
        </div>
      </footer>
    </div>
  )
}
