// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require('./data');

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const allDirectorsNames = movies.map((movie) => {
    return movie.director;
  });
  return allDirectorsNames;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const howManyMoviesGenre = movies.filter((movie, index, originalArray) => {
    if (
      movie.genre.includes('Drama') &&
      movie.director.includes('Steven Spielberg')
    ) {
      return true;
    } else {
      return false;
    }
  });
  return howManyMoviesGenre.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  const sumOfAllScores = movies.reduce((sumOfAllScores, movie) => {
    return sumOfAllScores + movie.score;
  }, 0);
  const averageScore = sumOfAllScores / movies.length;
  if (!movies.length){
    return 0;
  } else {
  return Number(averageScore.toFixed(2));
}}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const allDramaMovies = movies.filter((movie, index, originalArray) => {
    if (movie.genre.includes('Drama')) {
        return true;}
      })
  return scoresAverage(allDramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
let sortedArray = movies.sort(function (a,b) { 
  if (a.year !== b.year) {
  return a.year - b.year;
} else {
  return a.title.localeCompare(b.title);
}
}); 
  return [...sortedArray];
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
let sortedArray = movies.sort((a,b) => a.title.localeCompare(b.title));
const newSortedArray = sortedArray.slice(0,20);
return newSortedArray.map(a=>a.title);
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
    bestYearAvg
  };
}
