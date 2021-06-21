const { fecthDogApi } = require('./dogApi');
const { expect } = require('@jest/globals');
const fetch = require('node-fetch');

// jest.mock('node-fetch');

test('Testa fetchDogApi', async () => {
  expect.assertions(1);
  // fetch.mockImplementation( async () => {

  // })
  const final = await fecthDogApi();

  expext(final).toEqual('success')
})