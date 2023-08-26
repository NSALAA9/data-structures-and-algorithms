// sorting.test.js
const { sortByRecentYear, sortByTitleIgnoringPrefixes } = require('./sorting'); // Adjust path accordingly

describe('sortByRecentYear function', () => {
  test('Sorts movies by most recent year first', () => {
    const movies = [
      { title: 'Movie A', year: 2020 },
      { title: 'Movie B', year: 2018 },
      // ... other movie objects
    ];

    const sortedMovies = sortByRecentYear(movies);

    expect(sortedMovies[0].year).toBe(2020); // Most recent year
    expect(sortedMovies[1].year).toBe(2018);
  });

  // ... other test cases for sortByRecentYear
});

describe('sortByTitleIgnoringPrefixes function', () => {
  test('Sorts movies alphabetically ignoring prefixes', () => {
    const movies = [
      { title: 'The Movie', year: 2020 },
      { title: 'An Adventure', year: 2018 },
      // ... other movie objects
    ];

    const sortedMovies = sortByTitleIgnoringPrefixes(movies);

    expect(sortedMovies[0].title).toBe('An Adventure'); // 'An Adventure' comes before 'The Movie' alphabetically
    expect(sortedMovies[1].title).toBe('The Movie');
  });

  // ... other test cases for sortByTitleIgnoringPrefixes
});
