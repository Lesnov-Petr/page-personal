import styled from "styled-components";
import { device } from "../../assets/globalStyles";

export const SList = styled.ul`
  display: flex;

  @media ${device.tabletMax} {
    flex-direction: column;
  }
`;
