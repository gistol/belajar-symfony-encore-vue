import Vue from 'vue'
import VueHighlightJS from 'vue-highlightjs'

Vue.use(VueHighlightJS);

let app = new Vue({
    el: '#app',
    data: {
        text: 'Hello World',
        count: 0
    },
    methods: {
        alertTime() {
            alert(`this time is ${Date.now().toLocaleString()}`)
        },
        increment() {
            this.count++
        }
    },
    created() {
        this.alertTime()
    },
    mounted() {
        this.alertTime()
    },
    updated() {
        console.log('this.count', this.count)
    }
});

