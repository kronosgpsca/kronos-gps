import { createApp } from 'vinxi'
import tsConfigPaths from 'vite-tsconfig-paths'

export default createApp({
  server: {
    preset: 'github-pages',
  },
  routers: [
    {
      name: 'public',
      type: 'static',
      dir: './public',
    },
    {
      name: 'client',
      type: 'spa',
      handler: './index.html', // Vinxi usará el HTML como entrada
      target: 'browser',
      plugins: () => [
        tsConfigPaths({
          projects: ['./tsconfig.json'],
        }),
      ],
    }
  ],
})
