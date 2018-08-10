import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Configuring FontAwesom component
library.add(fab);
library.add(fas);
library.add(far);

Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  el: '#app',
  components: {
    'font-awesome-icon': FontAwesomeIcon
  },
  render: h => h(App)
})
