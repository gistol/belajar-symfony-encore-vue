import Vue from 'vue'
import VueHighlightJS from 'vue-highlightjs'

Vue.use(VueHighlightJS);

let app = new Vue({
    el: '#app',
    data: {
        randNum: Math.floor(Math.random() * 50) + 1,
        shown: true,
        colors: [
            {title: 'red', primary: true },
            {title: 'green', primary: true },
            {title: 'blue', primary: false },
            {title: 'yellow',primary: false },
            {title: 'orange', primary: false }
        ],
        secretNumber: Math.floor(Math.random() * 100) + 1
    },
    methods: {
        reveal() {
            alert(`Nomor rahasia adalah : ${this.secretNumber}`)
        }
    }
});

