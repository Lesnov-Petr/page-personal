import styled from "styled-components";
import { fontMixin, color, cubic } from "../../assets/globalStyles";

export const SNavigation = styled.div.attrs({ className: "navigation" })<{
  $direction?: "row" | "column";
}>`
  display: flex;
  flex-direction: ${({ $direction }) => $direction || "row"};
`;

export const SItem = styled.li.attrs({ className: "navigation__item" })<{
  $margin: string | undefined;
}>`
  ${fontMixin.standart}
  margin: ${({ $margin }) => $margin};

  &:first-child {
    margin-left: 0;
  }
`;

export const SLink = styled.a.attrs({ className: "navigation__link" })<{}>`
  transition: color 250ms ${cubic};

  &:hover,
  &:focus {
    color: ${color.accent};
  }
`;
