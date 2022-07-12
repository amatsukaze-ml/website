import { createApp } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue'
import router from './router';

// setup Font Awesome.
import fontAwesome from './fontAwesome';
fontAwesome();

createApp(App)
    .use(router)
    .component('fa', FontAwesomeIcon)
    .mount('#app');
