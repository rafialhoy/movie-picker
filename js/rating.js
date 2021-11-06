import { movies } from "./movies.js";
import { filtrosMovies } from "./filtros.js";

console.log(movies);
console.log(filtrosMovies);



// Main content blocks
const ratingHeader = document.getElementById("ratingHeader__title");

const ratingMain = document.getElementById("ratingMain");




// hidden content blocks
const ratingResult = document.getElementById("ratingResult"); // ACTION GENRE CONTENT BLOCK
ratingResult.style.display = "none";




// EVENTOS DEL DOM PARA RESULTADOS DE RATING
// SUPERIOR A 9
const ratingBtn_9 = document.getElementById("ratingMain__9.0"); // SHOW CONTENT
ratingBtn_9.addEventListener("click", () => {
  if ((ratingMain.style.display = "block")) {
    ratingMain.style.display = "none";
    ratingResult.style.display = "grid";
    anotherRating9.style.display = "block";
    filtrosMovies.filtrarRating(movies, 9.0, 10.0);
    ratingHeader.innerHTML = "Master Pieces";
  }
});

const anotherRating9 = document.getElementById("rating9__another"); // ANOTHER RECOM BTN
anotherRating9.style.display = "none";
anotherRating9.addEventListener("click", () => {
  if ((ratingResult.style.display = "grid")) {
    const selected = [];
    for (let i = 0; i < movies.length; i++) {
      const filtro = movies[i];
      if (filtro.rating < 10.0 && filtro.rating >= 9.0) {
        selected.push(filtro);
        const random = selected[Math.floor(Math.random() * selected.length)];
        document.getElementById("ratingResult__title").innerHTML = random.title;
        document.getElementById("ratingResult__director").innerHTML =
          "Director: " + random.director;
        document.getElementById("ratingResult__genre").innerHTML =
          "Genre: " + random.genre;
        document.getElementById("ratingResult__duration").innerHTML =
          "Duration: " + random.duration;
        document.getElementById("ratingResult__img").src = random.image;
        document.getElementById("ratingResult__rating").innerHTML =
          "Rating: " + random.rating;
        document.getElementById("ratingResult__release").innerHTML =
          "Released: " + random.releaseDate;
        document.getElementById("ratingResult__link--watch").href = random.link;
        document.getElementById("ratingResult__link--trailer").href =
          random.trailer;
      }
    }
  }
});




// SUPERIOR A 8
const ratingBtn_8 = document.getElementById("ratingMain__8.0"); // SHOW CONTENT
ratingBtn_8.addEventListener("click", () => {
  if ((ratingMain.style.display = "block")) {
    ratingMain.style.display = "none";
    ratingResult.style.display = "grid";
    anotherRating8.style.display = "block";
    filtrosMovies.filtrarRating(movies, 8.0, 9.0);
    ratingHeader.innerHTML = "Great Movies";
  }
});

const anotherRating8 = document.getElementById("rating8__another"); // ANOTHER RECOM BTN
anotherRating8.style.display = "none";
anotherRating8.addEventListener("click", () => {
  if ((ratingResult.style.display = "grid")) {
    const selected = [];
    for (let i = 0; i < movies.length; i++) {
      const filtro = movies[i];
      if (filtro.rating < 9.0 && filtro.rating >= 8.0) {
        selected.push(filtro);
        const random = selected[Math.floor(Math.random() * selected.length)];
        document.getElementById("ratingResult__title").innerHTML = random.title;
        document.getElementById("ratingResult__director").innerHTML =
          "Director: " + random.director;
        document.getElementById("ratingResult__genre").innerHTML =
          "Genre: " + random.genre;
        document.getElementById("ratingResult__duration").innerHTML =
          "Duration: " + random.duration;
        document.getElementById("ratingResult__img").src = random.image;
        document.getElementById("ratingResult__rating").innerHTML =
          "Rating: " + random.rating;
        document.getElementById("ratingResult__release").innerHTML =
          "Released: " + random.releaseDate;
        document.getElementById("ratingResult__link--watch").href = random.link;
        document.getElementById("ratingResult__link--trailer").href =
          random.trailer;
      }
    }
  }
});




// SUPERIOR A 7
const ratingBtn_7 = document.getElementById("ratingMain__7.0"); // SHOW CONTENT
ratingBtn_7.addEventListener("click", () => {
  if ((ratingMain.style.display = "block")) {
    ratingMain.style.display = "none";
    ratingResult.style.display = "grid";
    anotherRating7.style.display = "block";
    filtrosMovies.filtrarRating(movies, 7.0, 8.0);
    ratingHeader.innerHTML = "Good Movies";
  }
});

