import { movies } from "./movies.js";
import { filtrosMovies } from "./filtros.js";

console.log(movies);
console.log(filtrosMovies);

// Main content blocks

const genreHeader = document.getElementById("genreHeader__title");

const genreMain = document.getElementById("genreMain");

// hidden content blocks
const genreResult = document.getElementById("genreResult"); // ACTION GENRE CONTENT BLOCK
genreResult.style.display = 'none';



// EVENTOS DEL DOM PARA RESULTADOS DE GENEROS
// ACTION
const genreBtn_action = document.getElementById("genreMain_action"); // SHOW CONTENT
genreBtn_action.addEventListener("click", () => {
  if ((genreMain.style.display = "block")) {
    genreMain.style.display = "none";
    genreResult.style.display = "grid";
    anotherGenreAction.style.display = 'block';
    filtrosMovies.filtrarGenre(movies, "Action");
    genreHeader.innerHTML = "Action";
  }
});

const anotherGenreAction = document.getElementById("genreAction__another"); // ANOTHER RECOM BTN
anotherGenreAction.style.display = "none";
anotherGenreAction.addEventListener("click", () => {
  if ((genreResult.style.display = "grid")) {
    const selected = [];
    for (let i = 0; i < movies.length; i++) {
      const filtro = movies[i];
      if (movies[i].genre === "Action") {
        selected.push(filtro);
        const random = selected[Math.floor(Math.random() * selected.length)];
        document.getElementById("genreResult__title").innerHTML = random.title;
        document.getElementById("genreResult__director").innerHTML =
          "Director: " + random.director;
        document.getElementById("genreResult__genre").innerHTML =
          "Genre: " + random.genre;
        document.getElementById("genreResult__duration").innerHTML =
          "Duration: " + random.duration;
        document.getElementById("genreResult__img").src = random.image;
        document.getElementById("genreResult__rating").innerHTML =
          "Rating: " + random.rating;
        document.getElementById("genreResult__release").innerHTML =
          "Released: " + random.releaseDate;
        document.getElementById("genreResult__link--watch").href = random.link;
        document.getElementById("genreResult__link--trailer").href = random.trailer;
      }
    }
  }
});




//DRAMA
const genreBtn_drama = document.getElementById("genreMain_drama"); // SHOW CONTENT
genreBtn_drama.addEventListener("click", () => {
  if ((genreMain.style.display = "block")) {
    genreMain.style.display = "none";
    genreResult.style.display = "grid";
    anotherGenreDrama.style.display = "block";
    filtrosMovies.filtrarGenre(movies, "Drama");
    genreHeader.innerHTML = "Drama";
  }
});

const anotherGenreDrama = document.getElementById("genreDrama__another"); // ANOTHER RECOM BTN
anotherGenreDrama.style.display = "none";
anotherGenreDrama.addEventListener("click", () => {
  if (genreResult.style.display == "grid") {
    const selected = [];
    for (let i = 0; i < movies.length; i++) {
      const filtro = movies[i];
      if (movies[i].genre === "Drama") {
        selected.push(filtro);
        const random = selected[Math.floor(Math.random() * selected.length)];
        document.getElementById("genreResult__title").innerHTML = random.title;
        document.getElementById("genreResult__director").innerHTML =
          "Director: " + random.director;
        document.getElementById("genreResult__genre").innerHTML =
          "Genre: " + random.genre;
        document.getElementById("genreResult__duration").innerHTML =
          "Duration: " + random.duration;
        document.getElementById("genreResult__img").src = random.image;
        document.getElementById("genreResult__rating").innerHTML =
          "Rating: " + random.rating;
        document.getElementById("genreResult__release").innerHTML =
          "Released: " + random.releaseDate;
        document.getElementById("genreResult__link--watch").href = random.link;
        document.getElementById("genreResult__link--trailer").href =
          random.trailer;
      }
    }
  }
});




// COMEDY
const genreBtn_comedy = document.getElementById("genreMain_comedy"); // SHOW CONTENT
genreBtn_comedy.addEventListener("click", () => {
  if ((genreMain.style.display = "block")) {
    genreMain.style.display = "none";
    genreResult.style.display = "grid";
    anotherGenreComedy.style.display = "block";
    filtrosMovies.filtrarGenre(movies, "Comedy");
    genreHeader.innerHTML = "Comedy";
  }
});

