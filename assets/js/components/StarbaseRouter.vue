<template>
    <div class="container" id="app">
        <h3>Starbase Router</h3>
        <h4>
            <router-link class="link" to="/data/people">Meet the character</router-link> |
            <router-link class="link" to="/data/planets">Explore the planets</router-link>
        </h4>
        <router-view></router-view>
        <div class="mt-5">
            <a class="btn btn-primary" href="/">Kembali ke halaman utama</a>
        </div>
    </div>
</template>