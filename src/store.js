import { reactive } from "vue";

export const store = reactive({
    devKey: "dc201399eabcfc36cf330a55f352c30b",
    apiMoviesURL:"https://api.themoviedb.org/3/search/movie",
    apiSeriesURL:"https://api.themoviedb.org/3/search/tv",
    movies: [],
    series: [],
    genres: [],
    imgPath: "https://image.tmdb.org/t/p/w342",
    searchText: "",
    stars: 5
});