const anotherGenreComedy = document.getElementById("genreComedy__another"); // ANOTHER RECOM BTN
anotherGenreComedy.style.display = "none";
anotherGenreComedy.addEventListener("click", () => {
  if (genreResult.style.display == "grid") {
    const selected = [];
    for (let i = 0; i < movies.length; i++) {
      const filtro = movies[i];
      if (movies[i].genre === "Comedy") {
        selected.push(filtro);
        const random = selected[Math.floor(Math.random() * selected.length)];
        document.getElementById("genreResult__title").innerHTML = random.title;
        document.getElementById("genreResult__director").innerHTML =
          "Director: " + random.director;
        document.getElementById("genreResult__genre").innerHTML =
          "Genre: " + random.genre;
        document.getElementById("genreResult__duration").innerHTML =
          "Duration: " + random.duration;
        document.getElementById("genreResult__img").src = random.image;
        document.getElementById("genreResult__rating").innerHTML =
          "Rating: " + random.rating;
        document.getElementById("genreResult__release").innerHTML =
          "Released: " + random.releaseDate;
        document.getElementById("genreResult__link--watch").href = random.link;
        document.getElementById("genreResult__link--trailer").href =
          random.trailer;
      }
    }
  }
});




//ADVENTURE
const genreBtn_adventure = document.getElementById("genreMain_adventure"); // SHOW CONTENT
genreBtn_adventure.addEventListener("click", () => {
  if ((genreMain.style.display = "block")) {
    genreMain.style.display = "none";
    genreResult.style.display = "grid";
    anotherGenreAdventure.style.display = "block";
    filtrosMovies.filtrarGenre(movies, "Adventure");
    genreHeader.innerHTML = "Adventure";
  }
});

const anotherGenreAdventure = document.getElementById("genreAdventure__another"); // ANOTHER RECOM BTN
anotherGenreAdventure.style.display = "none";
anotherGenreAdventure.addEventListener("click", () => {
  if (genreResult.style.display == "grid") {
    const selected = [];
    for (let i = 0; i < movies.length; i++) {
      const filtro = movies[i];
      if (movies[i].genre === "Adventure") {
        selected.push(filtro);
        const random = selected[Math.floor(Math.random() * selected.length)];
        document.getElementById("genreResult__title").innerHTML = random.title;
        document.getElementById("genreResult__director").innerHTML =
          "Director: " + random.director;
        document.getElementById("genreResult__genre").innerHTML =
          "Genre: " + random.genre;
        document.getElementById("genreResult__duration").innerHTML =
          "Duration: " + random.duration;
        document.getElementById("genreResult__img").src = random.image;
        document.getElementById("genreResult__rating").innerHTML =
          "Rating: " + random.rating;
        document.getElementById("genreResult__release").innerHTML =
          "Released: " + random.releaseDate;
        document.getElementById("genreResult__link--watch").href = random.link;
        document.getElementById("genreResult__link--trailer").href =
          random.trailer;
      }
    }
  }
});




//thriller
const genreBtn_thriller = document.getElementById("genreMain_thriller"); // SHOW CONTENT
genreBtn_thriller.addEventListener("click", () => {
  if ((genreMain.style.display = "block")) {
    genreMain.style.display = "none";
    genreResult.style.display = "grid";
    anotherGenreThriller.style.display = "block";
    filtrosMovies.filtrarGenre(movies, "Thriller");
    genreHeader.innerHTML = "Thriller";
  }
});

const anotherGenreThriller = document.getElementById("genreThriller__another"); // ANOTHER RECOM BTN
anotherGenreThriller.style.display = "none";
anotherGenreThriller.addEventListener("click", () => {
  if (genreResult.style.display == "grid") {
    const selected = [];
    for (let i = 0; i < movies.length; i++) {
      const filtro = movies[i];
      if (movies[i].genre === "Thriller") {
        selected.push(filtro);
        const random = selected[Math.floor(Math.random() * selected.length)];
        document.getElementById("genreResult__title").innerHTML = random.title;
        document.getElementById("genreResult__director").innerHTML =
          "Director: " + random.director;
        document.getElementById("genreResult__genre").innerHTML =
          "Genre: " + random.genre;
        document.getElementById("genreResult__duration").innerHTML =
          "Duration: " + random.duration;
        document.getElementById("genreResult__img").src = random.image;
        document.getElementById("genreResult__rating").innerHTML =
          "Rating: " + random.rating;
        document.getElementById("genreResult__release").innerHTML =
          "Released: " + random.releaseDate;
        document.getElementById("genreResult__link--watch").href = random.link;
        document.getElementById("genreResult__link--trailer").href =
          random.trailer;
      }
    }
  }
});




