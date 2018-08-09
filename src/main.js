import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Configuring FontAwesom component
library.add(faCoffee);
Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  el: '#app',
  components: {
    'font-awesome-icon': FontAwesomeIcon
  },
  render: h => h(App)
})
