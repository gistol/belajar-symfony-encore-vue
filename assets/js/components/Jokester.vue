<template>
    <div class="container" id="app">
        <h3>{{title}}</h3>
        <button class="btn btn-primary" @click="initJokes">Add ten random jokes</button>
        <button class="btn btn-primary" @click="addJoke">Add a joke</button>
        <br />
        <span v-for="type in types">
            <input type="checkbox" :value="type" v-model="checkedTypes" checked>
            <label> {{ type }}</label>&nbsp;
        </span>
        <div class="row">
            <div class="col-md-12">
                <div class="row">
                    <Joke
                            v-for="(joke,index) in $store.state.jokes"
                            v-show="checkedTypes.includes(joke.type)"
                            :joke="joke"
                            :index="index"
                    />
                </div>
            </div>
        </div>
        <div class="mt-5">
            <a class="btn btn-primary" href="/">Kembali ke halaman utama</a>
        </div>
    </div>

</template>

<script>
    import { mapActions } from 'vuex'
    import Joke from './Joke'
    export default {
        name: 'jokester',
        data() {
            return {
                title: 'Jokester',
                types: ['general', 'knock-knock', 'programming'],
                checkedTypes: ['general', 'knock-knock', 'programming']
            }
        },
        methods: mapActions([
            'initJokes',
            'addJoke'
        ]),
        components: {
            Joke
        }
    }
</script>