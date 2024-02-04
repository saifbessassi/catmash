<template>
  <v-container>
    <h1 class="text-center text-info my-10">Our awesome cats !</h1>
    <v-row align="center" justify="center">
      <template v-if="catsStore.isLoading">
        <v-col v-for="n in 10" cols="auto">
          <v-skeleton-loader class="ma-3 rounded-xl" height="200" width="200" type="card" />
        </v-col>
      </template>

      <v-col v-for="cat in catsStore.cats" cols="auto">
        <cat-card :cat="cat" class="hover">
          <v-chip variant="flat" color="info" class="mr-2 mb-2 mt-auto ml-auto">
            {{ cat.votes }}<v-icon class="ml-1" icon="mdi-thumb-up" size="sm"></v-icon>
          </v-chip>
        </cat-card>
      </v-col>
    </v-row>
  </v-container>
  <footer>    
    <NavigationButton to="mash" text="Vote for the cutest cat" />
  </footer>
</template>

<script setup>
import { useCatsStore } from "@/stores/cats"
import CatCard from '@/components/CatCard.vue';
import NavigationButton from '@/components/NavigationButton.vue';

const catsStore = useCatsStore()
</script>

<style lang="scss" scoped>
.hover {
  transition: transform 200ms ease-in-out !important;
}

.hover:hover {
  transform: scale(1.2);
}

footer {
  position: fixed;
  bottom: 0;
  z-index: 1;
  width: 100%;
}
</style>