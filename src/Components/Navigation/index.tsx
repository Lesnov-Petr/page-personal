import { useState } from "react";
import { List } from "../List/List";
import { NavItem } from "../../interfaces";
import { BurgerButton, SNavigation } from "./styles";

interface NavigationProps {
  items?: NavItem[];
  direction?: "row" | "column" | undefined;
  margin?: string | undefined;
}

export const Navigation: React.FC<NavigationProps> = ({
  items,
  direction,
  margin,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const defaultItems: NavItem[] = [
    { name: "Главная", link: "/" },
    { name: "О себе", link: "/about" },
    { name: "Хобби", link: "/hobby" },
    { name: "Резюме", link: "resume" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <BurgerButton
        onClick={toggleMenu}
        className={isMenuOpen ? "on" : ""}
      ></BurgerButton>

      <SNavigation $direction={direction} className={isMenuOpen ? "on" : ""}>
        <List
          direction={"column"}
          margin={margin}
          list={items || defaultItems}
        />
      </SNavigation>
    </>
  );
};
