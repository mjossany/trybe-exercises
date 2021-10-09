db.movies.find(
  {
    category: {
      $size: 2
    }
  },
  {
    _id: false,
    title: true
  }
);