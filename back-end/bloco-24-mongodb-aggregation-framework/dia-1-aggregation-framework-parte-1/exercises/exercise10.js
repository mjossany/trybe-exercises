db.vendas.aggregate(
  [
    {
      $group: {
        _id: "$clienteId",
        purchases: {
          $sum: 1
        }
      }
    },
    {
      $match: {
        purchases: {
          $gt: 5
        }
      }
    },
    {
      $count: "clientes"
    }
  ]
)