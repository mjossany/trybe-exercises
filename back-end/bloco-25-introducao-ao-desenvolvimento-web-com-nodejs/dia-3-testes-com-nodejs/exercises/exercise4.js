const fs = require('fs');

const escreveArquivo = (nomeDoArquivo, conteudoDoArquivo) => {
  try {
    fs.writeFileSync(`${nomeDoArquivo}.txt`, conteudoDoArquivo);
    return 'ok';
  } catch(err) {
    return null;
  }
}

module.exports = escreveArquivo;