import styled from "styled-components";
import { color, cubic, fontMixin } from "../../assets/globalStyles";

export const SSocial = styled.div.attrs({ className: "social" })`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px 0;
`;

export const SText = styled.p`
  ${fontMixin.title};
  color: ${color.accent};
  writing-mode: vertical-rl;
  margin-bottom: 25px;
`;

export const SList = styled.ul`
  display: inherit;
  flex-direction: column;
`;

export const SItem = styled.li.attrs({ className: "social__item" })`
  margin-top: 5px;

  &:first-child {
    margin-top: 0;
  }
`;

export const SLink = styled.a.attrs({ className: "social__link" })`
  display: flex;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  transition: border 250ms ${cubic};

  &:hover {
    border: 2px solid ${color.text};
  }
`;
