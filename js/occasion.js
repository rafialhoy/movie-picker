import { movies } from "./movies.js";
import { filtrosMovies } from "./filtros.js";

console.log(movies);
console.log(filtrosMovies);

// Main content blocks

const occasionHeader = document.getElementById("occasionHeader__title");

const occasionMain = document.getElementById("occasionMain");

// hidden content blocks
const occasionResult = document.getElementById("occasionResult"); // ACTION GENRE CONTENT BLOCK
occasionResult.style.display = "none";





// EVENTOS DEL DOM PARA RESULTADOS DE OCCASIONS
// ALONE
const occasionBtn_alone = document.getElementById("occasionMain__alone"); // SHOW CONTENT
occasionBtn_alone.addEventListener("click", () => {
  if ((occasionMain.style.display = "block")) {
    occasionMain.style.display = "none";
    occasionResult.style.display = "grid";
    anotherOccasionAlone.style.display = "block";
    filtrosMovies.filtrarOcc(movies, "Alone");
    occasionHeader.innerHTML = "By Yourself";
  }
});

const anotherOccasionAlone = document.getElementById("occasionAlone__another"); // ANOTHER RECOM BTN
anotherOccasionAlone.style.display = "none";
anotherOccasionAlone.addEventListener("click", () => {
  if ((occasionResult.style.display = "grid")) {
    const selected = [];
    for (let i = 0; i < movies.length; i++) {
      const filtro = movies[i];
      if (movies[i].occasion === "Alone") {
        selected.push(filtro);
        const random = selected[Math.floor(Math.random() * selected.length)];
        document.getElementById("occasionResult__title").innerHTML = random.title;
        document.getElementById("occasionResult__director").innerHTML =
          "Director: " + random.director;
        document.getElementById("occasionResult__genre").innerHTML =
          "Genre: " + random.genre;
        document.getElementById("occasionResult__duration").innerHTML =
          "Duration: " + random.duration;
        document.getElementById("occasionResult__img").src = random.image;
        document.getElementById("occasionResult__rating").innerHTML =
          "Rating: " + random.rating;
        document.getElementById("occasionResult__release").innerHTML =
          "Released: " + random.releaseDate;
        document.getElementById("occasionResult__link--watch").href = random.link;
        document.getElementById("occasionResult__link--trailer").href =
          random.trailer;
      }
    }
  }
});




// date
const occasionBtn_date = document.getElementById("occasionMain__date"); // SHOW CONTENT
occasionBtn_date.addEventListener("click", () => {
  if ((occasionMain.style.display = "block")) {
    occasionMain.style.display = "none";
    occasionResult.style.display = "grid";
    anotherOccasionDate.style.display = "block";
    filtrosMovies.filtrarOcc(movies, "Date");
    occasionHeader.innerHTML = "Movie Date";
  }
});

const anotherOccasionDate = document.getElementById("occasionDate__another"); // ANOTHER RECOM BTN
anotherOccasionDate.style.display = "none";
anotherOccasionDate.addEventListener("click", () => {
  if ((occasionResult.style.display = "grid")) {
    const selected = [];
    for (let i = 0; i < movies.length; i++) {
      const filtro = movies[i];
      if (movies[i].occasion === "Date") {
        selected.push(filtro);
        const random = selected[Math.floor(Math.random() * selected.length)];
        document.getElementById("occasionResult__title").innerHTML = random.title;
        document.getElementById("occasionResult__director").innerHTML =
          "Director: " + random.director;
        document.getElementById("occasionResult__genre").innerHTML =
          "Genre: " + random.genre;
        document.getElementById("occasionResult__duration").innerHTML =
          "Duration: " + random.duration;
        document.getElementById("occasionResult__img").src = random.image;
        document.getElementById("occasionResult__rating").innerHTML =
          "Rating: " + random.rating;
        document.getElementById("occasionResult__release").innerHTML =
          "Released: " + random.releaseDate;
        document.getElementById("occasionResult__link--watch").href = random.link;
        document.getElementById("occasionResult__link--trailer").href =
          random.trailer;
      }
    }
  }
});




// friends
const occasionBtn_friends = document.getElementById("occasionMain__friends"); // SHOW CONTENT
occasionBtn_friends.addEventListener("click", () => {
  if ((occasionMain.style.display = "block")) {
    occasionMain.style.display = "none";
    occasionResult.style.display = "grid";
    anotherOccasionFriends.style.display = "block";
    filtrosMovies.filtrarOcc(movies, "Friends");
    occasionHeader.innerHTML = "With Friends";
  }
});

const anotherOccasionFriends = document.getElementById("occasionFriends__another"); // ANOTHER RECOM BTN
anotherOccasionFriends.style.display = "none";
anotherOccasionFriends.addEventListener("click", () => {
  if ((occasionResult.style.display = "grid")) {
    const selected = [];
    for (let i = 0; i < movies.length; i++) {
      const filtro = movies[i];
      if (movies[i].occasion === "Friends") {
        selected.push(filtro);
        const random = selected[Math.floor(Math.random() * selected.length)];
        document.getElementById("occasionResult__title").innerHTML = random.title;
        document.getElementById("occasionResult__director").innerHTML =
          "Director: " + random.director;
        document.getElementById("occasionResult__genre").innerHTML =
          "Genre: " + random.genre;
        document.getElementById("occasionResult__duration").innerHTML =
          "Duration: " + random.duration;
        document.getElementById("occasionResult__img").src = random.image;
        document.getElementById("occasionResult__rating").innerHTML =
          "Rating: " + random.rating;
        document.getElementById("occasionResult__release").innerHTML =
          "Released: " + random.releaseDate;
        document.getElementById("occasionResult__link--watch").href = random.link;
        document.getElementById("occasionResult__link--trailer").href =
          random.trailer;
      }
    }
  }
});




