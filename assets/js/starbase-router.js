import Vue from 'vue'
import VueHighlightJS from 'vue-highlightjs'
import StarbaseRouter from './components/StarbaseRouter'
import Collection from './components/Collection'
import VueRouter from  'vue-router'

Vue.use(VueHighlightJS);
Vue.use(VueRouter);

const routes = [
    {path: '/data/:type', component: Collection}
];

const router = new VueRouter({
    routes
});

new Vue({
   el: '#app',
   router,
   render: h => h(StarbaseRouter)
});