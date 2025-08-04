import styled from "styled-components";
import { color, fontMixin } from "../../assets/globalStyles";
import { ReactComponent as LineIcon } from "../../assets/images/line.svg";
import { ReactComponent as ArrowIcon } from "../../assets/images/arrow.svg";

export const SBody = styled.div.attrs({ className: "content" })`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 80px;
  margin-bottom: 200px;
  padding: 0 10px;
`;

export const SBox = styled.div.attrs({ className: "content__box" })`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  padding: 0 20px;
`;

export const SBoxLink = styled.div.attrs({ className: "content__boxLink" })`
  display: flex;
  align-items: center;
  color: ${color.accent};
`;

export const SBoxDescription = styled.div`
  flex-direction: column;
`;

export const SBoxSubTitle = styled.div`
  display: flex;
  align-items: center;
  color: ${color.accent};
`;

export const SList = styled.ul.attrs({ className: "content__list" })`
  /* &:nth-child() */
`;

export const SItem = styled.li.attrs({ className: "content__item" })`
  display: flex;
  margin-bottom: 150px;

  &:nth-child(2n) {
    flex-direction: row-reverse;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export const STitle = styled.h3.attrs({ className: "content__title" })`
  ${fontMixin.logo};
`;

export const SSubTitle = styled.h4`
  ${fontMixin.subTitle}
  margin-left: 10px;
`;

export const SText = styled.p`
  margin-bottom: 27px;
`;

export const SLink = styled.a.attrs({ className: "content__link" })`
  margin-right: 10px;
`;

export const SImg = styled.img.attrs({ className: "content__img" })`
  width: auto;
  height: 90vh;
  object-fit: contain;
  border-radius: 8px;
`;

export const SLineIcon = styled(LineIcon)`
  path {
    fill: currentColor;
  }
  width: 10%;
  height: 2px;
`;

export const SArrowIcon = styled(ArrowIcon)`
  path {
    fill: currentColor;
  }
  width: 16px;
  height: 24px;
`;
