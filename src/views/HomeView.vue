<template>
  <v-container>
    <h1 class="text-center text-info my-10">Our awesome cats !</h1>
    <v-row align="center" justify="center">
      <template v-if="isLoading">
        <v-col v-for="n in 10" cols="auto">
          <v-skeleton-loader class="ma-3 rounded-xl" height="200" width="200" type="card" />
        </v-col>
      </template>

      <v-col v-for="cat in catsStore.cats" cols="auto">
        <cat-card :cat="cat">
          <v-chip variant="flat" color="info" class="mr-2 mb-2 mt-auto ml-auto">
            {{ cat.votes }}<v-icon class="ml-1" icon="mdi-thumb-up" size="sm"></v-icon>
          </v-chip>
        </cat-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useCatsStore } from "@/stores/cats"
import CatCard from '@/components/CatCard.vue';

const catsStore = useCatsStore()
const isLoading = ref(true)

onMounted(() => {
  isLoading.value = true
  catsStore.getCatsList().then(() => {
    isLoading.value = false
  })
})
</script>

<style lang="scss">
.hover {
  transition: transform 200ms ease-in-out !important;
}

.hover:hover {
  transform: scale(1.2);
}
</style>