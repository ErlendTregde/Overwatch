import vuetify from 'vite-plugin-vuetify';

export default defineNuxtConfig({
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

  // Global Runtime Configuration (Optional)
  runtimeConfig: {
    public: {
      // Example for adding runtime variables
      appName: 'My Nuxt App with Vuetify',
    },
  },

  // Nuxt Pages Settings
  pages: true, // Ensure the pages directory is enabled for route generation
});
