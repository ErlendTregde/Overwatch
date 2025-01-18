<template>
  <v-app>
    <v-container>
      <h1 class="text-center my-5 title">Overwatch Character Gallery</h1>

      <!-- Gallery Grid -->
      <v-row>
        <v-col
          v-for="hero in heroes"
          :key="hero.id"
          cols="12"
          sm="6"
          md="4"
          lg="3"
        >
          <NuxtLink :to="'/hero/' + hero.id">
            <v-card class="hero-card">
              <v-img :src="hero.portrait" height="250" cover></v-img>
              <v-card-title class="hero-title">{{ hero.name }}</v-card-title>
            </v-card>
          </NuxtLink>
        </v-col>
      </v-row>

      <!-- Error Message -->
      <div v-if="error" class="text-center text-danger">
        <p>Failed to load characters. Please try again later.</p>
      </div>
    </v-container>
  </v-app>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const heroes = ref([]);
const error = ref(false);

onMounted(async () => {
  try {
    const response = await fetch('https://www.erlendtregde.me/OverwatchGallery/heroes.json');
    const data = await response.json();

    // Map relevant data (id, name, and portrait)
    heroes.value = data.map((hero) => ({
      id: hero.key, // Use unique key for dynamic route
      name: hero.name,
      portrait: `https://www.erlendtregde.me/OverwatchGallery/images/${hero.key}.png`,
    }));
  } catch (err) {
    console.error('Error loading heroes:', err);
    error.value = true;
  }
});
</script>

<style scoped>
.title {
  font-family: 'Overwatch', sans-serif;
  color: #ff9d00;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.6);
}

.hero-card {
  transition: transform 0.3s, box-shadow 0.3s;
  background: #2e2e2e;
  border: 2px solid #ff9d00;
  border-radius: 10px;
}

.hero-card:hover {
  transform: scale(1.05);
  box-shadow: 0px 4px 15px rgba(255, 157, 0, 0.6);
}

.hero-title {
  font-family: 'Overwatch', sans-serif;
  font-size: 1.2rem;
  text-align: center;
  color: #ff9d00;
  text-decoration: none;
}

.v-container {
  background-color: #1c1c1c;
  padding: 20px;
  border-radius: 10px;
}
</style>
