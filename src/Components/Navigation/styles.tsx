import styled from "styled-components";
import { fontMixin, color, cubic, device } from "../../assets/globalStyles";

export const SNavigation = styled.div.attrs({ className: "navigation" })<{}>`
  display: flex;

  @media ${device.tablet} {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: ${color.bg};
    z-index: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: translateX(100%);
    transition: color 250ms ${cubic};
    padding: 20px;

    color: ${color.text};

    &.on {
      transform: translateX(0);
    }
  }
`;

export const SItem = styled.li.attrs({ className: "navigation__item" })<{}>`
  ${fontMixin.standart}
  margin-right: 40px;

  &:first-child {
    margin-left: 0;
  }

  @media ${device.tablet} {
    margin: 15px 0;
  }
`;

export const SLink = styled.a.attrs({ className: "navigation__link" })<{}>`
  transition: color 250ms ${cubic};

  &:hover,
  &:focus {
    color: ${color.accent};
  }

  @media ${device.tablet} {
    font-size: 24px;
  }
`;

// Добавляем стили для бургер-иконки
export const BurgerButton = styled.button.attrs({ className: "burger-button" })`
  display: none;
  position: relative;
  top: 20px;
  right: 20px;
  width: 30px;
  height: 24px;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 2;

  @media ${device.tablet} {
    display: block;
  }

  &::before,
  &::after {
    content: "";
    left: 0;
    position: absolute;
    display: block;
    width: 100%;
    height: 4px;
    border-radius: 10px;
    background: ${color.text};
  }

  &::before {
    top: 0;
    box-shadow: 0 10px 0 ${color.text};
    /* transition: box-shadow 0.3s 0.15s, top 0.3s 0.15s, transform 0.3s; */
  }
  &::after {
    bottom: 0;
    transition: bottom 0.3s 0.15s, transform 0.3s;
  }

  &.on::before {
    top: 10px;
    transform: rotate(45deg);
    box-shadow: 0 6px 0 rgba(0, 0, 0, 0);
    transition: box-shadow 0.15s, top 0.3s, transform 0.3s 0.15s;
  }

  &.on::after {
    bottom: 10px;
    transform: rotate(-45deg);
    transition: bottom 0.3s, transform 0.3s 0.15s;
  }

  &:hover::before,
  &:hover::after {
    background: ${color.accent};
    transition: background 0.3s, transform 0.3s 0.15s;
  }
`;
