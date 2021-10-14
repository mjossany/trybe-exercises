use('erp');
db.vendas.aggregate(
  [
    {
      $match: {
        dataVenda: {
          $gte: ISODate("2019-01-01"),
          $lte: ISODate("2019-12-31")
        }
      }
    },
    {
      $lookup: {
        from: "clientes",
        localField: "clienteId",
        foreignField: "clienteId",
        as: "cliente_infos"
      }
    },
    {
      $unwind: "$cliente_infos"
    },
    {
      $group: {
        _id: "$cliente_infos.endereco.uf",
        mediaVendas: {
          $avg: "$valorTotal"
        },
        totalVendas: {
          $sum: 1
        }
      }
    },
    {
      $sort: {
        _id: 1
      }
    }
  ]
)