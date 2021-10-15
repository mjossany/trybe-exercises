db.clientes.aggregate(
  [
    {
      $addFields: {
        idade: {
          $floor: {
            $divide: [
              {
                $subtract: [
                  new Date(),
                  "$dataNascimento"
                ]
              },
              86400000 * 365
            ]
          }
        }
      }
    },
    {
      $lookup: {
        from: "vendas",
        let: {
          cliente: "$clienteId"
        },
        pipeline: [
          {
            $match: {
              $expr: {
                $eq:
                  ["$$cliente", "$clienteId"]
              }
            }
          }
        ],
        as: "compras"
      }
    },
    {
      $match: {
        "compras.dataVenda": {
          $gte: ISODate("2019-06-01"),
          $lte: ISODate("2020-03-31")
        }
      }
    }
  ]
).itcount()