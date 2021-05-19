const array = ['js', 'python', 'css', 'html', 'react'];
const orderedArray = array.sort();
const stringOrderedArray = orderedArray.join(';\n');

const transformaString = parametro => {
  let result = `Tryber ${parametro} aqui! Minhas principais habilidades são:
${stringOrderedArray};`;
  console.log(result);
}
transformaString('Bebeto');




