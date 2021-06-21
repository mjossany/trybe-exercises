const { test, describe } = require('@jest/globals')

const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
  };
  
  const findUserById = (id) => {
    return new Promise((resolve, reject) => {
        if (users[id]) {
          return resolve(users[id]);
        };
  
        return reject({ error: 'User with ' + id + ' not found.' });
    });
  };
  
  const getUserName = (userID) => {
    return findUserById(userID).then(user => user.name);
  };

  describe('Quando o id do usuário existe', () => {
    test('Retorne a lista de usuários', () => {
      expect.assertions(1);
      return getUserName('Mark').then(listUsers => {
        expect(listUsers[0].name).toEqual('Mark');
      });
    });
  });