<script>
import { store } from "../store";

export default {
    name: "AppHeader",
    emits: ["search"],
    data() {
        return {
            store
        }
    },
}
</script>

<template>
    <div>
        <input v-model.trim="store.searchText" type="text" class="" placeholder="Cerca Titolo..." aria-label="Cerca Titolo..." aria-describedby="basic-addon2" id="title-search">
        <button @click="$emit('search')" class="btn btn-outline-secondary" type="button" for="title-search">Cerca</button>
    </div>
</template>

<style scoped lang="scss">
@use "../style/general.scss";
@use "../style/partials/variables" as *;

</style>