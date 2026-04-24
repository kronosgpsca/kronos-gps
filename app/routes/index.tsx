import { createFileRoute } from '@tanstack/react-router'
import { Facebook, Instagram, Music2, MessageCircle, Download, Monitor } from 'lucide-react'
import { useEffect, useState } from 'react'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  const [appLink, setAppLink] = useState('#')

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
    if (/android/i.test(userAgent)) {
      setAppLink('https://play.google.com/store/apps/details?id=tu.app.id') 
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
      setAppLink('https://apps.apple.com/app/tu-app-id') 
    } else {
      setAppLink('#') 
    }
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* 🟢 CABECERA CON FONDO VERDE MANZANA CLARO 🟢 */}
      <header className="bg-[#D9F99D] border-b border-slate-200 p-2 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* SECCIÓN IZQUIERDA: LOGO + FRASE */}
          <div className="flex items-center gap-4">
            <a href="/" title="Volver al Inicio" className="flex-shrink-0">
              <img 
                src="/Logo_Kronos.png"
                alt="Logotipo de Kronos GPS" 
                className="h-20 w-auto md:h-24 hover:opacity-80 transition"
              />
            </a>
            
            <div className="hidden lg:flex flex-col border-l border-slate-300 pl-4">
              <p className="text-sm md:text-base font-black text-slate-800 leading-tight">
                Controla el Tiempo, Domina tu Ruta.
              </p>
            </div>
          </div>

          {/* NAVEGACIÓN (Derecha) */}
          <nav className="flex space-x-2 md:space-x-4 items-center">
            <a href="#" className="hidden xl:block text-slate-700 hover:text-blue-600 font-medium text-sm">Inicio</a>
            <a href="#servicios" className="text-slate-700 hover:text-blue-600 font-medium text-sm">Servicios</a>
            <a href={appLink} target="_blank" className="flex items-center gap-2 text-blue-700 hover:bg-white/50 border border-blue-200 px-3 py-2 rounded-lg font-bold text-xs md:text-sm transition shadow-sm bg-white">
              <Download size={16} />
              <span className="hidden sm:inline">Descarga la APP</span>
              <span className="sm:hidden">APP</span>
            </a>

            <a href="https://tu-plataforma-gps.com" target="_blank" className="flex items-center gap-2 bg-slate-900 text-white px-3 py-2 rounded-lg font-bold text-xs md:text-sm hover:bg-slate-800 transition shadow-md">
              <Monitor size={16} />
              <span className="hidden sm:inline">Plataforma</span>
              <span className="sm:hidden">Entrar</span>
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="py-24 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-xs font-semibold mb-6">
            <span>🚀</span>
            <span className="ml-2 uppercase tracking-wider">Tecnología de Vanguardia</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 tracking-tight">
            Control y Monitoreo en <span className="text-blue-600">Tiempo Real</span>
          </h2>

          <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-3xl mx-auto font-medium">
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

      {/* Resto de secciones (Servicios, Footer, etc.) */}
      <section id="servicios" className="py-24 px-6 bg-white text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-16 tracking-tight">Nuestros Servicios Principales</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-slate-50 p-10 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition">
              <div className="text-5xl mb-6">🚗</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Rastreo Vehicular</h3>
              <p className="text-slate-600 leading-relaxed text-sm">Monitoreo constante para vehículos particulares y empresariales.</p>
            </div>
            <div className="bg-slate-50 p-10 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition">
              <div className="text-5xl mb-6">📊</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Gestión de Flotas</h3>
              <p className="text-slate-600 leading-relaxed text-sm">Optimiza tus tiempos y controla el uso de combustible.</p>
            </div>
            <div className="bg-slate-50 p-10 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition">
              <div className="text-5xl mb-6">🛡️</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Seguridad Horus</h3>
              <p className="text-slate-600 leading-relaxed text-sm">Control eficiente a la fuerza de ventas y personal en campo.</p>
            </div>
          </div>
        </div>
      </section>

      <footer id="contacto" className="bg-white text-slate-900 py-16 px-6 border-t border-slate-100 font-medium">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-blue-900">KRONOS GPS</h3>
            <div className="flex flex-wrap gap-4">
              <a href="https://facebook.com/kronosGPSsatelital" target="_blank" className="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition border border-slate-200 px-3 py-2 rounded-lg text-sm font-bold uppercase">
                <Facebook size={18} /> Facebook
              </a>
              <a href="https://instagram.com/kronosgps" target="_blank" className="flex items-center gap-2 text-slate-500 hover:text-pink-600 transition border border-slate-200 px-3 py-2 rounded-lg text-sm font-bold uppercase">
                <Instagram size={18} /> Instagram
              </a>
              <a href="https://tiktok.com/@kronosgps" target="_blank" className="flex items-center gap-2 text-slate-500 hover:text-black transition border border-slate-200 px-3 py-2 rounded-lg text-sm font-bold uppercase">
                <Music2 size={18} /> TikTok
              </a>
            </div>
          </div>
          <div>
            <p className="text-slate-600">📍 Caracas, Venezuela</p>
            <p className="text-slate-600">📞 +58 (424) 3604526</p>
            <a href="https://wa.me/584243604526" target="_blank" className="flex items-center gap-2 text-blue-600 font-bold mt-4 hover:underline">
              <MessageCircle size={22} /> Chatear por WhatsApp →
            </a>
          </div>
        </div>
      </footer>

      <a href="https://wa.me/584243604526" target="_blank" className="fixed bottom-6 right-6 bg-green-500 text-white px-6 py-3 rounded-full shadow-2xl z-[100] font-bold flex items-center gap-2 border-2 border-white transition hover:scale-105">
        <MessageCircle size={24} /> <span>WhatsApp</span>
      </a>
    </div>
  )
}
