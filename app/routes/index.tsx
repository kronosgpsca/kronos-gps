import { createFileRoute } from '@tanstack/react-router'
import { Facebook, Instagram, Music2, MessageCircle, Download, Monitor } from 'lucide-react'
import { useEffect, useState } from 'react'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  const [appLink, setAppLink] = useState('#')

  // Lógica para determinar el link de descarga según el dispositivo
  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
    
    if (/android/i.test(userAgent)) {
      setAppLink('https://play.google.com/store/apps/details?id=com.ww.iopgps')
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
      setAppLink('https://apps.apple.com/bo/app/iopgps/id6446336643')
    } else {
      setAppLink('#') // Link para PC o navegadores genéricos
    }
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* 🟢 ENCABEZADO ACTUALIZADO CON DESCARGA Y PLATAFORMA 🟢 */}
      <header className="bg-white border-b border-slate-100 p-2 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* SECCIÓN DEL LOGO */}
          <div className="flex items-center">
            <a href="/" title="Volver al Inicio">
              <img 
                src="/Logo_Kronos.png"
                alt="Logotipo de Kronos GPS - Rastreo Satelital en Caracas" 
                className="h-22 w-auto md:h-28 hover:opacity-80 transition"
              />
            </a>
          </div>

          {/* NAVEGACIÓN ACTUALIZADA */}
          <nav className="flex space-x-2 md:space-x-4 items-center">
            <a href="#" className="hidden lg:block text-slate-700 hover:text-blue-600 font-medium text-sm">Inicio</a>
            <a href="#servicios" className="hidden md:block text-slate-700 hover:text-blue-600 font-medium text-sm">Servicios</a>
            
            {/* OPCIÓN 1: Descarga la APP (Detecta dispositivo) */}
            <a 
              href={appLink}
              target="_blank"
              className="flex items-center gap-2 text-blue-600 hover:bg-blue-50 border border-blue-200 px-3 py-2 rounded-lg font-bold text-xs md:text-sm transition shadow-sm"
            >
              <Download size={16} />
              <span className="hidden sm:inline">Descarga la APP</span>
              <span className="sm:hidden">APP</span>
            </a>

            {/* OPCIÓN 2: Acceder a Plataforma */}
            <a 
              href="https://tu-plataforma-gps.com" 
              target="_blank"
              className="flex items-center gap-2 bg-slate-900 text-white px-3 py-2 rounded-lg font-bold text-xs md:text-sm hover:bg-slate-800 transition shadow-md"
            >
              <Monitor size={16} />
              <span className="hidden sm:inline">Acceder a Plataforma</span>
              <span className="sm:hidden">Acceder</span>
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
            <div className="bg-slate-50 p-10 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:transform hover:-translate-y-2 transition duration-300">
              <div className="text-5xl mb-6">🚗</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Rastreo Vehicular</h3>
              <p className="text-slate-600 leading-relaxed text-sm">Monitoreo constante para vehículos particulares y empresariales con cobertura total.</p>
            </div>
            <div className="bg-slate-50 p-10 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:transform hover:-translate-y-2 transition duration-300">
              <div className="text-5xl mb-6">📊</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Gestión de Flotas</h3>
              <p className="text-slate-600 leading-relaxed text-sm">Optimiza tus tiempos en el tráfico de la ciudad y controla el uso de combustible.</p>
            </div>
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

      {/* 🔴 FOOTER ACTUALIZADO 🔴 */}
      <footer id="contacto" className="bg-white text-slate-900 py-16 px-6 border-t border-slate-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">KRONOS GPS</h3>
            <p className="text-slate-600 leading-relaxed mb-6">Líderes en logística y ubicación satelital en Venezuela con tecnología de punta.</p>
            
            <div className="flex flex-wrap gap-4">
              <a href="https://facebook.com/kronosGPSsatelital" target="_blank" className="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition border border-slate-200 px-3 py-2 rounded-lg text-sm font-bold uppercase tracking-wider shadow-sm">
                <Facebook size={18} />
                Facebook
              </a>
              <a href="https://instagram.com/kronosgps" target="_blank" className="flex items-center gap-2 text-slate-500 hover:text-pink-600 transition border border-slate-200 px-3 py-2 rounded-lg text-sm font-bold uppercase tracking-wider shadow-sm">
                <Instagram size={18} />
                Instagram
              </a>
              <a href="https://tiktok.com/@kronosgps" target="_blank" className="flex items-center gap-2 text-slate-500 hover:text-black transition border border-slate-200 px-3 py-2 rounded-lg text-sm font-bold uppercase tracking-wider shadow-sm">
                <Music2 size={18} />
                TikTok
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Estamos en contacto</h3>
            <p className="text-slate-600">📍 Caracas, Venezuela</p>
            <p className="text-slate-600">📞 Ventas: +58 (424) 3604526</p>
            <a 
              href="https://wa.me/584243604526?text=Hola,%20deseo%20más%20información" 
              target="_blank"
              className="flex items-center gap-2 text-blue-600 font-bold mt-5 hover:underline text-lg"
            >
              <MessageCircle size={22} />
              Chatear por WhatsApp Directo →
            </a>
          </div>
        </div>
        <div className="border-t border-slate-100 mt-16 pt-10 text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} Kronos GPS - Todos los derechos reservados.
        </div>
      </footer>

      {/* 🟢 BOTÓN FLOTANTE DE WHATSAPP 🟢 */}
      <a 
        href="https://wa.me/584243604526?text=Hola,%20deseo%20una%20cotización" 
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 text-white px-6 py-3 rounded-full shadow-2xl hover:bg-green-600 transition-all hover:scale-105 z-[100] font-bold flex items-center gap-2 border-2 border-white"
      >
        <MessageCircle size={24} />
        <span>WhatsApp</span>
      </a>
    </div>
  )
}
