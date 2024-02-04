<template>
    <v-card 
        class="h-screen hover d-flex" 
        :color="color" 
        rounded="0" 
        elevation="0"
        @click="vote"
    >
        <ConfettiExplosion v-if="isVoted" />
        <CatCard class="ma-auto" :cat="cat"></CatCard>
    </v-card>
</template>

<script setup>
import { ref } from 'vue'
import CatCard from '@/components/CatCard.vue'
import { useCatsStore } from "@/stores/cats"
import ConfettiExplosion from "vue-confetti-explosion"

const props = defineProps(['cat'])
const emit = defineEmits(['voted'])
const isVoted = ref(false)

const catsStore = useCatsStore()

const color = ref('primary')

function vote() {
    color.value = 'info'
    catsStore.vote(props.cat.id)
    isVoted.value = true
    emit('voted')
}
</script>

<style>
.hover:hover {
    background-color: #fff;
}
</style>