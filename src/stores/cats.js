import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCatsStore = defineStore('cats', () => {
  const isLoading = ref(false)
  const cats = ref([])

  function getCatsList() {
    isLoading.value = true
    fetch('https://data.latelier.co/cats.json')
      .then(async response => {
        const rep = await response.json()

        // Assign random votes for testing purposes
        cats.value = rep.images.map(i => {
          i.votes = Math.floor(Math.random() * 500)
          return i
        })
        isLoading.value = false
      })
  }

  function vote(catId) {
    const catIndex = cats.value.findIndex(cat => cat.id === catId)
    cats.value[catIndex].votes ++
  }

  return { cats, getCatsList, vote }

})
