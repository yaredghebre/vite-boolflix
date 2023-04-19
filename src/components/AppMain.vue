<script>
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
    }
}
</script>

<template>
    <main>
        <div class="container">
            <h2>Movies</h2>
            <div class="row row-cols-5 justify-content-between">
                <div class="col" v-for="movie in store.movies" :key="movie.id">
                    <AppCard :item="movie" />
                </div>
            </div>

            <h2>Series</h2>
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
    padding: 20px 0;
    background-color: lightcoral;

    .container {
        border: 1px solid black;

        .col {
            background-color: lightblue;
        }
    }
}

</style>