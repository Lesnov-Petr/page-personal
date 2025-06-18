import { SList } from "./styles";
import { Item } from "../Navigation/Item";
import { NavItem } from "../../interfaces";

interface ListProps {
  list: NavItem[];
  direction?: "row" | "column" | undefined;
  margin?: string | undefined;
}

export const List: React.FC<ListProps> = ({ list, direction, margin }) => {
  return (
    <SList $direction={direction}>
      {list.map((item) => (
        <Item key={item.name} item={item} margin={margin} />
      ))}
    </SList>
  );
};
