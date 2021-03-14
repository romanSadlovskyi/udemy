const numberOfFilms = +prompt('Скільки фільмів ви вже переглянули?');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    let lastFilm = prompt('Який був ваш один з останніх переглянутих фільмів?');
    let markOfFilm = prompt('Яка ваша оцінка?');
    if( lastFilm == '' || lastFilm == null || lastFilm.length > 50 || 
    markOfFilm == '' || markOfFilm == null || markOfFilm.length > 50) {
        lastFilm = prompt('Який був ваш один з останніх переглянутих фільмів?');
        markOfFilm = prompt('Яка ваша оцінка?');
    } 
    personalMovieDB.movies[lastFilm] = markOfFilm;
}

if (personalMovieDB.count < 10) {
    console.log('Переглянуто дуже мало фільмів');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <=30) {
    console.log('Ви стандартний глядач');
} else if (personalMovieDB.count > 30) {
    console.log('Ви кіноман');
} else {
    console.log('Сталась помилка');
}



// let i = 0;
// while (i < 2) {
//     let lastFilm = prompt('Який був ваш один з останніх переглянутих фільмів?');
//     let markOfFilm = prompt('Яка ваша оцінка?');
//     if( lastFilm == '' || lastFilm == null || lastFilm.length > 50 || 
//     markOfFilm == '' || markOfFilm == null || markOfFilm.length > 50) {
//         lastFilm = prompt('Який був ваш один з останніх переглянутих фільмів?');
//         markOfFilm = prompt('Яка ваша оцінка?');
//     } 
//     personalMovieDB.movies[lastFilm] = markOfFilm;
//     i++;
// }

// let i = 0;
// do {
//     let lastFilm = prompt('Який був ваш один з останніх переглянутих фільмів?');
//     let markOfFilm = prompt('Яка ваша оцінка?');
//     if( lastFilm == '' || lastFilm == null || lastFilm.length > 50 || 
//     markOfFilm == '' || markOfFilm == null || markOfFilm.length > 50) {
//         lastFilm = prompt('Який був ваш один з останніх переглянутих фільмів?');
//         markOfFilm = prompt('Яка ваша оцінка?');
//     } 
//     personalMovieDB.movies[lastFilm] = markOfFilm;
//     i++;
// } while (i < 2);

console.log(personalMovieDB);