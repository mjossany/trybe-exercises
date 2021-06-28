import React from 'react';

class DadosConsolidados extends React.Component {
  render() {
    const { estado } = this.props;
    return (
      <section className='dados-consolidados'>
        <p>Nome: { estado.nome }</p>
        <p>Email: { estado.email }</p>
        <p>Cpf: { estado.cidade }</p>
        <p>Endere: { estado.endereco }</p>
        <p>Cidade: { estado.cidade }</p>
        <p>Estado: { estado.estado }</p>
        <p>Moradia: { estado.moradia }</p>
        <p>Resumo: { estado.resumo }</p>
        <p>Cargo: { estado.cargo }</p>
        <p>Descrição: { estado.descricao }</p>
      </section>
    )
  }
}

export default DadosConsolidados;