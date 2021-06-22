import React from 'react';

const List = (props) => {
  console.log(props)
  return (
    <li>{props.itens}</li>
  )
}

export default List;