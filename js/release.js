import { movies } from "./movies.js";
import { filtrosMovies } from "./filtros.js";

console.log(movies);
console.log(filtrosMovies);



// Main content blocks
const releaseHeader = document.getElementById("releaseHeader__title");

const releaseMain = document.getElementById("releaseMain");




// hidden content blocks
const releaseResult = document.getElementById("releaseResult"); // ACTION GENRE CONTENT BLOCK
releaseResult.style.display = "none";




// EVENTOS DEL DOM PARA RESULTADOS DE RELEASE DATE
// 1950
const releaseBtn_1950 = document.getElementById("releaseMain__1950"); // SHOW CONTENT
releaseBtn_1950.addEventListener("click", () => {
  if ((releaseMain.style.display = "block")) {
    releaseMain.style.display = "none";
    releaseResult.style.display = "grid";
    anotherRelease1950.style.display = "block";
    filtrosMovies.filtrarFecha(movies, 1950, 1960);
    releaseHeader.innerHTML = "1950s";
  }
});

const anotherRelease1950 = document.getElementById("release1950__another"); // ANOTHER RECOM BTN
anotherRelease1950.style.display = "none";
anotherRelease1950.addEventListener("click", () => {
  if ((releaseResult.style.display = "grid")) {
    const selected = [];
    for (let i = 0; i < movies.length; i++) {
      const filtro = movies[i];
      if (movies[i].releaseDate < 1960 && movies[i].releaseDate >= 1950) {
        selected.push(filtro);
        const random = selected[Math.floor(Math.random() * selected.length)];
        document.getElementById("releaseResult__title").innerHTML = random.title;
        document.getElementById("releaseResult__director").innerHTML =
          "Director: " + random.director;
        document.getElementById("releaseResult__genre").innerHTML =
          "Genre: " + random.genre;
        document.getElementById("releaseResult__duration").innerHTML =
          "Duration: " + random.duration;
        document.getElementById("releaseResult__img").src = random.image;
        document.getElementById("releaseResult__rating").innerHTML =
          "Rating: " + random.rating;
        document.getElementById("releaseResult__release").innerHTML =
          "Released: " + random.releaseDate;
        document.getElementById("releaseResult__link--watch").href = random.link;
        document.getElementById("releaseResult__link--trailer").href = random.trailer;
      }
    }
  }
});




// 1960
const releaseBtn_1960 = document.getElementById("releaseMain__1960"); // SHOW CONTENT
releaseBtn_1960.addEventListener("click", () => {
  if ((releaseMain.style.display = "block")) {
    releaseMain.style.display = "none";
    releaseResult.style.display = "grid";
    anotherRelease1960.style.display = "block";
    filtrosMovies.filtrarFecha(movies, 1960, 1970);
    releaseHeader.innerHTML = "1960s";
  }
});

const anotherRelease1960 = document.getElementById("release1960__another"); // ANOTHER RECOM BTN
anotherRelease1960.style.display = "none";
anotherRelease1960.addEventListener("click", () => {
  if ((releaseResult.style.display = "grid")) {
    const selected = [];
    for (let i = 0; i < movies.length; i++) {
      const filtro = movies[i];
      if (movies[i].releaseDate < 1970 && movies[i].releaseDate >= 1960) {
        selected.push(filtro);
        const random = selected[Math.floor(Math.random() * selected.length)];
        document.getElementById("releaseResult__title").innerHTML = random.title;
        document.getElementById("releaseResult__director").innerHTML =
          "Director: " + random.director;
        document.getElementById("releaseResult__genre").innerHTML =
          "Genre: " + random.genre;
        document.getElementById("releaseResult__duration").innerHTML =
          "Duration: " + random.duration;
        document.getElementById("releaseResult__img").src = random.image;
        document.getElementById("releaseResult__rating").innerHTML =
          "Rating: " + random.rating;
        document.getElementById("releaseResult__release").innerHTML =
          "Released: " + random.releaseDate;
        document.getElementById("releaseResult__link--watch").href = random.link;
        document.getElementById("releaseResult__link--trailer").href = random.trailer;
      }
    }
  }
});




// 1970
const releaseBtn_1970 = document.getElementById("releaseMain__1970"); // SHOW CONTENT
releaseBtn_1970.addEventListener("click", () => {
  if ((releaseMain.style.display = "block")) {
    releaseMain.style.display = "none";
    releaseResult.style.display = "grid";
    anotherRelease1970.style.display = "block";
    filtrosMovies.filtrarFecha(movies, 1970, 1980);
    releaseHeader.innerHTML = "1970s";
  }
});

