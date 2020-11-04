import {createRouter, createWebHistory} from 'vue-router';
import AddRemove from './pages/AddRemove'
import Calendar from './pages/Calendar';
import Home from './pages/Home';
import Markdown from './pages/Markdown';
import Slider from './pages/Slider';
import Calculator from './pages/Calculator';
import ReusableModal from './pages/ReusableModal';
import Chat from './pages/Chat';
import UserCrud from './pages/UserCrud';
import TensorFlow from './pages/TensorFlow';
import store from './store/index'

const routes = [
  {path: '/', component: Home},
  {path: '/addRemove', component: AddRemove},
  {path: '/calendar', component: Calendar},
  {path: '/markdown', component: Markdown},
  {path: '/slider', component: Slider},
  {path: '/calculator', component: Calculator},
  {path: '/modal', component: ReusableModal},
  {
    path: '/chat', component: Chat,
    meta: {middleware: 'auth'}
  },
  {path: '/crud', component: UserCrud},
  {path: '/tensor', component: TensorFlow},
];

const router = createRouter({
    history: createWebHistory(),
    routes
  }
);

router.beforeEach((to, from, next) => {
  if(to.meta.middleware) {
    const middle = require(`./middleware/${to.meta.middleware}`);
    if(middle){
      middle.default(next,store);
    }
  }else{
    next();
  }
});

export default router;
