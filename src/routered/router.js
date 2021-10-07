import Vue from 'vue';
import VueRouter from 'vue-router';
import index from '../components/index.vue';
Vue.use(VueRouter);

var router = new VueRouter({
    routes: [
        { path: '/', redirect: "/index" },
        { path: "/index", component: index }
    ]
})

export default router