import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
// import routes from './router/routes'; // Vue Routerの設定をインポート
// import { createRouter, createWebHistory } from 'vue-router';

loadFonts()

// const router = createRouter({
//   history: createWebHistory(),
//   // routes,
// });

createApp(App)
  .use(vuetify)

  .mount('#app')
  
