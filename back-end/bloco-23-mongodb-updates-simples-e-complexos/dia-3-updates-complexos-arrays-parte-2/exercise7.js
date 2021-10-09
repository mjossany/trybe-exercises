db.movies.find(
  {
    ratings: {
      $elemMatch: {
        $gte: 100,
        $lte: 105
      }
    }
  },
  {
    _id: false,
    title: true,
    ratings: true
  }
);