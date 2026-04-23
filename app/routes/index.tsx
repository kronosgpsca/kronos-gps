import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: () => (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem', textAlign: 'center' }}>
      <h1>🛰️ Kronos GPS</h1>
      <p>Soluciones de rastreo satelital en tiempo real.</p>
      <hr />
      <p>Próximamente: Gestión de flotas y seguridad para tu vehículo.</p>
    </div>
  ),
})
