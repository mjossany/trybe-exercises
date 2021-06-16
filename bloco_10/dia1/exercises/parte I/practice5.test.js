const { obj1, obj2, obj3 } = require('./practice5')

describe('Compara objetos', () => {
  test('Compara obj1 e obj2', () => {
    expect(obj3).not.toEqual(obj1)
  })
})