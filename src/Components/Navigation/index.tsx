import { List } from "../List/List";
import { NavItem } from "../../interfaces";
import { SNavigation } from "./styles";

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
  const defaultItems: NavItem[] = [
    { name: "Главная", link: "/" },
    { name: "О себе", link: "/about" },
    { name: "Хобби", link: "/hobby" },
    { name: "Резюме", link: "resume" },
  ];
  return (
    <SNavigation $direction={direction}>
      {
        <List
          direction={direction}
          margin={margin}
          list={items || defaultItems}
        />
      }
    </SNavigation>
  );
};
