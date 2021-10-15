use('erp');
db.vendas.aggregate(
  [
    {
      $match: {
        $and: [
          {
            dataVenda: {
            $gte: ISODate("2019-01-01"),
            $lte: ISODate("2019-12-31")
            }
          },
          {
            status: {
              $in: ["ENTREGUE", "EM SEPARACAO"]
            }
          }
        ]
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
      $limit: 10
    }
  ]
)