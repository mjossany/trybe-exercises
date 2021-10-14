use('erp');
db.vendas.aggregate(
  [
    {
      $match: {
        status: {
          $in: ["ENTREGUE", "EM SEPARACAO"]
        }
      }
    },
    {
      $group: {
        _id: "$clienteId",
        total: {
          $sum: "$valorTotal"
        }
      }
    },
    {
      $sort: {
        total: -1
      }
    },
    {
      $limit: 5
    }
  ]
)