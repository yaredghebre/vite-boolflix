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
            showDetails: false
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
    <div class="card" @mouseover="showDetails = true" @mouseleave="showDetails = false">
      <img class="card-img-top" :src="`${store.imgPath}${item.poster_path}`" alt="Card image cap">
      <div class="card-body" v-if="!showDetails">
      </div>
      <div class="card-body" v-if="showDetails">
        <h3 class="card-title"> {{ item.title }}</h3>
        <ul class="list-unstyled">
          <li class="card-text"><b>Titolo Originale:</b> {{ item.original_title }}</li>
          <li class="card-text"><b>Lingua:</b>  {{ item.original_language }}</li>
          <li class="card-text"><b>Voto:</b>  {{ item.vote_average }}</li>
          <li><span class="fi fi-gr"></span></li>
        </ul>
      </div>
    </div>
  </template>
  

<style scoped lang="scss">
@use "../style/general.scss";
@use "../style/partials/variables" as *;

.card {
    margin-bottom: 20px;
    border: 1px solid black;
    border-radius: 4px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);

    .card-img-top {
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
    }

    .card-body {
        padding: 15px;

        .card-text {
            margin-bottom: 0.5rem;
        }
    }
}

</style>
