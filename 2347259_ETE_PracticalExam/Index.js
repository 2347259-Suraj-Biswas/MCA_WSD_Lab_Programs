const FetchJokes = document.getElementById("jokes1");
const FetchJokes2 = document.getElementById("jokes2");
const btnFetch = document.getElementById("fetchJokes");

document.addEventListener("DOMContentLoaded",()=> {
    fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=political")
   .then(res => res.json())
   .then(res =>{
       if(res.joke){
           FetchJokes.innerHTML = res.joke;
           FetchJokes.innerHTML = "";
       }
       else{
           FetchJokes.innerHTML = res.setup;
           FetchJokes2.innerHTML = res.delivery;
       }

   })
});
btnFetch.addEventListener("click",()=> {
     fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit")
    .then(res => res.json())
    .then(res =>{
        if(res.joke){
            FetchJokes.innerHTML = res.joke;
            FetchJokes.innerHTML = "";
        }
        else{
            FetchJokes.innerHTML = res.setup;
            FetchJokes2.innerHTML = res.delivery;
        }

    })
});