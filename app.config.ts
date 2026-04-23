import { createApp } from 'vinxi'
import tsConfigPaths from 'vite-tsconfig-paths'
import tailwindcss from '@tailwindcss/vite'

export default createApp({
  server: {
    preset: 'github-pages',
  },
  routers: [
    {
      name: 'client',
      type: 'spa',
      handler: './index.html',
      target: 'browser',
      base: '/',
      plugins: () => [
        tailwindcss(),
        tsConfigPaths({
          projects: ['./tsconfig.json'],
        }),
      ],
    }
  ],
})
