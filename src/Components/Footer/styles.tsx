import styled from "styled-components";
import { color } from "../../assets/globalStyles";

export const SFooter = styled.div.attrs({ className: "footer" })`
  display: flex;
  justify-content: space-between;
  margin: auto;
  align-items: center;
  width: 50%;
  color: ${color.text};
`;
