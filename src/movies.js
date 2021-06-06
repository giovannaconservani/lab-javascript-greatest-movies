// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const directorsNewArr = movies.map(function (movies) 
  {return movies.director})
  console.log (directorsNewArr); 
}
  
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  if (movies === '' || movies.director !== 'Steven Spielberg') {return 0};
  let count = 0
  const stevenSpielbergMovies = movies.filter(function(movies) { if (movies.director === 'Steven Spielberg' && movies.genre.includes('Drama')) {
  count ++} 
  })
  
  return count;
  };
  
// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(movies) {
  const scoreAvg = movies.score.reduce(function(accumulator,currentNumber, index) {
  if (index === movies.length - 1) {
  accumulator += currentNumber;
  return accumulator/movies.length
  }
  return accumulator + currentNumber;
  })
  console.log (scoreAvg);
  }

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  if (movies.genre.includes('Drama')) {
    scoresAverage(movies)
      }
  }

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const orderedMovies = 
  movies.year.sort((a,b) => {
  return a-b
  })
  const duplicates = [];
  for (let i=0; i<movies.length; i++) {
  if (movies[i].year === movies[i+1].year)
  { duplicates.push(movies[i]);
  }}

  const duplicatesSorted =
  duplicates.title.sort((a,b) => {
    return a-b});

  orderedMovies.push(duplicatesSorted);
  console.log (orderedMovies)
  }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const moviesTwenty = 
  movies.map(function(movies) {for (let i=0, i<19; i++) {
  movies.title.sort((a,b) => { retun a-b})}
  })
  console.log (moviesTwenty);
  }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
