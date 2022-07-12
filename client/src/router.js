import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import About from './pages/About.vue';

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/about', name: 'About', component: About },
    { path: '/mods', name: 'Mods', component: About },
    { path: '/manual', name: 'Manual', component: About },
]; // TODO: dynamically add routes?

const router = createRouter({
    linkExactActiveClass: 'route--selected',
    history: createWebHistory(),
    routes
});

export default router;