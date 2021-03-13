const numberOfFilms = +prompt('Скільки фільмів ви вже переглянули?');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const lastFilm = prompt('Який був ваш один з останніх переглянутих фільмів?');
const markOfFilm = prompt('Яка ваша оцінка?');

personalMovieDB.movies[lastFilm] = markOfFilm;

