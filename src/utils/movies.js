export function getListMovies(size, movies) {
  let popularMovies = [];

  for(let i, l = size; i < l.length; i++ ) {
    popularMovies.push(movies[i]);
  }

  return popularMovies;
}

export function randomBanner(movies) {
  return Math.floor(Math.random() * movies.length);
}