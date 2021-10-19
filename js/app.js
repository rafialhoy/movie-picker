import { movies } from './movies.js';

console.log(movies);

// Bloques de Contenido
const main = document.getElementById("contenido");

const occasion = document.getElementById("occasionContent");
occasion.style.display = "none";

const genre = document.getElementById("genreContent");
genre.style.display = "none";

const release = document.getElementById("releaseContent");
release.style.display = "none";

const result = document.getElementById("resultContent");
result.style.display = "none";
// Botones
const btnOccasion = document.getElementById("btn_occasion");
btnOccasion.addEventListener("click", () => {
  if (main.style.display === "none") {
    main.style.display = "block";
  } else {
    main.style.display = "none";
    occasion.style.display = "block";
  }
});

const btnGenre = document.getElementById("btn_genre");
btnGenre.addEventListener("click", () => {
  if (main.style.display === "none") {
    main.style.display = "block";
  } else {
    main.style.display = "none";
    genre.style.display = "block";
  }
});

const btnRelease = document.getElementById("btn_date");
btnRelease.addEventListener("click", () => {
  if (main.style.display === "none") {
    main.style.display = "block";
  } else {
    main.style.display = "none";
    release.style.display = "block";
  }
});

// MISC
const movieCounter = document.getElementById("movieCounter");
movieCounter.innerHTML = movies.length;

// Funciones de filtrado
const filtrosMovies = {
  // FILTRA POR RELEASE DATE
  filtrarFecha: function (array, fechaMin, fechaMax) {
    const selected = [];
    for (let i = 0; i < array.length; i++) {
      const filtro = array[i];
      if (array[i].releaseDate < fechaMax && array[i].releaseDate > fechaMin) {
        selected.push(filtro);
        const random = selected[Math.floor(Math.random() * selected.length)];
        document.getElementById("displayTitle").innerHTML = random.title;
        document.getElementById("displayDirector").innerHTML =
          "Director: " + random.director;
        document.getElementById("displayGenre").innerHTML =
          "Genre: " + random.genre;
        document.getElementById("displayDuration").innerHTML =
          "Duration: " + random.duration;
        document.getElementById("displayImage").src = random.image;
        document.getElementById("displayRating").innerHTML =
          "Rating: " + random.rating;
        document.getElementById("displayDate").innerHTML =
          "Released: " + random.releaseDate;
        document.getElementById("displayLink").href = random.link;
        document.getElementById("displayLink").innerHTML = "Where To Watch";
        document.getElementById("displayTrailer").href = random.trailer;
        document.getElementById("displayTrailer").innerHTML = "Trailer";
      }
    }
  },
  // FILTRAR POR GENRE
  filtrarGenre: function (array, category) {
    const selected = [];
    for (let i = 0; i < array.length; i++) {
      const filtro = array[i];
      if (array[i].genre === category) {
        selected.push(filtro);
        const random = selected[Math.floor(Math.random() * selected.length)];
        document.getElementById("displayTitle").innerHTML = random.title;
        document.getElementById("displayDirector").innerHTML =
          "Director: " + random.director;
        document.getElementById("displayGenre").innerHTML =
          "Genre: " + random.genre;
        document.getElementById("displayDuration").innerHTML =
          "Duration: " + random.duration;
        document.getElementById("displayImage").src = random.image;
        document.getElementById("displayRating").innerHTML =
          "Rating: " + random.rating;
        document.getElementById("displayDate").innerHTML =
          "Released: " + random.releaseDate;
        document.getElementById("displayLink").href = random.link;
        document.getElementById("displayLink").innerHTML = "Where To Watch";
        document.getElementById("displayTrailer").href = random.trailer;
        document.getElementById("displayTrailer").innerHTML = "Trailer";
      }
    }
  },
  // FILTRAR POR OCCASION
  filtrarOcc: function (array, occasion) {
    const selected = [];
    for (let i = 0; i < array.length; i++) {
      const filtro = array[i];
      if (array[i].occasion === occasion) {
        selected.push(filtro);
        const random = selected[Math.floor(Math.random() * selected.length)];
        document.getElementById("displayTitle").innerHTML = random.title;
        document.getElementById("displayDirector").innerHTML =
          "Director: " + random.director;
        document.getElementById("displayGenre").innerHTML =
          "Genre: " + random.genre;
        document.getElementById("displayDuration").innerHTML =
          "Duration: " + random.duration;
        document.getElementById("displayImage").src = random.image;
        document.getElementById("displayRating").innerHTML =
          "Rating: " + random.rating;
        document.getElementById("displayDate").innerHTML =
          "Released: " + random.releaseDate;
        document.getElementById("displayLink").href = random.link;
        document.getElementById("displayLink").innerHTML = "Where To Watch";
        document.getElementById("displayTrailer").href = random.trailer;
        document.getElementById("displayTrailer").innerHTML = "Trailer";
      }
    }
  },
};