//crime
const genreBtn_crime = document.getElementById("genreMain_crime"); // SHOW CONTENT
genreBtn_crime.addEventListener("click", () => {
  if ((genreMain.style.display = "block")) {
    genreMain.style.display = "none";
    genreResult.style.display = "grid";
    anotherGenreCrime.style.display = "block";
    filtrosMovies.filtrarGenre(movies, "Crime");
    genreHeader.innerHTML = "Crime";
  }
});

const anotherGenreCrime = document.getElementById("genreCrime__another"); // ANOTHER RECOM BTN
anotherGenreCrime.style.display = "none";
anotherGenreCrime.addEventListener("click", () => {
  if (genreResult.style.display == "grid") {
    const selected = [];
    for (let i = 0; i < movies.length; i++) {
      const filtro = movies[i];
      if (movies[i].genre === "Crime") {
        selected.push(filtro);
        const random = selected[Math.floor(Math.random() * selected.length)];
        document.getElementById("genreResult__title").innerHTML = random.title;
        document.getElementById("genreResult__director").innerHTML =
          "Director: " + random.director;
        document.getElementById("genreResult__genre").innerHTML =
          "Genre: " + random.genre;
        document.getElementById("genreResult__duration").innerHTML =
          "Duration: " + random.duration;
        document.getElementById("genreResult__img").src = random.image;
        document.getElementById("genreResult__rating").innerHTML =
          "Rating: " + random.rating;
        document.getElementById("genreResult__release").innerHTML =
          "Released: " + random.releaseDate;
        document.getElementById("genreResult__link--watch").href = random.link;
        document.getElementById("genreResult__link--trailer").href =
          random.trailer;
      }
    }
  }
});




//romance
const genreBtn_romance = document.getElementById("genreMain_romance"); // SHOW CONTENT
genreBtn_romance.addEventListener("click", () => {
  if ((genreMain.style.display = "block")) {
    genreMain.style.display = "none";
    genreResult.style.display = "grid";
    anotherGenreRomance.style.display = "block";
    filtrosMovies.filtrarGenre(movies, "Romance");
    genreHeader.innerHTML = "Romance";
  }
});

const anotherGenreRomance = document.getElementById("genreRomance__another"); // ANOTHER RECOM BTN
anotherGenreRomance.style.display = "none";
anotherGenreRomance.addEventListener("click", () => {
  if (genreResult.style.display == "grid") {
    const selected = [];
    for (let i = 0; i < movies.length; i++) {
      const filtro = movies[i];
      if (movies[i].genre === "Romance") {
        selected.push(filtro);
        const random = selected[Math.floor(Math.random() * selected.length)];
        document.getElementById("genreResult__title").innerHTML = random.title;
        document.getElementById("genreResult__director").innerHTML =
          "Director: " + random.director;
        document.getElementById("genreResult__genre").innerHTML =
          "Genre: " + random.genre;
        document.getElementById("genreResult__duration").innerHTML =
          "Duration: " + random.duration;
        document.getElementById("genreResult__img").src = random.image;
        document.getElementById("genreResult__rating").innerHTML =
          "Rating: " + random.rating;
        document.getElementById("genreResult__release").innerHTML =
          "Released: " + random.releaseDate;
        document.getElementById("genreResult__link--watch").href = random.link;
        document.getElementById("genreResult__link--trailer").href =
          random.trailer;
      }
    }
  }
});




//sciFi
const genreBtn_sciFi = document.getElementById("genreMain_sciFi"); // SHOW CONTENT
genreBtn_sciFi.addEventListener("click", () => {
  if ((genreMain.style.display = "block")) {
    genreMain.style.display = "none";
    genreResult.style.display = "grid";
    anotherGenreSciFi.style.display = "block";
    filtrosMovies.filtrarGenre(movies, "Science Fiction");
    genreHeader.innerHTML = "SciFi";
  }
});

