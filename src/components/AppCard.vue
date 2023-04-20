<script>
import { store } from "../store";
import LangFlag from 'vue-lang-code-flags';
export default {
    name: "AppCard",
    components: {
        LangFlag
    },
    props: {
        item: Object
    },
    data() {
        return {
            store,
        }
    },
    computed: {
        roundVote() {
            return Math.round(this.item.vote_average / 2)
        },

        generateVote() {
            return Math.ceil(this.item.vote_average / 2)
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
        <div class="side-a">
            <img class="card-img-top" :src="`${store.imgPath}${item.poster_path}`" alt="Card image cap">
        </div>
        
        <div class="side-b">
            <div class="card-body bg-dark text-warning">
                <h3 class="card-title"> {{ item.title || item.name}}</h3>
                <div class="">
                    <p class="card-text mb-1"><b>Titolo Originale:</b> {{ item.original_title || item.original_name }}</p>
                    <p class="card-text mb-1"><b>Lingua:</b> {{ item.original_language }} <lang-flag :iso="`${item.original_language}`" /> </p>
                    <p class="card-text mb-1"><b>Voto:</b> {{ `${Math.floor(generateVote)}/5` }}</p>
                    <p class="card-text mb-1"><span v-for="i in store.stars">
                            <i :class="[(i <= generateVote) ? 'fa-solid fa-star' : 'fa-regular fa-star']"></i>
                        </span> </p>
                    <p class="card-text mb-1"><b>Plot:</b> {{ item.overview }}</p>
                </div>
            </div>
        </div>

    </div>
</template>
  

<style scoped lang="scss">
@use "../style/general.scss";
@use "../style/partials/variables" as *;

.card {
    margin: 20px 0;
    border-radius: 4px;
    height: 500px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.84);

    .card-body {
        padding: 20px 10px;
        overflow: auto;
    }
}

.side-a {
    display: inline-block;
    position: relative;
    z-index: 1;
    transition: opacity 0.5s ease-in-out;
}

.side-b {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;

    .card-body {
        height: 100%;
    }
}

.card:hover .side-a {
    opacity: 0;
}

.card:hover .side-b {
    display: inline-block;
    opacity: 1;
}

</style>
