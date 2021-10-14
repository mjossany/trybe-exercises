db.clientes.aggregate(
  [
    {
      $lookup: {
        from: "vendas",
        localField: "clienteId",
        foreignField: "clienteId",
        as: "compras_info"
      }
    },
    {
      $unwind: "$compras_info"
    },
    {
      $match: {
        "compras_info.dataVenda": {
          $gte: ISODate("2020-01-01")
        }
      }
    },
    {
      $group: {
        _id: "$endereco.uf",
        totalVendas: {
          $sum: 1
        }
      }
    },
    {
      $project: {
        _id: 0,
        totalVendas: "$totalVendas",
        uf: "$_id"
      }
    },
    {
      $sort: {
        totalVendas: -1
      }
    },
    {
      $limit: 3
    }
  ]
)