const anotherGenreSciFi = document.getElementById("genreSciFi__another"); // ANOTHER RECOM BTN
anotherGenreSciFi.style.display = "none";
anotherGenreSciFi.addEventListener("click", () => {
  if (genreResult.style.display == "grid") {
    const selected = [];
    for (let i = 0; i < movies.length; i++) {
      const filtro = movies[i];
      if (movies[i].genre === "Science Fiction") {
        selected.push(filtro);
        const random = selected[Math.floor(Math.random() * selected.length)];
        document.getElementById("genreResult__title").innerHTML = random.title;
        document.getElementById("genreResult__director").innerHTML =
          "Director: " + random.director;
        document.getElementById("genreResult__genre").innerHTML =
          "Genre: " + random.genre;
        document.getElementById("genreResult__duration").innerHTML =
          "Duration: " + random.duration;
        document.getElementById("genreResult__img").src = random.image;
        document.getElementById("genreResult__rating").innerHTML =
          "Rating: " + random.rating;
        document.getElementById("genreResult__release").innerHTML =
          "Released: " + random.releaseDate;
        document.getElementById("genreResult__link--watch").href = random.link;
        document.getElementById("genreResult__link--trailer").href =
          random.trailer;
      }
    }
  }
});




//fantasy
const genreBtn_fantasy = document.getElementById("genreMain_fantasy"); // SHOW CONTENT
genreBtn_fantasy.addEventListener("click", () => {
  if ((genreMain.style.display = "block")) {
    genreMain.style.display = "none";
    genreResult.style.display = "grid";
    anotherGenreFantasy.style.display = "block";
    filtrosMovies.filtrarGenre(movies, "Fantasy");
    genreHeader.innerHTML = "Fantasy";
  }
});

const anotherGenreFantasy = document.getElementById("genreFantasy__another"); // ANOTHER RECOM BTN
anotherGenreFantasy.style.display = "none";
anotherGenreFantasy.addEventListener("click", () => {
  if (genreResult.style.display == "grid") {
    const selected = [];
    for (let i = 0; i < movies.length; i++) {
      const filtro = movies[i];
      if (movies[i].genre === "Fantasy") {
        selected.push(filtro);
        const random = selected[Math.floor(Math.random() * selected.length)];
        document.getElementById("genreResult__title").innerHTML = random.title;
        document.getElementById("genreResult__director").innerHTML =
          "Director: " + random.director;
        document.getElementById("genreResult__genre").innerHTML =
          "Genre: " + random.genre;
        document.getElementById("genreResult__duration").innerHTML =
          "Duration: " + random.duration;
        document.getElementById("genreResult__img").src = random.image;
        document.getElementById("genreResult__rating").innerHTML =
          "Rating: " + random.rating;
        document.getElementById("genreResult__release").innerHTML =
          "Released: " + random.releaseDate;
        document.getElementById("genreResult__link--watch").href = random.link;
        document.getElementById("genreResult__link--trailer").href =
          random.trailer;
      }
    }
  }
});




//family
const genreBtn_family = document.getElementById("genreMain_family"); // SHOW CONTENT
genreBtn_family.addEventListener("click", () => {
  if ((genreMain.style.display = "block")) {
    genreMain.style.display = "none";
    genreResult.style.display = "grid";
    anotherGenreFamily.style.display = "block";
    filtrosMovies.filtrarGenre(movies, "Family");
    genreHeader.innerHTML = "Family";
  }
});

const anotherGenreFamily = document.getElementById("genreFamily__another"); // ANOTHER RECOM BTN
anotherGenreFamily.style.display = "none";
anotherGenreFamily.addEventListener("click", () => {
  if (genreResult.style.display == "grid") {
    const selected = [];
    for (let i = 0; i < movies.length; i++) {
      const filtro = movies[i];
      if (movies[i].genre === "Family") {
        selected.push(filtro);
        const random = selected[Math.floor(Math.random() * selected.length)];
        document.getElementById("genreResult__title").innerHTML = random.title;
        document.getElementById("genreResult__director").innerHTML =
          "Director: " + random.director;
        document.getElementById("genreResult__genre").innerHTML =
          "Genre: " + random.genre;
        document.getElementById("genreResult__duration").innerHTML =
          "Duration: " + random.duration;
        document.getElementById("genreResult__img").src = random.image;
        document.getElementById("genreResult__rating").innerHTML =
          "Rating: " + random.rating;
        document.getElementById("genreResult__release").innerHTML =
          "Released: " + random.releaseDate;
        document.getElementById("genreResult__link--watch").href = random.link;
        document.getElementById("genreResult__link--trailer").href =
          random.trailer;
      }
    }
  }
});




