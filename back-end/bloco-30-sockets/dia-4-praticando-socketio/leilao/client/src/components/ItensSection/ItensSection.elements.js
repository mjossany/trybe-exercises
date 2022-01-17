import styled from "styled-components";

export const ItensSectionContainer = styled.div`
  display: flex;
  width: 100%;
  height: 85%;
  justify-content: center;
  align-items: center;
`;

export const ItemsContainer = styled.div`
  width: 80%;
  height: 60%;
  display: flex;
  justify-content: space-between;
`;

export const ItemBox = styled.div`
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  display: flex;
  width: 33%;
`;

export const ItemTitle = styled.h3`
  display: flex;
  justify-content: center;
  width: 70%;
`;

export const ItemImgWrapper = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
`;

export const ItemImg = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 80%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
`;

export const ItemPriceContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 60%;
`;

export const ItemPrice = styled.p`
  display: flex;
`;

export const ItemButtonContainer = styled.div`
  display: flex;
  width: 80%;
  justify-content: center;
`;

export const ItemButton = styled.button`
  display: flex;
`