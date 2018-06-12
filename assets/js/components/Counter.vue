<template>
    <div>
        <p>Counter saat ini : {{ count }}, klik button untuk menambahkan counter </p>
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