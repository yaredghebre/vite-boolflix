<script>
import { store } from "../store";
export default {
    name: "AppCard",
    props: {
        item: Object
    },
    data() {
        return {
            store,
        }
    },
    methods: {
        getImgPath(name) {
            return new URL(`../assets/img/${name}.png`, import.meta.url).href
        }
    }
}
</script>

<template>
    <div class="card">
       <img class="card-img-top" :src="`${store.imgPath}${item.poster_path}`" alt="Card image cap">
       <div class="card-body">
            <h3 class="card-text">Titolo: {{ item.title }}</h3>
            <ul>
                <li class="card-text">Titolo Originale: {{ item.original_title }}</li>
                <li class="card-text">Lingua: {{ item.original_language }}</li>
                <li class="card-text">Voto: {{ item.vote_average }}</li>
            </ul>
       </div>
   </div>

   <div class="card">
       <img class="card-img-top" :src="`${store.imgPath}${item.poster_path}`" alt="Card image cap">
       <div class="card-body">
            <h3 class="card-text">Titolo: {{ item.name }}</h3>
            <ul>
                <li class="card-text">Titolo Originale: {{ item.original_name }}</li>
                <li class="card-text">Lingua: {{ item.original_language }}</li>
                <li class="card-text">Voto: {{ item.vote_average }}</li>
            </ul>
       </div>
   </div>

    
</template>

<style>

</style>