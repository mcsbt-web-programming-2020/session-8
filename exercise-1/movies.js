"use strict";

const randomMovieUrl = "https://api.rand.fun/movies/title";
const omdbUrl = "http://www.omdbapi.com/?apikey=ca3c636a&t="

function getMovieInfo(json) {
  return fetch(omdbUrl + json.result);
}

function addInfoToHTML(data) {
  let h1 = document.querySelector("#random-movie h1");
  h1.innerHTML = data.Title;

  let img = document.querySelector("#random-movie img");
  img.setAttribute("src", data.Poster);

  let description = document.querySelector("#random-movie .description");
  description.innerHTML = data.Plot;
}

fetch(randomMovieUrl)
  .then(response => response.json())
  .then(getMovieInfo)
  .then(response => response.json())
  .then(addInfoToHTML)

