import { useEffect, useState } from "react";
import { List } from "../List/List";
import { NavItem } from "../../interfaces";
import { BurgerButton, SNavigation } from "./styles";

interface NavigationProps {
  items?: NavItem[];
}

export const Navigation: React.FC<NavigationProps> = ({ items }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const defaultItems: NavItem[] = [
    { name: "Главная", link: "/" },
    { name: "О себе", link: "/about" },
    { name: "Хобби", link: "/hobby" },
    { name: "Резюме", link: "resume" },
  ];

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Очистка при размонтировании
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <BurgerButton
        onClick={toggleMenu}
        className={isMenuOpen ? "on" : ""}
      ></BurgerButton>

      <SNavigation className={isMenuOpen ? "on" : ""}>
        <List list={items || defaultItems} />
      </SNavigation>
    </>
  );
};
