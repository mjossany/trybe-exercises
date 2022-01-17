import React, { useContext } from 'react';
import { ItemsContainer, ItemImg, ItemImgWrapper, ItensSectionContainer, ItemBox, ItemTitle, ItemPriceContainer, ItemPrice, ItemButtonContainer, ItemButton } from './ItensSection.elements';
import img from '../../images/celular.jpeg';
import Context from '../../context/Context';


const ItensSection = () => {
  const {cellphonePrice, tvPrice, notebookPrice, cellphoneDisabled, tvDisabled, notebookDisabled, cellphoneButton, tvButton, notebookButton, increaseCellphonePrice } = useContext(Context);


  return(
    <ItensSectionContainer>
      <ItemsContainer>
        <ItemBox>
          <ItemTitle>
            Celular
          </ItemTitle>
          <ItemImgWrapper>
            <ItemImg src={img} alt={'alt'}/>
          </ItemImgWrapper>
          <ItemPriceContainer>
            <ItemPrice>
              { `R$ ${cellphonePrice}` }
            </ItemPrice>
          </ItemPriceContainer>
          <ItemButtonContainer>
            <ItemButton  onClick={ increaseCellphonePrice }disabled={cellphoneDisabled}>
              { cellphoneButton }
            </ItemButton>
          </ItemButtonContainer>
        </ItemBox>
        <ItemBox>
          <ItemTitle>
            Tv
          </ItemTitle>
          <ItemImgWrapper>
            <ItemImg src={img} alt={'alt'}/>
          </ItemImgWrapper>
          <ItemPriceContainer>
            <ItemPrice>
              { `R$ ${tvPrice}` }
            </ItemPrice>
          </ItemPriceContainer>
          <ItemButtonContainer>
            <ItemButton disabled={tvDisabled}>
              { tvButton }
            </ItemButton>
          </ItemButtonContainer>
        </ItemBox>
        <ItemBox>
          <ItemTitle>
            Notebook
          </ItemTitle>
          <ItemImgWrapper>
            <ItemImg src={img} alt={'alt'}/>
          </ItemImgWrapper>
          <ItemPriceContainer>
            <ItemPrice>
              { `R$ ${notebookPrice}` }
            </ItemPrice>
          </ItemPriceContainer>
          <ItemButtonContainer>
            <ItemButton disabled={notebookDisabled}>
              { notebookButton }
            </ItemButton>
          </ItemButtonContainer>
        </ItemBox>
      </ItemsContainer>
    </ItensSectionContainer>
  );
};

export default ItensSection;