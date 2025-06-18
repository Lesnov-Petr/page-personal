import { SItem, SLink } from "./styles";
import { NavItem } from "../../interfaces";

interface ItemProps {
  item: NavItem;
  margin: string | undefined;
}

export const Item: React.FC<ItemProps> = ({ item, margin }) => {
  return (
    <SItem $margin={margin}>
      <SLink href={item.link}>{item.name}</SLink>
    </SItem>
  );
};
