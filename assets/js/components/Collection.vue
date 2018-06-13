<template>
    <div class="row">
        <div class="col-md-12">
            <div class="row">
            <Item
                    v-for="(item, index) in items"
                    :passed-item="item"
                    :key="index"
                    :type="type"
            />
            </div>
        </div>
    </div>
</template>

<script>

import Item from './Item'

export default {
    name: "collection",
    data() {
        return {
            type: this.$route.params.type,
            items: []
        }
    },
    watch: {
        $route: 'fetchItems'
    },
    methods: {
        fetchItems() {
            this.items = []
            this.type = this.$route.params.type
            let initial_ids = [2, 13, 14]

            for (let i in initial_ids) {
                let id = initial_ids[i]
                fetch(`https://swapi.co/api/${this.type}/${id}`,{
                    method: 'GET'
                })
                    .then(response => response.json())
                    .then(json => this.items.push(json))
            }
        }
    },
    created() {
        this.fetchItems()
    },
    components: {
        Item
    }

}
</script>