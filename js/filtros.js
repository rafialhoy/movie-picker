export const filtrosMovies = {
  // FILTRA POR RELEASE DATE
  filtrarFecha: function (array, fechaMin, fechaMax) {
    const selected = [];
    for (let i = 0; i < array.length; i++) {
      const filtro = array[i];
      if (filtro.releaseDate < fechaMax && filtro.releaseDate >= fechaMin) {
        selected.push(filtro);
        const random = selected[Math.floor(Math.random() * selected.length)];
        document.getElementById("releaseResult__title").innerHTML =
          random.title;
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
        document.getElementById("releaseResult__link--watch").href =
          random.link;
        document.getElementById("releaseResult__link--trailer").href =
          random.trailer;
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
  },
  // FILTRAR POR OCCASION
  filtrarOcc: function (array, occasion) {
    const selected = [];
    for (let i = 0; i < array.length; i++) {
      const filtro = array[i];
      if (array[i].occasion === occasion) {
        selected.push(filtro);
        const random = selected[Math.floor(Math.random() * selected.length)];
        document.getElementById("occasionResult__title").innerHTML =
          random.title;
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
        document.getElementById("occasionResult__link--watch").href =
          random.link;
        document.getElementById("occasionResult__link--trailer").href =
          random.trailer;
      }
    }
  },

  //FILTRAR POR RATING
  filtrarRating: function (array, ratingMin, RatingMax) {
    const selected = [];
    for (let i = 0; i < array.length; i++) {
      const filtro = array[i];
      if (filtro.rating < RatingMax && filtro.rating >= ratingMin) {
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
  },
};
