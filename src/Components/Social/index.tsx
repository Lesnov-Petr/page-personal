import { SSocial, SList, SItem, SLink, SText } from "./styles";
import { ReactComponent as Telegram } from "../../assets/images/telegram.svg";
import { ReactComponent as Whatsapp } from "../../assets/images/whatsapp.svg";
import { ReactComponent as Github } from "../../assets/images/github.svg";
import { ReactComponent as VK } from "../../assets/images/vk.svg";
import { ReactComponent as Instagram } from "../../assets/images/instagram.svg";

export default function Social() {
  const socials = [
    {
      id: "telegram",
      Icon: Telegram,
      appUrl: "tg://resolve?domain=LesnovPetr",
      webUrl: "https://t.me/LesnovPetr",
    },
    {
      id: "whatsapp",
      Icon: Whatsapp,
      appUrl: "whatsapp://send?phone=79175220003",
      webUrl: "https://web.whatsapp.com/send?phone=79175220003",
    },
    {
      id: "github",
      Icon: Github,
      appUrl: "https://github.com/Lesnov-Petr",
      webUrl: "https://github.com/Lesnov-Petr",
    },
    {
      id: "vk",
      Icon: VK,
      appUrl: "vk://vk.com/petkooo",
      webUrl: "https://vk.com/petkooo",
    },
    {
      id: "instagram",
      Icon: Instagram,
      appUrl: "instagram://user?username=petrlegenda",
      webUrl: "https://instagram.com/petrlegenda",
    },
  ];

  const handleClick = (e: React.MouseEvent, webUrl: string) => {
    e.preventDefault();
    window.location.href = webUrl;
  };
  return (
    <SSocial>
      <SText>Подписывайся</SText>
      <SList>
        {socials.map((item) => (
          <SItem key={item.id}>
            <SLink
              href={item.appUrl}
              onClick={(e) => handleClick(e, item.webUrl)}
              target="_blank"
              rel="noopener noreferrer"
            >
              {<item.Icon />}
            </SLink>
          </SItem>
        ))}
      </SList>
    </SSocial>
  );
}
