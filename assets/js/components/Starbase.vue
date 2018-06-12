<template>
    <div class="container" id="app">
        <h2>{{title}}</h2>
        <div class="row">
        <Character v-for="(id,index) in initial_ids" :id="id" :key="index">

        </Character>
        </div>
        <div class="mt-5">
            <a class="btn btn-primary" href="/">Kembali ke halaman utama</a>
        </div>
    </div>
</template>

<script>
    import Character from './Character.vue'
    export default {
        name: 'starbase',
        data() {
            return {
                title: 'Generate your team',
                initial_ids: [1, 13, 14]
            }
        },
        components: {
            Character
        }
    }
</script>