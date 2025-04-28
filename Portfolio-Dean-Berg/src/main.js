// === src/main.js ===
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { 
  faEnvelope, 
  faBriefcase, 
  faCode, 
  faExternalLinkAlt 
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faGithub, 
  faLinkedin, 
  faEnvelope, 
  faBriefcase, 
  faCode, 
  faExternalLinkAlt
)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.mount('#app')