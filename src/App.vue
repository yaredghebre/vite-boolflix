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
      axios.get(this.store.apiMoviesURL, {
        params: {
          api_key: this.store.devKey,
          query: this.store.searchText
        }
      }).then(resp => {
        this.store.movies = resp.data.results;
      }).catch(error => {
        console.log(error);
      }).finally(() => {
        console.log("Ricerca dei Film completata");
      });
    },
    searchSeries() {
      axios.get(this.store.apiSeriesURL, {
        params: {
          api_key: this.store.devKey,
          query: this.store.searchText
        }
      }).then(resp => {
        this.store.series = resp.data.results;
      }).catch(error => {
        console.log(error);
      }).finally(() => {
        console.log("Ricerca delle Serie completata");
      });
    },
    handleSearch() {
      if(this.store.searchText === "") {
        
      } else {
        this.searchMovie();
        this.searchSeries();
        this.store.searchText = "";
      }
    },

  }

}
</script>

<template>
  <div class="app-wrapper">
    <AppHeader title="BoolFlix" @search="handleSearch" @keyup.enter="handleSearch" /> 
    <AppMain />
    <AppFooter />
  </div>
</template>

<style lang="scss">
@use "./style/general.scss";
.app-wrapper {
  // height: 100vh;
  background-color: rgba(0, 0, 0, 0.714);
}

</style>