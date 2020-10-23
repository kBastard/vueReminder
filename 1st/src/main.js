const template = "<div>{{title}}</div>";
const data = function data() {
  return {
    title: "Reminder"
  }
};
const App = {template, data};
Vue.createApp(App).mount('#vue-app');