const anotherRelease1970 = document.getElementById("release1970__another"); // ANOTHER RECOM BTN
anotherRelease1970.style.display = "none";
anotherRelease1970.addEventListener("click", () => {
  if ((releaseResult.style.display = "grid")) {
    const selected = [];
    for (let i = 0; i < movies.length; i++) {
      const filtro = movies[i];
      if (movies[i].releaseDate < 1980 && movies[i].releaseDate >= 1970) {
        selected.push(filtro);
        const random = selected[Math.floor(Math.random() * selected.length)];
        document.getElementById("releaseResult__title").innerHTML = random.title;
        document.getElementById("releaseResult__director").innerHTML =
          "Director: " + random.director;
        document.getElementById("releaseResult__genre").innerHTML =
          "Genre: " + random.genre;
        document.getElementById("releaseResult__duration").innerHTML =
          "Duration: " + random.duration;
        document.getElementById("releaseResult__img").src = random.image;
        document.getElementById("releaseResult__rating").innerHTML =
          "Rating: " + random.rating;
        document.getElementById("releaseResult__release").innerHTML =
          "Released: " + random.releaseDate;
        document.getElementById("releaseResult__link--watch").href = random.link;
        document.getElementById("releaseResult__link--trailer").href = random.trailer;
      }
    }
  }
});




// 1980
const releaseBtn_1980 = document.getElementById("releaseMain__1980"); // SHOW CONTENT
releaseBtn_1980.addEventListener("click", () => {
  if ((releaseMain.style.display = "block")) {
    releaseMain.style.display = "none";
    releaseResult.style.display = "grid";
    anotherRelease1980.style.display = "block";
    filtrosMovies.filtrarFecha(movies, 1980, 1990);
    releaseHeader.innerHTML = "1980s";
  }
});

const anotherRelease1980 = document.getElementById("release1980__another"); // ANOTHER RECOM BTN
anotherRelease1980.style.display = "none";
anotherRelease1980.addEventListener("click", () => {
  if ((releaseResult.style.display = "grid")) {
    const selected = [];
    for (let i = 0; i < movies.length; i++) {
      const filtro = movies[i];
      if (movies[i].releaseDate < 1990 && movies[i].releaseDate >= 1980) {
        selected.push(filtro);
        const random = selected[Math.floor(Math.random() * selected.length)];
        document.getElementById("releaseResult__title").innerHTML = random.title;
        document.getElementById("releaseResult__director").innerHTML =
          "Director: " + random.director;
        document.getElementById("releaseResult__genre").innerHTML =
          "Genre: " + random.genre;
        document.getElementById("releaseResult__duration").innerHTML =
          "Duration: " + random.duration;
        document.getElementById("releaseResult__img").src = random.image;
        document.getElementById("releaseResult__rating").innerHTML =
          "Rating: " + random.rating;
        document.getElementById("releaseResult__release").innerHTML =
          "Released: " + random.releaseDate;
        document.getElementById("releaseResult__link--watch").href = random.link;
        document.getElementById("releaseResult__link--trailer").href = random.trailer;
      }
    }
  }
});




// 1990
const releaseBtn_1990 = document.getElementById("releaseMain__1990"); // SHOW CONTENT
releaseBtn_1990.addEventListener("click", () => {
  if ((releaseMain.style.display = "block")) {
    releaseMain.style.display = "none";
    releaseResult.style.display = "grid";
    anotherRelease1990.style.display = "block";
    filtrosMovies.filtrarFecha(movies, 1990, 2000);
    releaseHeader.innerHTML = "1990s";
  }
});

const anotherRelease1990 = document.getElementById("release1990__another"); // ANOTHER RECOM BTN
anotherRelease1990.style.display = "none";
anotherRelease1990.addEventListener("click", () => {
  if ((releaseResult.style.display = "grid")) {
    const selected = [];
    for (let i = 0; i < movies.length; i++) {
      const filtro = movies[i];
      if (movies[i].releaseDate < 2000 && movies[i].releaseDate >= 1990) {
        selected.push(filtro);
        const random = selected[Math.floor(Math.random() * selected.length)];
        document.getElementById("releaseResult__title").innerHTML = random.title;
        document.getElementById("releaseResult__director").innerHTML =
          "Director: " + random.director;
        document.getElementById("releaseResult__genre").innerHTML =
          "Genre: " + random.genre;
        document.getElementById("releaseResult__duration").innerHTML =
          "Duration: " + random.duration;
        document.getElementById("releaseResult__img").src = random.image;
        document.getElementById("releaseResult__rating").innerHTML =
          "Rating: " + random.rating;
        document.getElementById("releaseResult__release").innerHTML =
          "Released: " + random.releaseDate;
        document.getElementById("releaseResult__link--watch").href = random.link;
        document.getElementById("releaseResult__link--trailer").href = random.trailer;
      }
    }
  }
});




// 2000
const releaseBtn_2000 = document.getElementById("releaseMain__2000"); // SHOW CONTENT
releaseBtn_2000.addEventListener("click", () => {
  if ((releaseMain.style.display = "block")) {
    releaseMain.style.display = "none";
    releaseResult.style.display = "grid";
    anotherRelease2000.style.display = "block";
    filtrosMovies.filtrarFecha(movies, 2000, 2010);
    releaseHeader.innerHTML = "2000s";
  }
});

