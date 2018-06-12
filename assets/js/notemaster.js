import Vue from 'vue'
import VueHighlightJS from 'vue-highlightjs'

Vue.use(VueHighlightJS);

let app = new Vue({
    el: '#app',
    data: {
        title: 'Note Master',
        note: {
            title: '',
            text: ''
        },
        notes: [
            {
                title: 'Belajar vue js di bulan Ramadhan',
                text: 'Beajar di bulan ramadhan menjadi lebih produktif',
                date: new Date(Date.now()).toLocaleString()
            }
        ]
    },
    methods : {
        addNote() {
            let {title, text} = this.note;
            this.notes.push({
                title: title,
                text: text,
                date: new Date(Date.now()).toLocaleString()
            })
        },
        removeNote(index) {
            this.notes.splice(index)
        }
    }
});

