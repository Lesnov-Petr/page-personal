import styled from "styled-components";
import { color, fontMixin } from "../../assets/globalStyles";
import bgImg from "../../assets/images/bg-image.jpg";
import { ReactComponent as LineIcon } from "../../assets/images/line.svg";
import { ReactComponent as Arrow } from "../../assets/images/arrow.svg";

export const SHero = styled.div.attrs({ className: "hero" })`
  display: flex;
  flex-direction: column;
  height: 90vh;
  color: ${color.textHero};
  background-image: linear-gradient(
      0deg,
      rgba(11, 29, 38, 1) 0%,
      rgba(87, 199, 133, 0.1) 50%,
      rgba(237, 221, 83, 0.1) 100%
    ),
    url(${bgImg});
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  padding: 0 80px;
`;

export const SBox = styled.div.attrs({ className: "hero__box" })`
  display: flex;
  justify-content: space-between;
  padding-left: 110px;
`;

export const SBoxTitle = styled.div.attrs({ className: "hero__titleBox" })`
  display: flex;
  flex-direction: column;
`;

export const SHeroTitle = styled.h1.attrs({ className: "hero__title" })`
  ${fontMixin.logo}
`;

export const SBoxSubTitle = styled.div`
  display: flex;
  align-items: center;
  color: ${color.accent};
`;

export const SSubTitle = styled.h4.attrs({ className: "hero__subTitle" })`
  ${fontMixin.subTitle};
  margin-left: 20px;
`;

export const SLineIcon = styled(LineIcon).attrs({
  className: "hero__iconLine",
})`
  path: {
    fill: currentColor;
  }
  width: 70px;
  height: 2px;
`;

export const SButtonScroll = styled.button.attrs({
  className: "hero__btnScroll",
})`
  display: flex;
  align-items: center;
  color: ${color.white};
`;

export const SArrowIcon = styled(Arrow).attrs({ className: "hero__iconArrow" })`
  path: {
    fill: currentColor;
  }
  width: 16px;
  height: 24px;
  transform: rotate(90deg);
`;
