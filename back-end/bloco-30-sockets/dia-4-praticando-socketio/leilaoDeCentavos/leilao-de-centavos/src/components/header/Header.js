import React from 'react';
import { HeadContainer, Head, HeadTitle } from './Header.elements';

const Header = () => {
  return(
    <Head>
      <HeadContainer>
        <HeadTitle>
          Leilão de Centavos
        </HeadTitle>
      </HeadContainer>
    </Head>
  );
};

export default Header;