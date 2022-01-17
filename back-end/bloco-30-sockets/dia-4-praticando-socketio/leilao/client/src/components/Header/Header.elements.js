import styled from "styled-components";
import { Container } from "../../globalStyles";

export const Head = styled.header`
  background: #101522;
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const HeadContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;

  ${Container};
`;

export const HeadTitle = styled.h1`
  color: white;
`;
