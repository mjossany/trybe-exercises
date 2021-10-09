db.movies.find(
  {
    ratings: {
      $elemMatch: {
        $gt: 103
      }
    }
  },
  {
    _id: false,
    title: true,
    ratings: true
  }
);