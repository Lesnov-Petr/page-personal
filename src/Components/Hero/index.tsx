import { Header } from "../Header";
import Social from "../Social";
import {
  SHero,
  SBox,
  SHeroTitle,
  SBoxTitle,
  SBoxSubTitle,
  SSubTitle,
  SLineIcon,
  SArrowIcon,
  SButtonScroll,
} from "./styles";

export default function Hero() {
  const handlerScroll = () => {
    const topOffset = 50;
    const element = document.getElementById("content");

    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition - topOffset;
      window.scroll({
        top: offsetPosition,
        behavior: "smooth",
      });
    } else {
      console.error("Element with id 'content' not found");
    }
  };
  return (
    <SHero>
      <Header />
      <SBox>
        <Social />

        <SBoxTitle>
          <SBoxSubTitle>
            <SLineIcon />
            <SSubTitle>
              Мы находимся здесь, чтобы внести свой вклад в этот мир. Иначе
              зачем мы здесь?
            </SSubTitle>
          </SBoxSubTitle>

          <SHeroTitle>Быть Готовым к Вершинам и Не Только</SHeroTitle>

          <SButtonScroll onClick={handlerScroll}>
            <SArrowIcon />
            <SSubTitle>Читать ниже</SSubTitle>
          </SButtonScroll>
        </SBoxTitle>
      </SBox>
    </SHero>
  );
}
