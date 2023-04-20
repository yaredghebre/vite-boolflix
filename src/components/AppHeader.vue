<script>
import SearchEngine from "./SearchEngine.vue";
import { store } from "../store";

export default {
    name: "AppHeader",
    props: {
        title: String,
    },
    emits: ["search"],
    components: { SearchEngine },
    data() {
        return {
            store
        }
    }
    
}
</script>

<template>
    <header class="d-flex align-items-center justify-content-between px-3 gap-4">
        <h1>{{ title }}</h1>
        <div class="input-group mb-3 d-flex justify-content-end gap-2">
            <SearchEngine @search="$emit('search')" />
        </div>
    </header>

</template>

<style scoped lang="scss">
@use "../style/general.scss";
@use "../style/partials/variables" as *;

header {
    height: 100px;
    width: 100%;
    background-color: $primary_color;
    color: $secondary_color;
    z-index: 100;
    position: fixed;
}
</style>