use('class');
db.movies.find(
  {
    category: {
      $all: ["adventure"]
    },
    ratings: {
      $elemMatch: {
        $gt: 103
      }
    }
  },
  {
    _id: false,
    title: true,
    ratings: true,
    category: true
  }
);