//mystery
const genreBtn_mystery = document.getElementById("genreMain_mystery"); // SHOW CONTENT
genreBtn_mystery.addEventListener("click", () => {
  if ((genreMain.style.display = "block")) {
    genreMain.style.display = "none";
    genreResult.style.display = "grid";
    anotherGenreMystery.style.display = "block";
    filtrosMovies.filtrarGenre(movies, "Mystery");
    genreHeader.innerHTML = "Mystery";
  }
});

const anotherGenreMystery = document.getElementById("genreMystery__another"); // ANOTHER RECOM BTN
anotherGenreMystery.style.display = "none";
anotherGenreMystery.addEventListener("click", () => {
  if (genreResult.style.display == "grid") {
    const selected = [];
    for (let i = 0; i < movies.length; i++) {
      const filtro = movies[i];
      if (movies[i].genre === "Mystery") {
        selected.push(filtro);
        const random = selected[Math.floor(Math.random() * selected.length)];
        document.getElementById("genreResult__title").innerHTML = random.title;
        document.getElementById("genreResult__director").innerHTML =
          "Director: " + random.director;
        document.getElementById("genreResult__genre").innerHTML =
          "Genre: " + random.genre;
        document.getElementById("genreResult__duration").innerHTML =
          "Duration: " + random.duration;
        document.getElementById("genreResult__img").src = random.image;
        document.getElementById("genreResult__rating").innerHTML =
          "Rating: " + random.rating;
        document.getElementById("genreResult__release").innerHTML =
          "Released: " + random.releaseDate;
        document.getElementById("genreResult__link--watch").href = random.link;
        document.getElementById("genreResult__link--trailer").href =
          random.trailer;
      }
    }
  }
});




//biography
const genreBtn_biography = document.getElementById("genreMain_biography"); // SHOW CONTENT
genreBtn_biography.addEventListener("click", () => {
  if ((genreMain.style.display = "block")) {
    genreMain.style.display = "none";
    genreResult.style.display = "grid";
    anotherGenreBiography.style.display = "block";
    filtrosMovies.filtrarGenre(movies, "Biography");
    genreHeader.innerHTML = "Biography";
  }
});

const anotherGenreBiography = document.getElementById("genreBiography__another"); // ANOTHER RECOM BTN
anotherGenreBiography.style.display = "none";
anotherGenreBiography.addEventListener("click", () => {
  if (genreResult.style.display == "grid") {
    const selected = [];
    for (let i = 0; i < movies.length; i++) {
      const filtro = movies[i];
      if (movies[i].genre === "Biography") {
        selected.push(filtro);
        const random = selected[Math.floor(Math.random() * selected.length)];
        document.getElementById("genreResult__title").innerHTML = random.title;
        document.getElementById("genreResult__director").innerHTML =
          "Director: " + random.director;
        document.getElementById("genreResult__genre").innerHTML =
          "Genre: " + random.genre;
        document.getElementById("genreResult__duration").innerHTML =
          "Duration: " + random.duration;
        document.getElementById("genreResult__img").src = random.image;
        document.getElementById("genreResult__rating").innerHTML =
          "Rating: " + random.rating;
        document.getElementById("genreResult__release").innerHTML =
          "Released: " + random.releaseDate;
        document.getElementById("genreResult__link--watch").href = random.link;
        document.getElementById("genreResult__link--trailer").href =
          random.trailer;
      }
    }
  }
});




//history
const genreBtn_history = document.getElementById("genreMain_history"); // SHOW CONTENT
genreBtn_history.addEventListener("click", () => {
  if ((genreMain.style.display = "block")) {
    genreMain.style.display = "none";
    genreResult.style.display = "grid";
    anotherGenreHistory.style.display = "block";
    filtrosMovies.filtrarGenre(movies, "History");
    genreHeader.innerHTML = "History";
  }
});

