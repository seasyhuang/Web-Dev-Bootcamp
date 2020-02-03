var movies = [
  {
    name: "movie1",
    hasWatched: true,
    rating: 5,
  },
  {
    name: "movie2",
    hasWatched: false,
    rating: 3,
  },
  {
    name: "movie3",
    hasWatched: true,
    rating: 1,
  },
]

function printMovies(array){
  // array.forEach(function(movie){    //  other forEach notation 
  array.forEach((movie) => {
    var seen;
    if (movie.hasWatched) {
      seen = "You have watched ";
    }
    else {
      seen = "You have not seen ";
    }
    title = "\"" + movie.name + "\"";
    console.log(seen + title + " - " + movie.rating + " stars");
  });

}
