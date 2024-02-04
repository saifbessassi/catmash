<template>
    <RouterLink :to="to">
      <h1 class="text-center">
        <v-chip link size="x-large" color="secondary" variant="flat" class="mb-5">{{ text }}</v-chip>
      </h1>
    </RouterLink>>
</template>

<script setup>
defineProps(['to', 'text'])
</script>