// RETORNA UNA PELICULA ALEATORIA
const repetir = document.getElementById("repeat");
repetir.addEventListener("click", () => {
  if (result.style.display === "block") {
    const random = movies[Math.floor(Math.random() * movies.length)];
    document.getElementById("displayTitle").innerHTML = random.title;
    document.getElementById("displayDirector").innerHTML =
      "Director: " + random.director;
    document.getElementById("displayGenre").innerHTML =
      "Genre: " + random.genre;
    document.getElementById("displayDuration").innerHTML =
      "Duration: " + random.duration;
    document.getElementById("displayImage").src = random.image;
    document.getElementById("displayRating").innerHTML =
      "Rating: " + random.rating;
    document.getElementById("displayDate").innerHTML =
      "Released: " + random.releaseDate;
    document.getElementById("displayLink").href = random.link;
    document.getElementById("displayLink").innerHTML = "Where To Watch";
    document.getElementById("displayTrailer").href = random.trailer;
    document.getElementById("displayTrailer").innerHTML = "Trailer";
  }});

// EVENTOS DE BOTONES OCCASION 
const btn_occ_alone = document.getElementById("occasion_alone"); // OCCASION = ALONE
btn_occ_alone.addEventListener("click", () => {
  if (occasion.style.display === "block") {
    occasion.style.display = "none";
    result.style.display = "block";
    filtrosMovies.filtrarOcc(movies, "Alone");
  }
});

const btn_occ_date = document.getElementById("occasion_date"); // OCCASION = DATE
btn_occ_date.addEventListener("click", () => {
  if (occasion.style.display === "block") {
    occasion.style.display = "none";
    result.style.display = "block";
    filtrosMovies.filtrarOcc(movies, "Date");
  }
});

const btn_occ_friends = document.getElementById("occasion_friends"); // OCCASION = FRIENDS
btn_occ_friends.addEventListener("click", () => {
  if (occasion.style.display === "block") {
    occasion.style.display = "none";
    result.style.display = "block";
    filtrosMovies.filtrarOcc(movies, "Friends");
  }
});


const btn_occ_family = document.getElementById("occasion_family"); // OCCASION = FAMILY
btn_occ_family.addEventListener("click", () => {
  if (occasion.style.display === "block") {
    occasion.style.display = "none";
    result.style.display = "block";
    filtrosMovies.filtrarOcc(movies, "Family");
  }
});



// EVENTOS DE BOTONES GENRE 
const btn_genre_action = document.getElementById('genre_action'); // GENRE = ACTION
btn_genre_action.addEventListener("click", () => {
  if (genre.style.display === "block") {
    genre.style.display = "none";
    result.style.display = "block";
    filtrosMovies.filtrarGenre(movies, "Action");
  }
});

const btn_genre_comedy = document.getElementById('genre_comedy'); // GENRE = COMEDY
btn_genre_comedy.addEventListener("click", () => {
  if (genre.style.display === "block") {
    genre.style.display = "none";
    result.style.display = "block";
    filtrosMovies.filtrarGenre(movies, "Comedy");
  }
});

const btn_genre_drama = document.getElementById('genre_drama'); // GENRE = DRAMA
btn_genre_drama.addEventListener("click", () => {
  if (genre.style.display === "block") {
    genre.style.display = "none";
    result.style.display = "block";
    filtrosMovies.filtrarGenre(movies, "Drama");
  }
});

