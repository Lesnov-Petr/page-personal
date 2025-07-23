import { Navigation } from "../Navigation";
import { LogoFirst } from "../Logo/Logo";
import { SHeader } from "./styles";

export const Header: React.FC<{}> = () => {
  return (
    <SHeader>
      <LogoFirst style={{ width: "100px", height: "100px" }} />
      <Navigation />
    </SHeader>
  );
};
