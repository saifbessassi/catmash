<template>
  <header>
    <h1 class="text-white text-center mt-10">Which cat is the cutest?</h1>
  </header>
  <v-container fluid class="pa-0 bg-secondary">
    <CatsMatch />
  </v-container>
  <footer>
    <NavigationButton to="/" text="See all our cats" />
  </footer>
</template>

<script setup>
import CatsMatch from "@/components/CatsMatch.vue";
import NavigationButton from "@/components/NavigationButton.vue";
</script>

<style scoped>
header {
  position: absolute;
  z-index: 1;
  width: 100%;
}

footer {
  position: absolute;
  bottom: 0;
  z-index: 1;
  width: 100%;
}
</style>
