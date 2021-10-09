db.movies.find(
  {
    ratings: {
      $size: 4
    }
  },
  {
    _id: false,
    title: true
  }
);