const anotherRelease2000 = document.getElementById("release2000__another"); // ANOTHER RECOM BTN
anotherRelease2000.style.display = "none";
anotherRelease2000.addEventListener("click", () => {
  if ((releaseResult.style.display = "grid")) {
    const selected = [];
    for (let i = 0; i < movies.length; i++) {
      const filtro = movies[i];
      if (movies[i].releaseDate < 2010 && movies[i].releaseDate >= 2000) {
        selected.push(filtro);
        const random = selected[Math.floor(Math.random() * selected.length)];
        document.getElementById("releaseResult__title").innerHTML = random.title;
        document.getElementById("releaseResult__director").innerHTML =
          "Director: " + random.director;
        document.getElementById("releaseResult__genre").innerHTML =
          "Genre: " + random.genre;
        document.getElementById("releaseResult__duration").innerHTML =
          "Duration: " + random.duration;
        document.getElementById("releaseResult__img").src = random.image;
        document.getElementById("releaseResult__rating").innerHTML =
          "Rating: " + random.rating;
        document.getElementById("releaseResult__release").innerHTML =
          "Released: " + random.releaseDate;
        document.getElementById("releaseResult__link--watch").href = random.link;
        document.getElementById("releaseResult__link--trailer").href = random.trailer;
      }
    }
  }
});




// 2010
const releaseBtn_2010 = document.getElementById("releaseMain__2010"); // SHOW CONTENT
releaseBtn_2010.addEventListener("click", () => {
  if ((releaseMain.style.display = "block")) {
    releaseMain.style.display = "none";
    releaseResult.style.display = "grid";
    anotherRelease2010.style.display = "block";
    filtrosMovies.filtrarFecha(movies, 2010, 2020);
    releaseHeader.innerHTML = "2010s";
  }
});

const anotherRelease2010 = document.getElementById("release2010__another"); // ANOTHER RECOM BTN
anotherRelease2010.style.display = "none";
anotherRelease2010.addEventListener("click", () => {
  if ((releaseResult.style.display = "grid")) {
    const selected = [];
    for (let i = 0; i < movies.length; i++) {
      const filtro = movies[i];
      if (movies[i].releaseDate < 2020 && movies[i].releaseDate >= 2010) {
        selected.push(filtro);
        const random = selected[Math.floor(Math.random() * selected.length)];
        document.getElementById("releaseResult__title").innerHTML = random.title;
        document.getElementById("releaseResult__director").innerHTML =
          "Director: " + random.director;
        document.getElementById("releaseResult__genre").innerHTML =
          "Genre: " + random.genre;
        document.getElementById("releaseResult__duration").innerHTML =
          "Duration: " + random.duration;
        document.getElementById("releaseResult__img").src = random.image;
        document.getElementById("releaseResult__rating").innerHTML =
          "Rating: " + random.rating;
        document.getElementById("releaseResult__release").innerHTML =
          "Released: " + random.releaseDate;
        document.getElementById("releaseResult__link--watch").href = random.link;
        document.getElementById("releaseResult__link--trailer").href = random.trailer;
      }
    }
  }
});




// 2020
const releaseBtn_2020 = document.getElementById("releaseMain__recent"); // SHOW CONTENT
releaseBtn_2020.addEventListener("click", () => {
  if ((releaseMain.style.display = "block")) {
    releaseMain.style.display = "none";
    releaseResult.style.display = "grid";
    anotherRelease2020.style.display = "block";
    filtrosMovies.filtrarFecha(movies, 2020, 2025);
    releaseHeader.innerHTML = "2020s";
  }
});

const anotherRelease2020 = document.getElementById("releaseRecents__another"); // ANOTHER RECOM BTN
anotherRelease2020.style.display = "none";
anotherRelease2020.addEventListener("click", () => {
  if ((releaseResult.style.display = "grid")) {
    const selected = [];
    for (let i = 0; i < movies.length; i++) {
      const filtro = movies[i];
      if (movies[i].releaseDate < 2025 && movies[i].releaseDate >= 2020) {
        selected.push(filtro);
        const random = selected[Math.floor(Math.random() * selected.length)];
        document.getElementById("releaseResult__title").innerHTML = random.title;
        document.getElementById("releaseResult__director").innerHTML =
          "Director: " + random.director;
        document.getElementById("releaseResult__genre").innerHTML =
          "Genre: " + random.genre;
        document.getElementById("releaseResult__duration").innerHTML =
          "Duration: " + random.duration;
        document.getElementById("releaseResult__img").src = random.image;
        document.getElementById("releaseResult__rating").innerHTML =
          "Rating: " + random.rating;
        document.getElementById("releaseResult__release").innerHTML =
          "Released: " + random.releaseDate;
        document.getElementById("releaseResult__link--watch").href = random.link;
        document.getElementById("releaseResult__link--trailer").href = random.trailer;
      }
    }
  }
});