// sorting.js

function sortByRecentYear(movies) {
  return movies.sort((a, b) => b.year - a.year);
}

function ignorePrefixes(title) {
  return title.replace(/^(A|An|The)\s+/i, '');
}

function sortByTitleIgnoringPrefixes(movies) {
  return movies.sort((a, b) => {
    const titleA = ignorePrefixes(a.title);
    const titleB = ignorePrefixes(b.title);
    return titleA.localeCompare(titleB);
  });
}

// Example usage and output
const sampleMovies = [
  { title: 'An Adventure', year: 2018 },
  { title: 'The Movie', year: 2020 },
  { title: 'A Film', year: 2015 }
];

console.log('Original movies:', sampleMovies);

const sortedByYear = sortByRecentYear(sampleMovies.slice());
console.log('Movies sorted by year:', sortedByYear);

const sortedByTitle = sortByTitleIgnoringPrefixes(sampleMovies.slice());
console.log('Movies sorted by title (ignoring prefixes):', sortedByTitle);

// Export the functions (optional, for usage in other files)
module.exports = { sortByRecentYear, sortByTitleIgnoringPrefixes };
