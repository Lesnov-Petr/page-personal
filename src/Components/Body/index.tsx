import { SBody, SList, SItem, STitle, SSubTitle, SText, SLink } from "./styles";
import { SBox, SBoxDescription, SImg, SBoxSubTitle, SLineIcon } from "./styles";
import { SBoxLink, SArrowIcon } from "./styles";
import myTravel from "../../assets/images/secondPhoto.JPG";

export default function Body() {
  const arrContent = [
    {
      id: 1,
      title: "Мои мечты?",
      subTitle: "Жизнь - это движение",
      text: "Путишествие во круг света - это согревает мою кровь",
      link: "/travel",
      img: myTravel,
    },
    {
      id: 2,
      title: "Мои мечты?",
      subTitle: "жизнь - это движение",
      text: "Путишествие во круг света - это согревает мою кровь",
      link: "/travel",
      img: myTravel,
      alt: "travel",
    },
  ];
  return (
    <SBody id="content">
      <SList>
        {arrContent.map((item) => (
          <SItem key={item.id}>
            <SBox>
              <SBoxDescription>
                <SBoxSubTitle>
                  <SLineIcon />
                  <SSubTitle>{item.subTitle}</SSubTitle>
                </SBoxSubTitle>
                <STitle>{item.title}</STitle>
                <SText>{item.text}</SText>
                <SBoxLink>
                  <SLink href={item.link}>Мои путешествия</SLink>
                  <SArrowIcon />
                </SBoxLink>
              </SBoxDescription>
            </SBox>

            <SImg src={item.img} alt={item.alt} />
          </SItem>
        ))}
      </SList>
    </SBody>
  );
}
