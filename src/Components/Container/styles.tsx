import styled from "styled-components";
import { device } from "../../assets/globalStyles";

export const SContainer = styled.div.attrs({ className: "container" })`
  display: flex;

  @media ${device.tablet} {
    padding: 0 40px;
  }

  @media ${device.desktop} {
    padding: 0 80px;
  }
`;