const btn_genre_advent = document.getElementById('genre_adventure'); // GENRE = ADVENTURE
btn_genre_advent.addEventListener("click", () => {
  if (genre.style.display === "block") {
    genre.style.display = "none";
    result.style.display = "block";
    filtrosMovies.filtrarGenre(movies, "Adventure");
  }
});

const btn_genre_thriller = document.getElementById('genre_thriller'); // GENRE = THRILLER
btn_genre_thriller.addEventListener("click", () => {
  if (genre.style.display === "block") {
    genre.style.display = "none";
    result.style.display = "block";
    filtrosMovies.filtrarGenre(movies, "Thriller");
  }
});

const btn_genre_crime = document.getElementById('genre_crime'); // GENRE = CRIME
btn_genre_crime.addEventListener("click", () => {
  if (genre.style.display === "block") {
    genre.style.display = "none";
    result.style.display = "block";
    filtrosMovies.filtrarGenre(movies, "Crime");
  }
});

const btn_genre_romance = document.getElementById('genre_romance'); // GENRE = ROMANCE
btn_genre_romance.addEventListener("click", () => {
  if (genre.style.display === "block") {
    genre.style.display = "none";
    result.style.display = "block";
    filtrosMovies.filtrarGenre(movies, "Romance");
  }
});

const btn_genre_science = document.getElementById('genre_science'); // GENRE = SCIENCE
btn_genre_science.addEventListener("click", () => {
  if (genre.style.display === "block") {
    genre.style.display = "none";
    result.style.display = "block";
    filtrosMovies.filtrarGenre(movies, "Science Ficton");
  }
});

const btn_genre_fanta = document.getElementById('genre_fantasy'); // GENRE = FANTASY
btn_genre_fanta.addEventListener("click", () => {
  if (genre.style.display === "block") {
    genre.style.display = "none";
    result.style.display = "block";
    filtrosMovies.filtrarGenre(movies, "Fantasy");
  }
});

const btn_genre_fam = document.getElementById('genre_family'); // GENRE = FAMILY
btn_genre_fam.addEventListener("click", () => {
  if (genre.style.display === "block") {
    genre.style.display = "none";
    result.style.display = "block";
    filtrosMovies.filtrarGenre(movies, "Family");
  }
});

const btn_genre_mystery = document.getElementById('genre_mystery'); // GENRE = MYSTERY
btn_genre_mystery.addEventListener("click", () => {
  if (genre.style.display === "block") {
    genre.style.display = "none";
    result.style.display = "block";
    filtrosMovies.filtrarGenre(movies, "Mystery");
  }
});

const btn_genre_bio = document.getElementById('genre_bio'); // GENRE = BIO
btn_genre_bio.addEventListener("click", () => {
  if (genre.style.display === "block") {
    genre.style.display = "none";
    result.style.display = "block";
    filtrosMovies.filtrarGenre(movies, "Biography");
  }
});

const btn_genre_history = document.getElementById('genre_history'); // GENRE = HISTORY
btn_genre_history.addEventListener("click", () => {
  if (genre.style.display === "block") {
    genre.style.display = "none";
    result.style.display = "block";
    filtrosMovies.filtrarGenre(movies, "History");
  }
});

const btn_genre_ani = document.getElementById('genre_ani'); // GENRE = Animation
btn_genre_ani.addEventListener("click", () => {
  if (genre.style.display === "block") {
    genre.style.display = "none";
    result.style.display = "block";
    filtrosMovies.filtrarGenre(movies, "Animation");
  }
});

const btn_genre_slasher = document.getElementById('genre_slasher'); // GENRE = SLASHER
btn_genre_slasher.addEventListener("click", () => {
  if (genre.style.display === "block") {
    genre.style.display = "none";
    result.style.display = "block";
    filtrosMovies.filtrarGenre(movies, "Slasher");
  }
});

