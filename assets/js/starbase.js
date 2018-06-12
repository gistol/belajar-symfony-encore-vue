import Vue from 'vue'
import VueHighlightJS from 'vue-highlightjs'
import Starbase from './components/Starbase'

Vue.use(VueHighlightJS);

new Vue({
   el: '#app',
   render: h => h(Starbase)
});