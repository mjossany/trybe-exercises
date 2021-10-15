use('erp');
db.vendas.aggregate(
  [
    {
      $unwind: "$itens"
    },
    {
      $match: {
        "itens.nome": "QUEIJO PRATO"
      }
    },
    {
      $group: {
        _id: "$clienteId",
        totalConsumido: {
          $sum: "$itens.quantidade"
        }
      }
    },
    {
      $sort: {
        totalConsumido: -1
      }
    },
    {
      $limit: 1
    },
    {
      $lookup: {
        from: "clientes",
        let: {
          clienteId: "$_id"
        },
        pipeline: [
          {
            $match: {
              $expr: {
                $eq: ["$$clienteId", "$clienteId"]
              }
            }
          }
        ],
        as: "infosCliente"
      }
    },
    {
      $unwind: "$infosCliente"
    },
    {
      $project: {
        nomeCliente: "$infosCliente.nome",
        uf: "$infosCliente.endereco.uf",
        totalConsumido: "$totalConsumido",
        _id: 0
      }
    }
  ]
)