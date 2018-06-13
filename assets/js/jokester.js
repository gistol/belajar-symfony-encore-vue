import Vue from 'vue'
import VueHighlightJS from 'vue-highlightjs'
import Jokester from './components/Jokester'
import store from './store'

Vue.use(VueHighlightJS)

new Vue({
   el: '#app',
   store,
   render: h => h(Jokester)
});