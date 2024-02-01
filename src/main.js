import '@mdi/font/css/materialdesignicons.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          background: '#f2f2f2',
          surface: '#f5f5f5',
          primary: '#06326c',
          secondary: '#0068ff',
          info: '#06ec7b'
        }
      }
    },
    variations: {
      colors: ['primary', 'secondary', 'info'],
      lighten: 4,
      darken: 4
    }
  }
})

const app = createApp(App)

app.use(vuetify)
app.use(createPinia())
app.use(router)

app.mount('#app')
