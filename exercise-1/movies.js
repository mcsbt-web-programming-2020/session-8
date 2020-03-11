"use strict";

const randomMovieUrl = "https://api.rand.fun/movies/title";
const omdbUrl = "http://www.omdbapi.com/?apikey=ca3c636a&t="

fetch(randomMovieUrl)
    .then(response => response.json())
    .then(json => fetch(omdbUrl + json.result))
    .then(response => response.json())
    .then(json => addInfoToHTML(json))
    .catch(err => console.log(err))


function addInfoToHTML(data) {
    let h1 = document.querySelector("#random-movie h1");
    h1.innerHTML = data.Title;

    let image = document.querySelector("#random-movie img");
    image.setAttribute("src", data.Poster);

    let description = document.querySelector("#random-movie .description");
    description.innerHTML = data.Plot;
}
