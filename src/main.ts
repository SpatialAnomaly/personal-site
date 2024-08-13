import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { plugin, defaultConfig } from '@formkit/vue'
import { VueReCaptcha } from 'vue-recaptcha-v3'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(plugin, defaultConfig)
app.use(VueReCaptcha, {
  siteKey: '6LdUNhoqAAAAAC3p_oglOTKguBFWIH7_K8-Q6nDJ',
  loaderOptions: {
    useRecaptchaNet: true
  }
})

app.mount('#app')
