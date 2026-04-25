import { createFileRoute } from '@tanstack/react-router'
import { Facebook, Instagram, Music2, MessageCircle, Download, Monitor } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useState, useEffect } from 'react';

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  const [appLink, setAppLink] = useState('#')

  const [currentSlide, setCurrentSlide] = useState(0);

const slides = [
  {
    image: '/Imagen1.webp',
    title: ' ',
    subtitle: ' '
   },
  {
    image: '/Imagen2.webp',
    title: ' ',
    subtitle: ' '
  },
  {
    image: '/Imagen3.webp',
    title: ' ',
    subtitle: ' '
  }
];
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
      
      if (/android/i.test(userAgent)) {
        setAppLink('https://play.google.com/store/apps/details?id=com.ww.iopgps') 
      } else if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
        setAppLink('https://apps.apple.com/bo/app/iopgps/id6446336643') 
      } else {
        setAppLink('https://kronosgps.com') 
      }
    }
  }, [])

  useEffect(() => {
  const timer = setInterval(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, 5000);
  return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans">
    
      {/* 🟢 CABECERA CORREGIDA 🟢 */}
      <header className="bg-[#E2E8F0] border-b border-slate-300 p-2 sticky top-0 z-50">
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
            
            <div className="hidden lg:flex flex-col border-l border-slate-400 pl-4">
              <p className="text-lg md:text-xl font-black text-blue-600 leading-tight italic">
                Controla el Tiempo, Domina tu Ruta.
              </p>
            </div>
          </div>

          {/* NAVEGACIÓN (Derecha) */}
          <nav className="flex space-x-2 md:space-x-4 items-center">
          {/* Enlaces de Navegación Principal */}
          <div className="hidden xl:flex items-center space-x-6 mr-4">
            <a href="#" className="text-slate-700 hover:text-blue-600 font-bold text-sm transition">
            Inicio
            </a>
            <a href="#servicios" className="text-slate-700 hover:text-blue-600 font-bold text-sm transition">
            Servicios
            </a>
            <a href="#contacto" className="text-slate-700 hover:text-blue-600 font-bold text-sm transition">
            Contáctanos
            </a>
          </div>
       {/* Botón Descarga */}
            <a 
              href={appLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-slate-900 text-white px-3 py-2 rounded-lg font-bold text-xs md:text-sm hover:bg-slate-800 transition shadow-md"
            >
              <Download size={16} />
              <span className="hidden sm:inline">Descarga la APP</span>
              <span className="sm:hidden">APP</span>
            </a>

            {/* Botón Plataforma */}
            <a 
              href="https://www.iopgps.com/" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-slate-900 text-white px-3 py-2 rounded-lg font-bold text-xs md:text-sm hover:bg-slate-800 transition shadow-md"
            >
              <Monitor size={16} />
              <span className="hidden sm:inline">Ingresa a Plataforma</span>
              <span className="sm:hidden">Ingresar</span>
            </a>
          </nav>
        </div>
      </header>

   {/* 🔵 HERO SECTION: IMÁGENES COMO ARTE, TEXTO POR CÓDIGO 🔵 */}
<main className="relative h-[550px] md:h-[500px] w-full overflow-hidden flex items-center justify-center bg-slate-900">
  
  {/* Bloque de Imágenes del Carrusel */}
  {slides.map((slide, index) => (
    <div
      key={index}
      className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
        index === currentSlide ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Fondo difuminado estético */}
      <div 
        className="absolute inset-0 bg-cover bg-center blur-lg scale-105 opacity-20"
        style={{ backgroundImage: `url(${slide.image})` }}
      />
      
      {/* La Imagen Principal (Adaptable y sin recortes) */}
      <div className="relative h-full w-full flex items-center justify-center z-10 p-4">
        <img
          src={slide.image}
          alt="Visual Kronos GPS"
          className="max-h-full max-w-full object-contain drop-shadow-2xl"
        />
      </div>
    </div>
  ))}

  {/* 🔘 INDICADORES (PUNTOS): Fijados al extremo inferior 🔘 */}
  <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center gap-3">
    {slides.map((_, index) => (
      <button
        key={index}
        onClick={() => setCurrentSlide(index)}
        className={`h-2.5 transition-all duration-300 rounded-full shadow-lg ${
          index === currentSlide 
            ? 'w-10 bg-blue-500' 
            : 'w-2.5 bg-white/40 hover:bg-white/80'
        }`}
        aria-label={`Ir a imagen ${index + 1}`}
      />
    ))}
  </div>

</main>

{/* 🟢 Sección En Números 🟢 */}
<section className="py-20 px-6 bg-slate-100 text-slate-900">
  <div className="max-w-6xl mx-auto">
    
    {/* Título de Sección */}
    <div className="mb-16 text-center md:text-left">
      <h2 className="text-3xl md:text-4xl font-black text-blue-600 tracking-tight uppercase">
        Nuestra Trayectoria en Números
      </h2>
      <div className="h-1.5 w-20 bg-blue-500 mt-2 mx-auto md:mx-0 rounded-full"></div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
      
      {/* Columna 1: Experiencia */}
      <div className="flex flex-col items-center p-6 space-y-4">
        <div className="text-blue-600">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/></svg>
        </div>
        <div className="text-5xl font-black text-slate-900">+10</div>
        <p className="text-blue-400 font-bold uppercase tracking-widest text-sm">Años de Experiencia</p>
        <p className="text-slate-600 text-sm leading-relaxed">
          Liderando soluciones de rastreo satelital con tecnología de punta.
        </p>
      </div>

      {/* Columna 2: Vehículos */}
      <div className="flex flex-col items-center p-6 space-y-4">
        <div className="text-blue-600">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-1.1 0-2 .9-2 2v7h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>
        </div>
        <div className="text-5xl font-black text-slate-900">+500</div>
        <p className="text-blue-400 font-bold uppercase tracking-widest text-sm">Vehículos con Servicio</p>
        <p className="text-slate-600 text-sm leading-relaxed">
          Unidades activas optimizando rutas y garantizando seguridad total.
        </p>
      </div>

      {/* Columna 3: Cobertura */}
      <div className="flex flex-col items-center p-6 space-y-4">
        <div className="text-blue-600">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
        </div>
        <div className="text-5xl font-black text-slate-900">+ Cobertura</div>
        <p className="text-blue-400 font-bold uppercase tracking-widest text-sm">Toda Latinoamérica</p>
        <p className="text-slate-600 text-sm leading-relaxed text-center">
          Servicio de rastreo sin fronteras, con conectividad global y local.
        </p>
      </div>

    </div>
  </div>
</section>

      
{/* 🟢 Sección de Servicios 🟢 */}
<section id="servicios" className="py-24 px-6 bg-white">
  <div className="max-w-6xl mx-auto">
    
    {/* Título Principal Unificado */}
    <div className="mb-16 text-center md:text-left">
      <h2 className="text-3xl md:text-4xl font-black text-blue-700 tracking-tight uppercase">
        Nuestros Servicios
      </h2>
      <div className="h-1.5 w-20 bg-blue-600 mt-2 mx-auto md:mx-0 rounded-full"></div>
    </div>

    {/* Grid ajustado a 2 columnas para que 4 servicios queden simétricos */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      
      {/* Servicio 1: Rastreo */}
      <div className="bg-slate-50 p-10 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:transform hover:-translate-y-2 transition duration-300">
        <div className="text-5xl mb-6">🚗</div>
        <h3 className="text-2xl font-bold text-slate-900 mb-3 uppercase tracking-wide">Rastreo Vehicular</h3>
        <p className="text-slate-600 leading-relaxed text-sm font-medium text-justify">
          La función elemental es la triangulación mediante satélites (GPS) para determinar la posición exacta de la unidad. Esto permite a dueños de negocios y familias conocer la ubicación geográfica, la velocidad de desplazamiento y el sentido de la ruta con una precisión de pocos metros.
        </p>
      </div>

      {/* Servicio 2: Gestión de Flotas */}
      <div className="bg-slate-50 p-10 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:transform hover:-translate-y-2 transition duration-300">
        <div className="text-5xl mb-6">📊</div>
        <h3 className="text-2xl font-bold text-slate-900 mb-3 uppercase tracking-wide">Gestión de Flotas</h3>
        <p className="text-slate-600 leading-relaxed text-sm font-medium text-justify mb-4">
          Para las empresas, su función principal es la eficiencia. Al registrar rutas, paradas y tiempos de ralentí (motor encendido sin movimiento), el rastreo vehicular permite:
        </p>
        <ul className="text-slate-600 text-sm font-medium space-y-2">
          <li className="flex items-start">
            <span className="text-blue-600 mr-2">•</span>
            <span>Reducir el consumo de combustible al evitar rutas innecesarias.</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-2">•</span>
            <span>Aumentar la puntualidad en entregas o servicios.</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-2">•</span>
            <span>Fiscalizar el uso del vehículo, asegurando fines laborales.</span>
          </li>
        </ul>
      </div>

      {/* Servicio 3: Seguridad */}
      <div className="bg-slate-50 p-10 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:transform hover:-translate-y-2 transition duration-300">
        <div className="text-5xl mb-6">🛡️</div>
        <h3 className="text-2xl font-bold text-slate-900 mb-3 uppercase tracking-wide">Seguridad</h3>
        <p className="text-slate-600 leading-relaxed text-sm font-medium text-justify">
          Actúa como un escudo preventivo y reactivo. Mediante el uso de geocercas, el sistema notifica si un vehículo sale de una zona segura. En caso de robo, permite la recuperación rápida y ofrece la capacidad de ejecutar un apagado remoto del motor desde la aplicación.
        </p>
      </div>

      {/* Servicio 4: Reportes Estratégicos (NUEVO) */}
      <div className="bg-slate-50 p-10 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:transform hover:-translate-y-2 transition duration-300 flex flex-col justify-between">
        <div>
          <div className="text-5xl mb-6">📋</div>
          <h3 className="text-2xl font-bold text-slate-900 mb-3 uppercase tracking-wide">Reportes e Inteligencia</h3>
          <p className="text-slate-600 leading-relaxed text-sm font-medium text-justify mb-4">
            Contar con reportes convierte al GPS en un <strong>socio estratégico</strong> y no solo en un gasto de seguridad. Transforma el monitoreo pasivo en gestión proactiva:
          </p>
          <ul className="text-slate-600 text-sm font-medium space-y-3">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2 font-bold">›</span>
              <span><strong>Evidencia:</strong> Gestión objetiva basada en datos reales, no suposiciones.</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2 font-bold">›</span>
              <span><strong>Toma de Decisiones:</strong> Identifica patrones como horas pico o áreas de tráfico.</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2 font-bold">›</span>
              <span><strong>Sostenibilidad:</strong> Reduce la huella de carbono optimizando el combustible.</span>
            </li>
          </ul>
        </div>
        <div className="mt-6 pt-4 border-t border-slate-200">
          <p className="text-blue-700 font-black italic text-center text-sm">
            "No puedes mejorar lo que no mides"
          </p>
        </div>
      </div>

    </div>
  </div>
</section>
      
     
{/* 🟢 Footer - SECCION CONTACTANOS 🟢 */}
<footer id="contacto" className="bg-white text-slate-900 py-16 px-6 border-t border-slate-100 font-medium">
  <div className="max-w-6xl mx-auto">
    
    {/* Título Principal de la Sección */}
    <div className="mb-12 text-center md:text-left">
      <h2 className="text-3xl md:text-4xl font-black text-blue-700 tracking-tight uppercase">
        Síguenos o Contáctanos
      </h2>
      <div className="h-1.5 w-20 bg-blue-600 mt-2 mx-auto md:mx-0 rounded-full"></div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Columna Redes Sociales */}
      <div>
        <h3 className="text-xl font-bold mb-6 text-slate-800 uppercase tracking-wide">Redes Sociales</h3>
        <div className="flex flex-wrap gap-4">
          <a href="https://facebook.com/kronosGPSsatelital" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition border border-slate-200 px-4 py-2.5 rounded-xl text-sm font-bold uppercase shadow-sm hover:shadow-md">
            <Facebook size={18} /> Facebook
          </a>
          <a href="https://instagram.com/kronosgps" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-500 hover:text-pink-600 transition border border-slate-200 px-4 py-2.5 rounded-xl text-sm font-bold uppercase shadow-sm hover:shadow-md">
            <Instagram size={18} /> Instagram
          </a>
          <a href="https://tiktok.com/@kronosgps" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-500 hover:text-black transition border border-slate-200 px-4 py-2.5 rounded-xl text-sm font-bold uppercase shadow-sm hover:shadow-md">
            <Music2 size={18} /> TikTok
          </a>
        </div>
      </div>

      {/* Columna Datos de Contacto */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold mb-6 text-slate-800 uppercase tracking-wide">Información Directa</h3>
        <p className="text-slate-600 flex items-center gap-2 text-lg">
          <span>📍</span> Caracas, Venezuela
        </p>
        <p className="text-slate-600 flex items-center gap-2 text-lg">
          <span>📞</span> +58 (424) 3604526
        </p>
        <p className="text-slate-600 flex items-center gap-2 text-lg">
          <span>📧</span> 
          <a href="mailto:kronosgpsca@gmail.com" className="hover:text-blue-600 transition underline underline-offset-4">
            kronosgpsca@gmail.com
          </a>
        </p>
        
        <div className="pt-4">
          <a href="https://wa.me/584243604526" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-green-600 font-black text-xl hover:text-green-700 transition">
            <MessageCircle size={26} /> 
            ¡Chatea con nosotros! →
          </a>
        </div>
      </div>
    </div>
  </div>
</footer>

     {/* WhatsApp Flotante */}
      <a 
        href="https://wa.me/584243604526" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white px-6 py-3 rounded-full shadow-2xl z-[100] font-bold flex items-center gap-2 border-2 border-white transition hover:scale-105"
      >
        <MessageCircle size={24} /> <span>WhatsApp</span>
      </a>
    
    </div>
  )
}
