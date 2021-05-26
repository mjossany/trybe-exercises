// Parte I - Game Actions Simulator
// Nestes exercícios você irá implementar HOFs que simulam um turno de batalha em um jogo. Você irá criar funções que calculam dano, atualizam status, e ao final, retornam os resultados da rodada.
// Para os próximos exercícios copie o código abaixo.

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// 1 - Crie uma função que retorna o dano do dragão.
// O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).

const dragonDamage = () => {
  return Math.round(Math.random() * ((dragon.strength) - 15) + 15);
};

// // 2 - Crie uma função que retorna o dano causado pelo warrior .
// O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).

const warriorDamage = () => {
  return Math.round(Math.random() * ((warrior.strength * warrior.weaponDmg) - warrior.strength) + warrior.strength);
};

// 3 - Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
// O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
// A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o valor de dano recebe uma mensagem (Ex: "Não possui mana suficiente") e a mana gasta é 0.

const mageDamage = () => {
  const damage = Math.round(Math.random() * ((mage.intelligence * 2) - mage.intelligence) + mage.intelligence);

  const objDamageMana = {
    damage: 0,
    mana: 0,
  };

  if (mage.mana < 15) {
    objDamageMana.damage = 'Não possui mana suficiente';
    objDamageMana.mana = 0;
  } else {
    objDamageMana.damage = damage;
    objDamageMana.mana = 15;
  }

  return objDamageMana
};

// Parte II
// Agora que você já possui a implementação das funções relativas aos três exercícios anteriores, passe-as como parâmetro para outras funções que irão compor um objeto gameActions . O objeto será composto por ações do jogo e cada ação é por denifição uma HOF , pois neste caso, são funções que recebem como parâmetro outra função.
// Copie o código abaixo e inicie sua implementação:

const gameActions = {
  // Crie as HOFs neste objeto.
  warriorTurn: (callback) => {
    const damage = callback();
    warrior.damage = damage;
    dragon.healthPoints -= damage;
  },

  mageTurn: (callback) => {
  const damage = callback();
  mage.damage = damage.damage;
  mage.mana -= damage.mana;
  dragon.healthPoints -= damage.damage;
  },

  dragonTurn: (callback) => {
    const damage = callback();
    dragon.damage = damage;
    mage.healthPoints -= damage;
    warrior.healthPoints -= damage;
  },

  roundEnd: () => {
    gameActions.warriorTurn(warriorDamage);
    gameActions.mageTurn(mageDamage);
    gameActions.dragonTurn(dragonDamage);

    return battleMembers;
  }
};

console.log(gameActions.roundEnd());
console.log(gameActions.roundEnd());
console.log(gameActions.roundEnd());
console.log(gameActions.roundEnd());
console.log(gameActions.roundEnd());

