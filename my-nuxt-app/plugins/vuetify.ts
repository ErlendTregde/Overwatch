import { createVuetify } from 'vuetify';
import 'vuetify/styles'; // Import Vuetify styles
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'; // For Material Design Icons

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: true,
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi,
      },
    },
    theme: {
      defaultTheme: 'dark',
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