const anotherGenreHistory = document.getElementById("genreHistory__another"); // ANOTHER RECOM BTN
anotherGenreHistory.style.display = "none";
anotherGenreHistory.addEventListener("click", () => {
  if (genreResult.style.display == "grid") {
    const selected = [];
    for (let i = 0; i < movies.length; i++) {
      const filtro = movies[i];
      if (movies[i].genre === "History") {
        selected.push(filtro);
        const random = selected[Math.floor(Math.random() * selected.length)];
        document.getElementById("genreResult__title").innerHTML = random.title;
        document.getElementById("genreResult__director").innerHTML =
          "Director: " + random.director;
        document.getElementById("genreResult__genre").innerHTML =
          "Genre: " + random.genre;
        document.getElementById("genreResult__duration").innerHTML =
          "Duration: " + random.duration;
        document.getElementById("genreResult__img").src = random.image;
        document.getElementById("genreResult__rating").innerHTML =
          "Rating: " + random.rating;
        document.getElementById("genreResult__release").innerHTML =
          "Released: " + random.releaseDate;
        document.getElementById("genreResult__link--watch").href = random.link;
        document.getElementById("genreResult__link--trailer").href =
          random.trailer;
      }
    }
  }
});




//animation
const genreBtn_animation = document.getElementById("genreMain_animation"); // SHOW CONTENT
genreBtn_animation.addEventListener("click", () => {
  if ((genreMain.style.display = "block")) {
    genreMain.style.display = "none";
    genreResult.style.display = "grid";
    anotherGenreAnimation.style.display = "block";
    filtrosMovies.filtrarGenre(movies, "Animation");
    genreHeader.innerHTML = "Animation";
  }
});

const anotherGenreAnimation = document.getElementById("genreAnimation__another"); // ANOTHER RECOM BTN
anotherGenreAnimation.style.display = "none";
anotherGenreAnimation.addEventListener("click", () => {
  if (genreResult.style.display == "grid") {
    const selected = [];
    for (let i = 0; i < movies.length; i++) {
      const filtro = movies[i];
      if (movies[i].genre === "Animation") {
        selected.push(filtro);
        const random = selected[Math.floor(Math.random() * selected.length)];
        document.getElementById("genreResult__title").innerHTML = random.title;
        document.getElementById("genreResult__director").innerHTML =
          "Director: " + random.director;
        document.getElementById("genreResult__genre").innerHTML =
          "Genre: " + random.genre;
        document.getElementById("genreResult__duration").innerHTML =
          "Duration: " + random.duration;
        document.getElementById("genreResult__img").src = random.image;
        document.getElementById("genreResult__rating").innerHTML =
          "Rating: " + random.rating;
        document.getElementById("genreResult__release").innerHTML =
          "Released: " + random.releaseDate;
        document.getElementById("genreResult__link--watch").href = random.link;
        document.getElementById("genreResult__link--trailer").href =
          random.trailer;
      }
    }
  }
});




//slasher
const genreBtn_slasher = document.getElementById("genreMain_slasher"); // SHOW CONTENT
genreBtn_slasher.addEventListener("click", () => {
  if ((genreMain.style.display = "block")) {
    genreMain.style.display = "none";
    genreResult.style.display = "grid";
    anotherGenreSlasher.style.display = "block";
    filtrosMovies.filtrarGenre(movies, "Slasher");
    genreHeader.innerHTML = "Slasher";
  }
});

const anotherGenreSlasher = document.getElementById("genreSlasher__another"); // ANOTHER RECOM BTN
anotherGenreSlasher.style.display = "none";
anotherGenreSlasher.addEventListener("click", () => {
  if (genreResult.style.display == "grid") {
    const selected = [];
    for (let i = 0; i < movies.length; i++) {
      const filtro = movies[i];
      if (movies[i].genre === "Slasher") {
        selected.push(filtro);
        const random = selected[Math.floor(Math.random() * selected.length)];
        document.getElementById("genreResult__title").innerHTML = random.title;
        document.getElementById("genreResult__director").innerHTML =
          "Director: " + random.director;
        document.getElementById("genreResult__genre").innerHTML =
          "Genre: " + random.genre;
        document.getElementById("genreResult__duration").innerHTML =
          "Duration: " + random.duration;
        document.getElementById("genreResult__img").src = random.image;
        document.getElementById("genreResult__rating").innerHTML =
          "Rating: " + random.rating;
        document.getElementById("genreResult__release").innerHTML =
          "Released: " + random.releaseDate;
        document.getElementById("genreResult__link--watch").href = random.link;
        document.getElementById("genreResult__link--trailer").href =
          random.trailer;
      }
    }
  }
});




