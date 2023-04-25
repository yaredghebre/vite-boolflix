<script>
import SearchEngine from "./SearchEngine.vue";
import SelectGenre from "./SelectGenre.vue";
import { store } from "../store";

export default {
    name: "AppHeader",
    props: {
        title: String,
    },
    emits: ["search"],
    components: { 
        SearchEngine, 
        SelectGenre
    },
    data() {
        return {
            store
        }
    }

}
</script>

<template>
    <header class="d-flex align-items-center justify-content-between px-5 gap-4">
        <h1><a href="">{{ title }}</a> </h1>
        <div class="input-group mb-3 d-flex justify-content-end gap-2">
            <SelectGenre @select="$emit('select')"/>
            <SearchEngine @search="$emit('search')" @keyup.enter="$emit('search')"/>
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

    h1 {
        text-shadow: 7px 7px 7px rgba(255, 255, 255, 0.377);
        transition: 0.3s ease-out;
    }

    h1:hover {
        scale: 1.2;

        a:hover {
            color: red;
        }
    }
}
</style>