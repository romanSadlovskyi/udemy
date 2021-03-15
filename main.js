let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Скільки фільмів ви вже переглянули?');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Скільки фільмів ви вже переглянули?');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
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
}

rememberMyFilms();



function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Переглянуто дуже мало фільмів');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <=30) {
        console.log('Ви стандартний глядач');
    } else if (personalMovieDB.count > 30) {
        console.log('Ви кіноман');
    } else {
        console.log('Сталась помилка');
    }
}

detectPersonalLevel();

function showMyDB() {
    if(personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}

showMyDB();

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        let genr = prompt(`Ваш любимий жанр під номером ${i}`);
        personalMovieDB.genres.push(genr);
    }
}

writeYourGenres();

console.log(personalMovieDB);