// high
const occasionBtn_high = document.getElementById("occasionMain__high"); // SHOW CONTENT
occasionBtn_high.addEventListener("click", () => {
  if ((occasionMain.style.display = "block")) {
    occasionMain.style.display = "none";
    occasionResult.style.display = "grid";
    anotherOccasionHigh.style.display = "block";
    filtrosMovies.filtrarOcc(movies, "High");
    occasionHeader.innerHTML = "You're High";
  }
});

const anotherOccasionHigh = document.getElementById("occasionHigh__another"); // ANOTHER RECOM BTN
anotherOccasionHigh.style.display = "none";
anotherOccasionHigh.addEventListener("click", () => {
  if ((occasionResult.style.display = "grid")) {
    const selected = [];
    for (let i = 0; i < movies.length; i++) {
      const filtro = movies[i];
      if (movies[i].occasion === "High") {
        selected.push(filtro);
        const random = selected[Math.floor(Math.random() * selected.length)];
        document.getElementById("occasionResult__title").innerHTML = random.title;
        document.getElementById("occasionResult__director").innerHTML =
          "Director: " + random.director;
        document.getElementById("occasionResult__genre").innerHTML =
          "Genre: " + random.genre;
        document.getElementById("occasionResult__duration").innerHTML =
          "Duration: " + random.duration;
        document.getElementById("occasionResult__img").src = random.image;
        document.getElementById("occasionResult__rating").innerHTML =
          "Rating: " + random.rating;
        document.getElementById("occasionResult__release").innerHTML =
          "Released: " + random.releaseDate;
        document.getElementById("occasionResult__link--watch").href = random.link;
        document.getElementById("occasionResult__link--trailer").href =
          random.trailer;
      }
    }
  }
});




// family
const occasionBtn_family = document.getElementById("occasionMain__family"); // SHOW CONTENT
occasionBtn_family.addEventListener("click", () => {
  if ((occasionMain.style.display = "block")) {
    occasionMain.style.display = "none";
    occasionResult.style.display = "grid";
    anotherOccasionFamily.style.display = "block";
    filtrosMovies.filtrarOcc(movies, "Family");
    occasionHeader.innerHTML = "With Family";
  }
});

const anotherOccasionFamily = document.getElementById("occasionFamily__another"); // ANOTHER RECOM BTN
anotherOccasionFamily.style.display = "none";
anotherOccasionFamily.addEventListener("click", () => {
  if ((occasionResult.style.display = "grid")) {
    const selected = [];
    for (let i = 0; i < movies.length; i++) {
      const filtro = movies[i];
      if (movies[i].occasion === "Family") {
        selected.push(filtro);
        const random = selected[Math.floor(Math.random() * selected.length)];
        document.getElementById("occasionResult__title").innerHTML = random.title;
        document.getElementById("occasionResult__director").innerHTML =
          "Director: " + random.director;
        document.getElementById("occasionResult__genre").innerHTML =
          "Genre: " + random.genre;
        document.getElementById("occasionResult__duration").innerHTML =
          "Duration: " + random.duration;
        document.getElementById("occasionResult__img").src = random.image;
        document.getElementById("occasionResult__rating").innerHTML =
          "Rating: " + random.rating;
        document.getElementById("occasionResult__release").innerHTML =
          "Released: " + random.releaseDate;
        document.getElementById("occasionResult__link--watch").href = random.link;
        document.getElementById("occasionResult__link--trailer").href =
          random.trailer;
      }
    }
  }
});




// children
const occasionBtn_children = document.getElementById("occasionMain__children"); // SHOW CONTENT
occasionBtn_children.addEventListener("click", () => {
  if ((occasionMain.style.display = "block")) {
    occasionMain.style.display = "none";
    occasionResult.style.display = "grid";
    anotherOccasionChildren.style.display = "block";
    filtrosMovies.filtrarOcc(movies, "Children");
    occasionHeader.innerHTML = "With Children";
  }
});

const anotherOccasionChildren = document.getElementById("occasionChildren__another"); // ANOTHER RECOM BTN
anotherOccasionChildren.style.display = "none";
anotherOccasionChildren.addEventListener("click", () => {
  if ((occasionResult.style.display = "grid")) {
    const selected = [];
    for (let i = 0; i < movies.length; i++) {
      const filtro = movies[i];
      if (movies[i].occasion === "Children") {
        selected.push(filtro);
        const random = selected[Math.floor(Math.random() * selected.length)];
        document.getElementById("occasionResult__title").innerHTML = random.title;
        document.getElementById("occasionResult__director").innerHTML =
          "Director: " + random.director;
        document.getElementById("occasionResult__genre").innerHTML =
          "Genre: " + random.genre;
        document.getElementById("occasionResult__duration").innerHTML =
          "Duration: " + random.duration;
        document.getElementById("occasionResult__img").src = random.image;
        document.getElementById("occasionResult__rating").innerHTML =
          "Rating: " + random.rating;
        document.getElementById("occasionResult__release").innerHTML =
          "Released: " + random.releaseDate;
        document.getElementById("occasionResult__link--watch").href = random.link;
        document.getElementById("occasionResult__link--trailer").href =
          random.trailer;
      }
    }
  }
});



