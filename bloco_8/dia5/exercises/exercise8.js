// 8 - Escreva uma função greet que, dado o nome de uma pessoa, retorna uma mensagem de cumprimento:

const assert = require('assert');

// escreva greet abaixo
const greet = (name, salutation = 'Hi') => `${salutation} ${name}`;

// console.log(greet('Jossany', 'Bom dia'));

assert.strictEqual(greet('John'), 'Hi John');
assert.strictEqual(greet('John', 'Good morning'), 'Good morning John');
assert.strictEqual(greet('Isabela', 'Oi'), 'Oi Isabela');