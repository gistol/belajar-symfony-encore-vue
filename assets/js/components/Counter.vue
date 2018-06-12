<template>
    <div>
        <p>This is an example of a counter components in VueJs {{ count }} </p>
        <button @click="increment" class="btn btn-success btn-sm"> Increment by {{ addNum }}</button>
    </div>
</template>

<script>
export default {
    name: "counter",
    props: {
       addNum: {
           type: Number,
           default: 1
       }
    },
    data() {
        return {
            count: 0
        }
    },
    methods: {
        increment() {
            this.count += this.addNum;
        }
    }

}
</script>