//sport
const genreBtn_sport = document.getElementById("genreMain_sport"); // SHOW CONTENT
genreBtn_sport.addEventListener("click", () => {
  if ((genreMain.style.display = "block")) {
    genreMain.style.display = "none";
    genreResult.style.display = "grid";
    anotherGenreSport.style.display = "block";
    filtrosMovies.filtrarGenre(movies, "Sport");
    genreHeader.innerHTML = "Sport";
  }
});

const anotherGenreSport = document.getElementById("genreSport__another"); // ANOTHER RECOM BTN
anotherGenreSport.style.display = "none";
anotherGenreSport.addEventListener("click", () => {
  if (genreResult.style.display == "grid") {
    const selected = [];
    for (let i = 0; i < movies.length; i++) {
      const filtro = movies[i];
      if (movies[i].genre === "Sport") {
        selected.push(filtro);
        const random = selected[Math.floor(Math.random() * selected.length)];
        document.getElementById("genreResult__title").innerHTML = random.title;
        document.getElementById("genreResult__director").innerHTML =
          "Director: " + random.director;
        document.getElementById("genreResult__genre").innerHTML =
          "Genre: " + random.genre;
        document.getElementById("genreResult__duration").innerHTML =
          "Duration: " + random.duration;
        document.getElementById("genreResult__img").src = random.image;
        document.getElementById("genreResult__rating").innerHTML =
          "Rating: " + random.rating;
        document.getElementById("genreResult__release").innerHTML =
          "Released: " + random.releaseDate;
        document.getElementById("genreResult__link--watch").href = random.link;
        document.getElementById("genreResult__link--trailer").href =
          random.trailer;
      }
    }
  }
});




//disaster
const genreBtn_disaster = document.getElementById("genreMain_disaster"); // SHOW CONTENT
genreBtn_disaster.addEventListener("click", () => {
  if ((genreMain.style.display = "block")) {
    genreMain.style.display = "none";
    genreResult.style.display = "grid";
    anotherGenreDisaster.style.display = "block";
    filtrosMovies.filtrarGenre(movies, "Disaster");
    genreHeader.innerHTML = "Disaster";
  }
});

const anotherGenreDisaster = document.getElementById("genreDisaster__another"); // ANOTHER RECOM BTN
anotherGenreDisaster.style.display = "none";
anotherGenreDisaster.addEventListener("click", () => {
  if (genreResult.style.display == "grid") {
    const selected = [];
    for (let i = 0; i < movies.length; i++) {
      const filtro = movies[i];
      if (movies[i].genre === "Disaster") {
        selected.push(filtro);
        const random = selected[Math.floor(Math.random() * selected.length)];
        document.getElementById("genreResult__title").innerHTML = random.title;
        document.getElementById("genreResult__director").innerHTML =
          "Director: " + random.director;
        document.getElementById("genreResult__genre").innerHTML =
          "Genre: " + random.genre;
        document.getElementById("genreResult__duration").innerHTML =
          "Duration: " + random.duration;
        document.getElementById("genreResult__img").src = random.image;
        document.getElementById("genreResult__rating").innerHTML =
          "Rating: " + random.rating;
        document.getElementById("genreResult__release").innerHTML =
          "Released: " + random.releaseDate;
        document.getElementById("genreResult__link--watch").href = random.link;
        document.getElementById("genreResult__link--trailer").href =
          random.trailer;
      }
    }
  }
});




//western
const genreBtn_western = document.getElementById("genreMain_western"); // SHOW CONTENT
genreBtn_western.addEventListener("click", () => {
  if ((genreMain.style.display = "block")) {
    genreMain.style.display = "none";
    genreResult.style.display = "grid";
    anotherGenreWestern.style.display = "block";
    filtrosMovies.filtrarGenre(movies, "Western");
    genreHeader.innerHTML = "Western";
  }
});

