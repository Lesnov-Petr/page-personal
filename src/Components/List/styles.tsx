import styled from "styled-components";
import { device } from "../../assets/globalStyles";

export const SList = styled.ul`
  display: flex;

  @media ${device.tablet} {
    flex-direction: column;
  }
`;
