import { createRouter, createWebHistory } from 'vue-router';
import AddRemove from './pages/AddRemove'
import Calendar from './pages/Calendar';
import Home from './pages/Home';
import Markdown from './pages/Markdown';
import Slider from './pages/Slider';

const routes = [
  { path: '/', component: Home },
  { path: '/addRemove', component: AddRemove },
  { path: '/calendar', component: Calendar },
  { path: '/markdown', component: Markdown },
  { path: '/slider', component: Slider },
];

const router = createRouter({
    history: createWebHistory(),
    routes
  }
);

export default router;
