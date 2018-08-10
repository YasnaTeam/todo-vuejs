import ListView from './components/ListView.vue';
import SingleView from './components/SingleView.vue';

export const routes = [

  {path: '', component: ListView},
  {path: '/task/:id', component: SingleView}

];
