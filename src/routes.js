import ListView from './components/ListView.vue';
import SingleView from './components/SingleView.vue';

export const routes = [

  {path: '', component: ListView, name: 'home'},
  {path: '/task/:id', component: SingleView}

];
