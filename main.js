'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Скільки фільмів ви вже переглянули?');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Скільки фільмів ви вже переглянули?');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 3; i++) {
            let lastFilm = prompt('Який був ваш один з останніх переглянутих фільмів?');
            let markOfFilm = prompt('Яка ваша оцінка?');
            if( lastFilm == '' || lastFilm == null || lastFilm.length > 50 || 
            markOfFilm == '' || markOfFilm == null || markOfFilm.length > 50) {
                i--;
            } else {
                personalMovieDB.movies[lastFilm] = markOfFilm;
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('Переглянуто дуже мало фільмів');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <=30) {
            console.log('Ви стандартний глядач');
        } else if (personalMovieDB.count > 30) {
            console.log('Ви кіноман');
        } else {
            console.log('Сталась помилка');
        }
    },
    showMyDB: function() {
        if(personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
                let genr = prompt(`Ваш любимий жанр під номером ${i}`);
            if(genr != "" && genr != null) {
                personalMovieDB.genres.push(genr);
            } else {
                i--;
            }   
        }
        personalMovieDB.genres.forEach(function(elem, index) {
            console.log(`Улюбдений жанр номер ${index + 1} - це ${elem}`);
        });

    },
    toggleVisibleMyDB: function() {
        if(personalMovieDB.privat) {
            personalMovieDB.privat = false; 
        } else {
            personalMovieDB.privat = true;
        }
    }

};

personalMovieDB.writeYourGenres();
personalMovieDB.showMyDB();