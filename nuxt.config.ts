// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    'nuxt-primevue',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode'
  ],
  primevue: {
    usePrimeVue: true
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/css/variables.scss";',
        },
      },
    },
    // Better support for Tauri CLI output
    // clearScreen: false,
    // Enable environment variables
    // Additional environment variables can be found at
    // https://tauri.app/2/reference/environment-variables/
    // envPrefix: ['VITE_', 'TAURI_'],
    server: {
      // Tauri requires a consistent port
      // strictPort: true,
      // Enables the development server to be discoverable by other devices for mobile development
      // host: '0.0.0.0',
      hmr: {
        // Use websocket for mobile hot reloading
        protocol: 'ws',
        // Make sure it's available on the network
        // host: '0.0.0.0',
        // Use a specific port for hmr
        port: 5183,
      },
    },
  },
  //css: ['primevue/resources/themes/aura-dark-green/theme.css'],
  build: {
    transpile: [
      '@fortawesome/vue-fontawesome',
      '@fortawesome/fontawesome-svg-core',
      '@fortawesome/free-solid-svg-icons',
    ]
  },
  colorMode: {
    classSuffix: ''
  }
})
