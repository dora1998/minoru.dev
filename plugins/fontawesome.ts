import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faEnvelope)
library.add(faTwitter, faGithub)

Vue.component('font-awesome-icon', FontAwesomeIcon)
