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
      $match: {
        idade: {
          $gte: 18,
          $lte: 25
        }
      }
    },
    {
      $count: "totalClientes18-25"
    }
  ]
)