const anotherRating7 = document.getElementById("rating7__another"); // ANOTHER RECOM BTN
anotherRating7.style.display = "none";
anotherRating7.addEventListener("click", () => {
  if ((ratingResult.style.display = "grid")) {
    const selected = [];
    for (let i = 0; i < movies.length; i++) {
      const filtro = movies[i];
      if (filtro.rating < 8.0 && filtro.rating >= 7.0) {
        selected.push(filtro);
        const random = selected[Math.floor(Math.random() * selected.length)];
        document.getElementById("ratingResult__title").innerHTML = random.title;
        document.getElementById("ratingResult__director").innerHTML =
          "Director: " + random.director;
        document.getElementById("ratingResult__genre").innerHTML =
          "Genre: " + random.genre;
        document.getElementById("ratingResult__duration").innerHTML =
          "Duration: " + random.duration;
        document.getElementById("ratingResult__img").src = random.image;
        document.getElementById("ratingResult__rating").innerHTML =
          "Rating: " + random.rating;
        document.getElementById("ratingResult__release").innerHTML =
          "Released: " + random.releaseDate;
        document.getElementById("ratingResult__link--watch").href = random.link;
        document.getElementById("ratingResult__link--trailer").href =
          random.trailer;
      }
    }
  }
});




// SUPERIOR A 6
const ratingBtn_6 = document.getElementById("ratingMain__6.0"); // SHOW CONTENT
ratingBtn_6.addEventListener("click", () => {
  if ((ratingMain.style.display = "block")) {
    ratingMain.style.display = "none";
    ratingResult.style.display = "grid";
    anotherRating6.style.display = "block";
    filtrosMovies.filtrarRating(movies, 6.0, 7.0);
    ratingHeader.innerHTML = "Nahhh Movies";
  }
});

const anotherRating6 = document.getElementById("rating6__another"); // ANOTHER RECOM BTN
anotherRating6.style.display = "none";
anotherRating6.addEventListener("click", () => {
  if ((ratingResult.style.display = "grid")) {
    const selected = [];
    for (let i = 0; i < movies.length; i++) {
      const filtro = movies[i];
      if (filtro.rating < 7.0 && filtro.rating >= 6.0) {
        selected.push(filtro);
        const random = selected[Math.floor(Math.random() * selected.length)];
        document.getElementById("ratingResult__title").innerHTML = random.title;
        document.getElementById("ratingResult__director").innerHTML =
          "Director: " + random.director;
        document.getElementById("ratingResult__genre").innerHTML =
          "Genre: " + random.genre;
        document.getElementById("ratingResult__duration").innerHTML =
          "Duration: " + random.duration;
        document.getElementById("ratingResult__img").src = random.image;
        document.getElementById("ratingResult__rating").innerHTML =
          "Rating: " + random.rating;
        document.getElementById("ratingResult__release").innerHTML =
          "Released: " + random.releaseDate;
        document.getElementById("ratingResult__link--watch").href = random.link;
        document.getElementById("ratingResult__link--trailer").href =
          random.trailer;
      }
    }
  }
});




// SUPERIOR A 5
const ratingBtn_5 = document.getElementById("ratingMain__5.0"); // SHOW CONTENT
ratingBtn_5.addEventListener("click", () => {
  if ((ratingMain.style.display = "block")) {
    ratingMain.style.display = "none";
    ratingResult.style.display = "grid";
    anotherRating5.style.display = "block";
    filtrosMovies.filtrarRating(movies, 5.0, 6.0);
    ratingHeader.innerHTML = "Bollywood Style";
  }
});

const anotherRating5 = document.getElementById("rating5__another"); // ANOTHER RECOM BTN
anotherRating5.style.display = "none";
anotherRating5.addEventListener("click", () => {
  if ((ratingResult.style.display = "grid")) {
    const selected = [];
    for (let i = 0; i < movies.length; i++) {
      const filtro = movies[i];
      if (filtro.rating < 6.0 && filtro.rating >= 5.0) {
        selected.push(filtro);
        const random = selected[Math.floor(Math.random() * selected.length)];
        document.getElementById("ratingResult__title").innerHTML = random.title;
        document.getElementById("ratingResult__director").innerHTML =
          "Director: " + random.director;
        document.getElementById("ratingResult__genre").innerHTML =
          "Genre: " + random.genre;
        document.getElementById("ratingResult__duration").innerHTML =
          "Duration: " + random.duration;
        document.getElementById("ratingResult__img").src = random.image;
        document.getElementById("ratingResult__rating").innerHTML =
          "Rating: " + random.rating;
        document.getElementById("ratingResult__release").innerHTML =
          "Released: " + random.releaseDate;
        document.getElementById("ratingResult__link--watch").href = random.link;
        document.getElementById("ratingResult__link--trailer").href =
          random.trailer;
      }
    }
  }
});





// SUPERIOR A 4
const ratingBtn_4 = document.getElementById("ratingMain__4.0"); // SHOW CONTENT
ratingBtn_4.addEventListener("click", () => {
  if ((ratingMain.style.display = "block")) {
    ratingMain.style.display = "none";
    ratingResult.style.display = "grid";
    anotherRating4.style.display = "block";
    filtrosMovies.filtrarRating(movies, 4.0, 5.0);
    ratingHeader.innerHTML = "Really Bad Movies";
  }
});

