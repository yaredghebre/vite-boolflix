<script>
export default {
    name: "AppCard",
    props: {
        card: Object
    }
}
</script>

<template>
    <ul v-for="card in store.apiMoviesURL">
        <li><img :src="`${store.imgPath}${card.poster_path}`" alt=""></li>
        <li>Titolo: {{ card.title }}</li>
        <li>Titolo originale: {{ card.original_title }}</li>
    </ul>
    
</template>

<style>
</style>