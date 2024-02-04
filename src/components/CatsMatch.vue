<template>
    <v-row no-gutters>
      <v-col>
        <Transition name="slide-left" mode="out-in">
            <CatMashCard :key="key" :cat="cat1" @voted="vote()" />
        </Transition>
      </v-col>
      <v-col>
        <Transition name="slide-right" mode="out-in">
            <CatMashCard :key="key" :cat="cat2" @voted="vote()" />
        </Transition>
      </v-col>
    </v-row>
</template>

<script setup>
import { ref, onMounted } from "vue"
import CatMashCard from "@/components/CatMashCard.vue";
import { useCatsStore } from "@/stores/cats"

const catsStore = useCatsStore()

const cat1 = ref()
const cat2 = ref()
const key = ref(1)

function getRandomNumber() {
    return Math.floor(Math.random() * catsStore.cats.length)
}

function assignRandomCats() {
    cat1.value = catsStore.cats[getRandomNumber()]
    cat2.value = catsStore.cats[getRandomNumber()]
}

function vote() {
    setTimeout(() => {
        assignRandomCats()
        key.value++
    }, 1000)
}

onMounted(() => {
    assignRandomCats()
})
</script>

<style>
.slide-left-enter-active, .slide-right-enter-active {
  transition: all 0.3s ease-out;
}

.slide-left-leave-active, .slide-right-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-left-enter-from,
.slide-left-leave-to {
  transform: translateX(-150px);
  opacity: 0;
}

.slide-right-enter-from,
.slide-right-leave-to {
  transform: translateX(150px);
  opacity: 0;
}
</style>