const anotherRating4 = document.getElementById("rating4__another"); // ANOTHER RECOM BTN
anotherRating4.style.display = "none";
anotherRating4.addEventListener("click", () => {
  if ((ratingResult.style.display = "grid")) {
    const selected = [];
    for (let i = 0; i < movies.length; i++) {
      const filtro = movies[i];
      if (filtro.rating < 5.0 && filtro.rating >= 4.0) {
        selected.push(filtro);
        const random = selected[Math.floor(Math.random() * selected.length)];
        document.getElementById("ratingResult__title").innerHTML = random.title;
        document.getElementById("ratingResult__director").innerHTML =
          "Director: " + random.director;
        document.getElementById("ratingResult__genre").innerHTML =
          "Genre: " + random.genre;
        document.getElementById("ratingResult__duration").innerHTML =
          "Duration: " + random.duration;
        document.getElementById("ratingResult__img").src = random.image;
        document.getElementById("ratingResult__rating").innerHTML =
          "Rating: " + random.rating;
        document.getElementById("ratingResult__release").innerHTML =
          "Released: " + random.releaseDate;
        document.getElementById("ratingResult__link--watch").href = random.link;
        document.getElementById("ratingResult__link--trailer").href =
          random.trailer;
      }
    }
  }
});




// SUPERIOR A 3
const ratingBtn_3 = document.getElementById("ratingMain__3.0"); // SHOW CONTENT
ratingBtn_3.addEventListener("click", () => {
  if ((ratingMain.style.display = "block")) {
    ratingMain.style.display = "none";
    ratingResult.style.display = "grid";
    anotherRating3.style.display = "block";
    filtrosMovies.filtrarRating(movies, 3.0, 4.0);
    ratingHeader.innerHTML = "Really Shitty Movies";
  }
});

const anotherRating3 = document.getElementById("rating3__another"); // ANOTHER RECOM BTN
anotherRating3.style.display = "none";
anotherRating3.addEventListener("click", () => {
  if ((ratingResult.style.display = "grid")) {
    const selected = [];
    for (let i = 0; i < movies.length; i++) {
      const filtro = movies[i];
      if (filtro.rating < 4.0 && filtro.rating >= 3.0) {
        selected.push(filtro);
        const random = selected[Math.floor(Math.random() * selected.length)];
        document.getElementById("ratingResult__title").innerHTML = random.title;
        document.getElementById("ratingResult__director").innerHTML =
          "Director: " + random.director;
        document.getElementById("ratingResult__genre").innerHTML =
          "Genre: " + random.genre;
        document.getElementById("ratingResult__duration").innerHTML =
          "Duration: " + random.duration;
        document.getElementById("ratingResult__img").src = random.image;
        document.getElementById("ratingResult__rating").innerHTML =
          "Rating: " + random.rating;
        document.getElementById("ratingResult__release").innerHTML =
          "Released: " + random.releaseDate;
        document.getElementById("ratingResult__link--watch").href = random.link;
        document.getElementById("ratingResult__link--trailer").href =
          random.trailer;
      }
    }
  }
});




// SUPERIOR A 2
const ratingBtn_2 = document.getElementById("ratingMain__2.0"); // SHOW CONTENT
ratingBtn_2.addEventListener("click", () => {
  if ((ratingMain.style.display = "block")) {
    ratingMain.style.display = "none";
    ratingResult.style.display = "grid";
    anotherRating2.style.display = "block";
    filtrosMovies.filtrarRating(movies, 2.0, 3.0);
    ratingHeader.innerHTML = "Fan Made Shit";
  }
});

const anotherRating2 = document.getElementById("rating2__another"); // ANOTHER RECOM BTN
anotherRating2.style.display = "none";
anotherRating2.addEventListener("click", () => {
  if ((ratingResult.style.display = "grid")) {
    const selected = [];
    for (let i = 0; i < movies.length; i++) {
      const filtro = movies[i];
      if (filtro.rating < 3.0 && filtro.rating >= 2.0) {
        selected.push(filtro);
        const random = selected[Math.floor(Math.random() * selected.length)];
        document.getElementById("ratingResult__title").innerHTML = random.title;
        document.getElementById("ratingResult__director").innerHTML =
          "Director: " + random.director;
        document.getElementById("ratingResult__genre").innerHTML =
          "Genre: " + random.genre;
        document.getElementById("ratingResult__duration").innerHTML =
          "Duration: " + random.duration;
        document.getElementById("ratingResult__img").src = random.image;
        document.getElementById("ratingResult__rating").innerHTML =
          "Rating: " + random.rating;
        document.getElementById("ratingResult__release").innerHTML =
          "Released: " + random.releaseDate;
        document.getElementById("ratingResult__link--watch").href = random.link;
        document.getElementById("ratingResult__link--trailer").href =
          random.trailer;
      }
    }
  }
});