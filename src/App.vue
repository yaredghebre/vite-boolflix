<script>
import axios from "axios";
import { store } from "./store";
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";


export default {
  components: {
    AppHeader,
    AppMain,
    AppFooter,
},
  data() {
    return {
      store
    }
  },
  methods: {
    searchMovie() {
      axios.get(this.store.devKey, {
        params: {
          api_key: this.store.devKey,
          query: this.store.searchText
        }
      }).then(resp => {
        this.store.apiMoviesURL = resp.data.results;
      })
    },
    searchSeries() {
      axios.get(this.store.devKey, {
        params: {
          api_key: this.store.devKey,
          query: this.store.searchText
        }
      }).then(resp => {
        this.store.apiSeriesURL = resp.data.results;
      })
    },
    handleSearch() {
      console.log("search");
      if(this.store.searchText === "") {
      } else {
        this.searchMovie();
        this.searchSeries();
        this.store.searchText = "";
      }
    }
  }

}
</script>

<template>
  <AppHeader title="BoolFlix" @search="handleSearch"/>
  <AppMain />
  <AppFooter />
</template>

<style lang="scss">
@use "./style/general.scss";


</style>