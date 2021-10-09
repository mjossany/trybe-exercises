db.movies.find(
  {
    category: {
      $all: [
        "adventure", "action"
      ]
    }
  }
);