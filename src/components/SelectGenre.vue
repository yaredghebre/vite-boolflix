<script>
import { store } from "../store";
import axios from "axios";

export default {
    name: "SelectGenre",
    emits: ["select"],
    data() {
        return {
            store,
            selectedGenre: null
        }
    },
    methods: {
        fetchGenres() {
            axios.get(`https://api.themoviedb.org/3/genre/movie/list`, {
                params: {
                    api_key: this.store.devKey,
                }
            }).then(resp => {
                this.store.genres = resp.data.genres;
            });

        }
    }
}
</script>

<template>
    <div>
        <select class="form-select" @click="fetchGenres" @v-model="selectedGenre" aria-label="Default select example">
            <option selected>Scegli il genere</option>
            <option v-for="genre in store.genres" :key="genre.id">{{ genre.name }}</option>
        </select>

    </div>
</template>

<style scoped lang="scss">
@use "../style/general.scss";
@use "../style/partials/variables" as *;
</style>