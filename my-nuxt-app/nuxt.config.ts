import vuetify from 'vite-plugin-vuetify';

export default defineNuxtConfig({
  // Base URL for GitHub Pages (important for static deployments)
  app: {
    baseURL: '/OverwatchGallery/', // Replace with your repository name
  },

  // Enable CSS for Vuetify
  css: ['vuetify/styles'],

  // Nuxt Build Configuration
  build: {
    transpile: ['vuetify'], // Ensures Vuetify components are transpiled
  },

  // Vite Plugins Configuration
  vite: {
    plugins: [
      vuetify({
        autoImport: true, // Automatically imports Vuetify components
      }),
    ],
  },

  // Enable Pages Directory
  pages: true,
});
