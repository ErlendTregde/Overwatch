<template>
  <v-app>
    <v-container>
      <!-- Back Button -->
      <v-btn href="/" color="orange darken-2" class="mb-5 back-btn">
        Back to Gallery
      </v-btn>

      <!-- Hero Details Section -->
      <v-row class="hero-details">
        <v-col cols="12" md="6">
          <v-img :src="hero.portrait" height="400" cover class="hero-img"></v-img>
        </v-col>
        <v-col cols="12" md="6" class="details-text">
          <h1 class="hero-name">{{ hero.name }}</h1>
          <p><strong>Role:</strong> {{ hero.role }}</p>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const heroId = route.params.id;

const hero = ref({});
const error = ref(false);

onMounted(async () => {
  try {
    const response = await fetch('https://www.erlendtregde.me/OverwatchGallery/heroes.json');
    const data = await response.json();

    // Find the hero by the ID (key)
    const heroData = data.find((h) => h.key === heroId);
    if (!heroData) throw new Error('Hero not found');

    // Map the hero data
    hero.value = {
      name: heroData.name,
      portrait: heroData.portrait, // Use direct URL for the portrait
      role: heroData.role,
    };
  } catch (err) {
    console.error('Error loading hero details:', err);
    error.value = true;
  }
});
</script>

<style scoped>
.back-btn {
  background-color: #ff9d00;
  color: black;
  font-weight: bold;
}

.hero-details {
  background-color: #2e2e2e;
  color: white;
  padding: 20px;
  border-radius: 10px;
}

.hero-name {
  font-family: 'Overwatch', sans-serif;
  color: #ff9d00;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.6);
}

.hero-img {
  border: 2px solid #ff9d00;
  border-radius: 10px;
}

.details-text p {
  font-size: 1.1rem;
}

.v-container {
  background-color: #1c1c1c;
  border-radius: 10px;
}
</style>
