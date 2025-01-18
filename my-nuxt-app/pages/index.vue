<template>
    <v-app>
      <v-container>
        <h1 class="text-center my-5 title">Overwatch Character Gallery</h1>
  
        <v-row>
          <v-col
            v-for="hero in heroes"
            :key="hero.name"
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
      const response = await fetch('https://overfast-api.tekrop.fr/heroes');
      if (!response.ok) throw new Error('API Error');
  
      const data = await response.json();
  
      heroes.value = data.map((hero) => ({
        id: hero.key, 
        name: hero.name,
        portrait: hero.portrait,
      }));
    } catch (err) {
      console.error('Error fetching heroes:', err);
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
  

  a {
    text-decoration: none; 
  }
  
  a:hover {
    text-decoration: none; 
  }
  

  .v-container {
    background-color: #1c1c1c; 
    padding: 20px;
    border-radius: 10px;
  }
  </style>
  