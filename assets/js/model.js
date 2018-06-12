import Vue from 'vue'
import VueHighlightJS from 'vue-highlightjs'

Vue.use(VueHighlightJS);

let app = new Vue({
    el: '#app',
    data: {
        text: ''
    },
    computed: {
        lowerText() {
            return this.text.toLowerCase()
        }
    }
});

