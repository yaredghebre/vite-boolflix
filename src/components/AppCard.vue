<script>
import axios from "axios";
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
            cast: [],
            showCast: false
        }
    },
    computed: {
        generateVote() {
            return Math.ceil(this.item.vote_average / 2)
        }
    },
    methods: {
        getImgPath(name) {
            return new URL(`../assets/img/${name}.png`, import.meta.url).href
        },

        searchActors(id) {
            // console.log("getCast");
            axios.get(`https://api.themoviedb.org/3/movie/${id}/credits`, {
                params: {
                    api_key: this.store.devKey,
                }
            }).then(resp => {
                console.log(resp);
                this.cast = resp.data.cast.slice(0, 5);
                this.showCast = true;
            });

            axios.get(`https://api.themoviedb.org/3/tv/${id}/credits`, {
                params: {
                    api_key: this.store.devKey,
                }
            }).then(resp => {
                console.log(resp);
                this.cast = resp.data.cast.slice(0, 5);
                this.showCast = true;
            })
        },
        
        hideCast() {
            this.showCast = !this.showCast
        }

    }
}
</script>

<template>
    <div class="card">

        <div class="side-a">
            <img v-if="item.poster_path" class="card-img-top" :src="`${store.imgPath}${item.poster_path}`"
                alt="Card image cap">
            <div v-else class="card-img-top error-msg">
                <p class="text-center">Spiacente, immagine non disponibile <br> :&#40;</p>
            </div>
        </div>

        <div class="side-b">
            <div class="card-body bg-dark text-warning">
                <h3 class="card-title"> {{ item.title || item.name }}</h3>
                <div class="">
                    <p class="card-text mb-1"><b>Titolo Originale:</b> {{ item.original_title || item.original_name }}</p>
                    <p class="card-text mb-1"><b>Lingua:</b> {{ item.original_language }} 
                        <lang-flag :iso="`${item.original_language}`" /> </p>
                    <p class="card-text mb-1"><b>Voto:</b> {{ `${Math.floor(generateVote)}/5` }}</p>
                    <p class="card-text mb-1">
                        <span v-for="i in store.stars">
                            <i :class="[(i <= generateVote) ? 'fa-solid fa-star' : 'fa-regular fa-star']"></i>
                        </span>
                    </p>
                    <p class="card-text mb-1"><b>Plot:</b> {{ item.overview }}</p>
                </div>

                <button @click="searchActors(item.id)" v-if="!showCast" type="button" class="btn btn-success my-3">Mostra Cast</button>
                <button @click="hideCast" v-if="showCast" type="button" class="btn btn-danger my-3">Nascondi Cast</button>

                <ul v-if="showCast" class="ms_list-style">
                    <li v-for="actor in cast" :key="actor.id"> {{ actor.name }}</li>
                </ul>
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
    height: 100%;
    box-shadow: 7px 7px 7px 0 rgba(0, 0, 0, 0.84);

    .card-body {
        padding: 20px;
        height: 100%;
        font-size: 1.1rem;
        overflow: auto;
    }
}

.side-a {
    display: inline-block;
    position: relative;
    height: 100%;
    z-index: 1;
    transition: opacity 0.5s ease-in-out;

    .error-msg {
        height: 100%;
        font-size: 2.5rem;
        padding: 20px;

    }
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

}

.card:hover .side-a {
    opacity: 0;
}

.card:hover .side-b {
    display: inline-block;
    opacity: 1;
}

.ms_list-style {
    list-style-type: circle;

    li {
        position: relative;
        top: 0;
        left: -15px;
    }
}
</style>
