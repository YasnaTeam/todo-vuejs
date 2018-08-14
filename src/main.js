import Vue from 'vue'
import VueRouter from 'vue-router'
import vueResource from 'vue-resource';
import App from './App.vue'
import {routes} from './routes';
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

// Register Vue-Resource
Vue.use(vueResource);

// Register Vue-Router
Vue.use(VueRouter);
const router = new VueRouter({
  routes,
  //mode: 'history'
});

new Vue({
  el: '#app',
  router,
  components: {
    'font-awesome-icon': FontAwesomeIcon
  },
  render: h => h(App)
});
