db.vendas.aggregate(
  [
    {
      $match: {
        $and: [
          {
            dataVenda: {
              $gte: ISODate("2020-03-01"),
              $lte: ISODate("2020-03-31")
            }
          },
          {
            status: "EM SEPARACAO"
          }
        ]
      }
    },
    {
      $addFields: {
        dataEntregaPrevista: {
          $add: ["$dataVenda", {
            $multiply: [86400000 * 3]
          }]
        }
      }
    },
    {
      $project: {
        _id: 0,
        clienteId: 1,
        dataVenda: 1,
        dataEntregaPrevista: 1
      }
    },
    {
      $sort: {
        dataEntregaPrevista: 1
      }
    },
    {
      $group: {
        _id: null,
        maiorDataEntrega: {
          $max: "$dataEntregaPrevista"
        },
        menorDataEntrega: {
          $min: "$dataEntregaPrevista"
        }
      }
    },
    {
      $project: {
        _id: 0,
        diferencaEmDias: {
          $abs: {
            $divide: [
              {
                $subtract: ["$maiorDataEntrega", "$menorDataEntrega"]
              },
              86400000
            ]
          }
        }
      }
    }
  ]
)