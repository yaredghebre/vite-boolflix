<script>
import axios from "axios";
import { store } from "../store";
import AppCard from "./AppCard.vue";
export default {
    name: "AppMain",
    components: {
        AppCard,
    },
    data() {
        return {
            store
        }
    },
    mounted() {
        axios.get(this.store.apiMoviesURL, {
            params: {
                api_key: this.store.devKey,
                query: 'w'
            }
        }).then(resp => {
            this.store.movies = resp.data.results;
        });
        
        axios.get(this.store.apiSeriesURL, {
            params: {
                api_key: this.store.devKey,
                query: 'w'
            }
        }).then(resp => {
            this.store.series = resp.data.results;
        });
    }
}
</script>

<template>
    <main>
        <div class="ms_container">
            
            <h2 class="my-3 text-white">Movies:</h2>
            <div class="row row-cols-5">
                <div class="col" v-for="movie in store.movies" :key="movie.id">
                    <AppCard :item="movie" />
                </div>
            </div>

            <h2 class="my-3 text-white">Series:</h2>
            <div class="row row-cols-5">
                <div class="col" v-for="serie in store.series" :key="serie.id">
                    <AppCard :item="serie"/>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped lang="scss">
@use "../style/general.scss";
@use "../style/partials/variables" as *;

main {
    padding: 100px 0;
    height: 100%;

    h2 {
        font-size: 2rem;
        text-shadow: 5px 5px 5px rgba(255, 255, 255, 0.377);
        
    }

    .ms_container {
        margin: 50px auto;
        width: 80%;

        .row {
            flex-wrap: nowrap;
            overflow-y: auto;

        }
        
    }
}

</style>