const anotherGenreWestern = document.getElementById("genreWestern__another"); // ANOTHER RECOM BTN
anotherGenreWestern.style.display = "none";
anotherGenreWestern.addEventListener("click", () => {
  if (genreResult.style.display == "grid") {
    const selected = [];
    for (let i = 0; i < movies.length; i++) {
      const filtro = movies[i];
      if (movies[i].genre === "Western") {
        selected.push(filtro);
        const random = selected[Math.floor(Math.random() * selected.length)];
        document.getElementById("genreResult__title").innerHTML = random.title;
        document.getElementById("genreResult__director").innerHTML =
          "Director: " + random.director;
        document.getElementById("genreResult__genre").innerHTML =
          "Genre: " + random.genre;
        document.getElementById("genreResult__duration").innerHTML =
          "Duration: " + random.duration;
        document.getElementById("genreResult__img").src = random.image;
        document.getElementById("genreResult__rating").innerHTML =
          "Rating: " + random.rating;
        document.getElementById("genreResult__release").innerHTML =
          "Released: " + random.releaseDate;
        document.getElementById("genreResult__link--watch").href = random.link;
        document.getElementById("genreResult__link--trailer").href =
          random.trailer;
      }
    }
  }
});




//war
const genreBtn_war = document.getElementById("genreMain_war"); // SHOW CONTENT
genreBtn_war.addEventListener("click", () => {
  if ((genreMain.style.display = "block")) {
    genreMain.style.display = "none";
    genreResult.style.display = "grid";
    anotherGenreWar.style.display = "block";
    filtrosMovies.filtrarGenre(movies, "War");
    genreHeader.innerHTML = "War";
  }
});

const anotherGenreWar = document.getElementById("genreWar__another"); // ANOTHER RECOM BTN
anotherGenreWar.style.display = "none";
anotherGenreWar.addEventListener("click", () => {
  if (genreResult.style.display == "grid") {
    const selected = [];
    for (let i = 0; i < movies.length; i++) {
      const filtro = movies[i];
      if (movies[i].genre === "War") {
        selected.push(filtro);
        const random = selected[Math.floor(Math.random() * selected.length)];
        document.getElementById("genreResult__title").innerHTML = random.title;
        document.getElementById("genreResult__director").innerHTML =
          "Director: " + random.director;
        document.getElementById("genreResult__genre").innerHTML =
          "Genre: " + random.genre;
        document.getElementById("genreResult__duration").innerHTML =
          "Duration: " + random.duration;
        document.getElementById("genreResult__img").src = random.image;
        document.getElementById("genreResult__rating").innerHTML =
          "Rating: " + random.rating;
        document.getElementById("genreResult__release").innerHTML =
          "Released: " + random.releaseDate;
        document.getElementById("genreResult__link--watch").href = random.link;
        document.getElementById("genreResult__link--trailer").href =
          random.trailer;
      }
    }
  }
});




//horror
const genreBtn_horror = document.getElementById("genreMain_horror"); // SHOW CONTENT
genreBtn_horror.addEventListener("click", () => {
  if ((genreMain.style.display = "block")) {
    genreMain.style.display = "none";
    genreResult.style.display = "grid";
    anotherGenreHorror.style.display = "block";
    filtrosMovies.filtrarGenre(movies, "Horror");
    genreHeader.innerHTML = "Horror";
  }
});

const anotherGenreHorror = document.getElementById("genreHorror__another"); // ANOTHER RECOM BTN
anotherGenreHorror.style.display = "none";
anotherGenreHorror.addEventListener("click", () => {
  if (genreResult.style.display == "grid") {
    const selected = [];
    for (let i = 0; i < movies.length; i++) {
      const filtro = movies[i];
      if (movies[i].genre === "Horror") {
        selected.push(filtro);
        const random = selected[Math.floor(Math.random() * selected.length)];
        document.getElementById("genreResult__title").innerHTML = random.title;
        document.getElementById("genreResult__director").innerHTML =
          "Director: " + random.director;
        document.getElementById("genreResult__genre").innerHTML =
          "Genre: " + random.genre;
        document.getElementById("genreResult__duration").innerHTML =
          "Duration: " + random.duration;
        document.getElementById("genreResult__img").src = random.image;
        document.getElementById("genreResult__rating").innerHTML =
          "Rating: " + random.rating;
        document.getElementById("genreResult__release").innerHTML =
          "Released: " + random.releaseDate;
        document.getElementById("genreResult__link--watch").href = random.link;
        document.getElementById("genreResult__link--trailer").href =
          random.trailer;
      }
    }
  }
});






