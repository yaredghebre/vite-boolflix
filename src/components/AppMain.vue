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
            <div class="row row-cols-12">
                <div class="col" v-for="card in store.movies" :key="card.id">
                    <AppCardVue :card="card"/>
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