import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCatsStore = defineStore('cats', () => {
  const cats = ref([])

  function getCatsList() {
    return fetch('https://data.latelier.co/cats.json')
      .then(async response => {
        const rep = await response.json()

        // Assign random votes for testing purposes
        cats.value = rep.images.map(i => {
          i.votes = Math.floor(Math.random() * 500)
          return i
        })
      })
  }

  return { cats, getCatsList }

})
