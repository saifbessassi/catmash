<template>
    <v-card class="hover d-flex ma-3" :image="cat?.url" height="200" width="200" cover rounded="xl">
        <slot></slot>
    </v-card>
</template>

<script setup>
const props = defineProps(['cat'])
</script>