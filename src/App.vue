<script setup>
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import { useCatsStore } from "@/stores/cats"

const catsStore = useCatsStore()

onMounted(() => {
  catsStore.getCatsList()
})
</script>

<template>
  <main>
    <RouterView />
  </main>
</template>

<style>
  body {
    font-family: Montserrat,sans-serif;
  }
</style>