const btn_genre_sport = document.getElementById('genre_sport'); // GENRE = SPORT
btn_genre_sport.addEventListener("click", () => {
  if (genre.style.display === "block") {
    genre.style.display = "none";
    result.style.display = "block";
    filtrosMovies.filtrarGenre(movies, "Sport");
  }
});

const btn_genre_disaster = document.getElementById('genre_disaster'); // GENRE = DISASTER
btn_genre_disaster.addEventListener("click", () => {
  if (genre.style.display === "block") {
    genre.style.display = "none";
    result.style.display = "block";
    filtrosMovies.filtrarGenre(movies, "Disaster");
  }
});

const btn_genre_western = document.getElementById('genre_western'); // GENRE = WESTERN
btn_genre_western.addEventListener("click", () => {
  if (genre.style.display === "block") {
    genre.style.display = "none";
    result.style.display = "block";
    filtrosMovies.filtrarGenre(movies, "Western");
  }
});

const btn_genre_war = document.getElementById('genre_war'); // GENRE = WAR
btn_genre_war.addEventListener("click", () => {
  if (genre.style.display === "block") {
    genre.style.display = "none";
    result.style.display = "block";
    filtrosMovies.filtrarGenre(movies, "War");
  }
});

const btn_genre_horror = document.getElementById('genre_horror'); // GENRE = HORROR
btn_genre_horror.addEventListener("click", () => {
  if (genre.style.display === "block") {
    genre.style.display = "none";
    result.style.display = "block";
    filtrosMovies.filtrarGenre(movies, "Horror");
  }
});

// EVENTOS DE BOTONES RELEASE DATE 
const btn_date_1950 = document.getElementById('date_1950'); // RELEASE DATE = 1950-60
btn_date_1950.addEventListener("click", () => {
  if (release.style.display === "block") {
    release.style.display = "none";
    result.style.display = "block";
    filtrosMovies.filtrarFecha(movies, 1950, 1960);
  }
});

const btn_date_1960 = document.getElementById('date_1960'); // RELEASE DATE = 1960-70
btn_date_1960.addEventListener("click", () => {
  if (release.style.display === "block") {
    release.style.display = "none";
    result.style.display = "block";
    filtrosMovies.filtrarFecha(movies, 1960, 1970);
  }
});

const btn_date_1970 = document.getElementById('date_1970'); // RELEASE DATE = 1970-80
btn_date_1970.addEventListener("click", () => {
  if (release.style.display === "block") {
    release.style.display = "none";
    result.style.display = "block";
    filtrosMovies.filtrarFecha(movies, 1970, 1980);
  }
});

const btn_date_1980 = document.getElementById('date_1980'); // RELEASE DATE = 1980-90
btn_date_1980.addEventListener("click", () => {
  if (release.style.display === "block") {
    release.style.display = "none";
    result.style.display = "block";
    filtrosMovies.filtrarFecha(movies, 1980, 1990);
  }
});

const btn_date_1990 = document.getElementById('date_1990'); // RELEASE DATE = 1990-20
btn_date_1990.addEventListener("click", () => {
  if (release.style.display === "block") {
    release.style.display = "none";
    result.style.display = "block";
    filtrosMovies.filtrarFecha(movies, 1990, 2000);
  }
});

const btn_date_2000 = document.getElementById('date_2000'); // RELEASE DATE = 2000-10
btn_date_2000.addEventListener("click", () => {
  if (release.style.display === "block") {
    release.style.display = "none";
    result.style.display = "block";
    filtrosMovies.filtrarFecha(movies, 2000, 2010);
  }
});

const btn_date_2010 = document.getElementById('date_2010'); // RELEASE DATE = 2010-20
btn_date_2010.addEventListener("click", () => {
  if (release.style.display === "block") {
    release.style.display = "none";
    result.style.display = "block";
    filtrosMovies.filtrarFecha(movies, 2010, 2020);
  }
});

const btn_date_2020 = document.getElementById('date_2020'); // RELEASE DATE = 2020-30
btn_date_2020.addEventListener("click", () => {
  if (release.style.display === "block") {
    release.style.display = "none";
    result.style.display = "block";
    filtrosMovies.filtrarFecha(movies, 2020, 2030);
  }
});

