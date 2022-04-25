// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

var x = JSON.parse(localStorage.getItem("amount"));
  console.log(x);
  document.querySelector("#wallet").innerHTML=x;

  let movies_div = document.getElementById("movies");

  let id;

async function searchMovies(){

  try {
    

    const query = document.getElementById("search").value;

    const res = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=93f84492&s=${query}`)

    const data = await res.json();

    const movies = data.Search;

    // appendMovies(data);

    return movies;
  }


  catch(err){
    console.log(err);
  }
}

function appendMovies(data){

  movies_div.innerHTML = null;
  data.forEach(function(el){
    

    let div = document.createElement("div");

    let img = document.createElement("img");
    img.src = el.Poster;

    let title =document.createElement("p");

    title.innerText = el.Title;

    let button = document.createElement("button");
    button.innerText = "Book Now";
    button.onclick = function(){
      
      var obj = {
        Posterimg:el.Poster,
        Titlesrc:el.Title
      }

      localStorage.setItem("movie",JSON.stringify(obj));
      window.location.href="checkout.html";

    }

    div.append(img,title,button);

    movies_div.append(div);
  });
}

async function main(){

  let data = await searchMovies();

  if(data == undefined){
    return false;
  }
  appendMovies(data);
}

function debounce(func, delay){

  if(id){
    clearTimeout(id);
  }
  id= setTimeout(function(){
    func();
  },delay)
}
