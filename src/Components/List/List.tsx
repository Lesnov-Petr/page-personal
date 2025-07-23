import { SList } from "./styles";
import { Item } from "../Navigation/Item";
import { NavItem } from "../../interfaces";

interface ListProps {
  list: NavItem[];
  margin?: string | undefined;
}

export const List: React.FC<ListProps> = ({ list, margin }) => {
  return (
    <SList>
      {list.map((item) => (
        <Item key={item.name} item={item} margin={margin} />
      ))}
    </SList>
  );
};
