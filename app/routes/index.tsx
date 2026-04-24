import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* 🟢 ENCABEZADO OPTIMIZADO CON LOGO 🟢 */}
      <header className="bg-white border-b border-slate-100 p-2 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* SECCIÓN DEL LOGO (Izquierda) */}
          <div className="flex items-center">
            <a href="/" title="Volver al Inicio">
              <img 
                src="/Logo_Kronos.png"
                alt="Logotipo de Kronos GPS - Rastreo Satelital en Caracas" 
                className="h-22 w-auto md:h-28 hover:opacity-80 transition" // Controla el tamaño aquí
              />
            </a>
          </div>

          {/* NAVEGACIÓN (Derecha) */}
          <nav className="flex space-x-2 md:space-x-6 items-center">
            <a href="#" className="hidden md:block text-slate-700 hover:text-blue-600 font-medium text-sm">Inicio</a>
            <a href="#servicios" className="text-slate-700 hover:text-blue-600 font-medium text-sm">Servicios</a>
            <a href="#contacto" className="bg-blue-600 text-white px-5 py-2 rounded-full font-semibold text-sm hover:bg-blue-700 transition shadow-sm">
              Cotizar Aquí
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="py-24 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-xs font-semibold mb-6">
            <span>🚀</span>
            <span className="ml-2">TECNOLOGÍA GPS DE PUNTA</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 tracking-tight">
            Control y Monitoreo en <span className="text-blue-600">Tiempo Real</span>
          </h2>
          <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-3xl mx-auto">
            La mejor herramienta de gestión empresarial para tu personal y flotas en Caracas. Optimiza tiempos y protege tus activos.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-slate-900 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-slate-800 transition shadow-lg">
              Saber más
            </button>
            <button className="bg-white text-slate-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition shadow-lg border border-slate-200">
              Cotizar
            </button>
          </div>
        </div>
      </main>

      {/* Sección de Servicios */}
      <section id="servicios" className="py-24 px-6 bg-white text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-16 tracking-tight">Nuestros Servicios Principales</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Servicio 1 */}
            <div className="bg-slate-50 p-10 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:transform hover:-translate-y-2 transition duration-300">
              <div className="text-5xl mb-6">🚗</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Rastreo Vehicular</h3>
              <p className="text-slate-600 leading-relaxed text-sm">Monitoreo constante para vehículos particulares y empresariales con cobertura total.</p>
            </div>
            {/* Servicio 2 */}
            <div className="bg-slate-50 p-10 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:transform hover:-translate-y-2 transition duration-300">
              <div className="text-5xl mb-6">📊</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Gestión de Flotas</h3>
              <p className="text-slate-600 leading-relaxed text-sm">Optimiza tus tiempos en el tráfico de la ciudad y controla el uso de combustible.</p>
            </div>
            {/* Servicio 3 */}
            <div className="bg-slate-50 p-10 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:transform hover:-translate-y-2 transition duration-300">
              <div className="text-5xl mb-6">🛡️</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Seguridad Horus</h3>
              <p className="text-slate-600 leading-relaxed text-sm">Control eficiente a la fuerza de ventas y personal en campo las 24 horas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-24 px-6 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight">¿Por qué elegir Kronos GPS?</h2>
              <p className="text-slate-300 mb-10 leading-relaxed text-lg">Entendemos los retos de seguridad y eficiencia en Caracas. Nuestra plataforma te ofrece soluciones inmediatas y soporte especializado.</p>
              <ul className="space-y-5 text-lg">
                <li className="flex items-center"><span className="text-blue-400 mr-3">✅</span> Respuesta inmediata a emergencias</li>
                <li className="flex items-center"><span className="text-blue-400 mr-3">✅</span> Soporte técnico especializado local</li>
                <li className="flex items-center"><span className="text-blue-400 mr-3">✅</span> Calidad garantizada en hardware y software</li>
              </ul>
            </div>
            <div className="bg-slate-800 h-96 rounded-3xl flex items-center justify-center text-slate-500 font-bold italic border border-slate-700 shadow-inner">
              [Espacio para imagen de plataforma GPS]
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contacto */}
      <footer id="contacto" className="bg-white text-slate-900 py-16 px-6 border-t border-slate-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">KRONOS GPS</h3>
            <p className="text-slate-600 leading-relaxed">Líderes en logística y ubicación satelital en Venezuela con tecnología de punta.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Estamos en contacto</h3>
            <p className="text-slate-600">Caracas, Venezuela</p>
            <p className="text-slate-600">Ventas: +58 (XXXX) XXXXXXX</p>
            <p className="text-blue-600 font-bold mt-5 cursor-pointer hover:underline text-lg">Llamar a WhatsApp Directo</p>
          </div>
        </div>
        <div className="border-t border-slate-100 mt-16 pt-10 text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} Kronos GPS - Todos los derechos reservados.
        </div>
      </footer>
    </div>
  )
}
