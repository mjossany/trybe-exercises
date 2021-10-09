db.movies.find(
  {
    $or: [
      {
        category: {
          $all: ["sci-fi"]
        }
      },
      {
        ratings: {
          $elemMatch: {
            $gt: 199
          }
        }
      }
    ]
  },
  {
    _id: false,
    title: true,
    ratings: true,
    category: true
  }
);