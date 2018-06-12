import Vue from 'vue';
import Counter from './components/Counter'
import 'highlight.js/styles/github.css'
import VueHighlightJS from 'vue-highlightjs'

Vue.use(VueHighlightJS);

/**
 * Create a fresh Vue Application instance
 */
new Vue({
    el: '#app',
    components: { Counter }
});