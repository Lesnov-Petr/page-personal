import { Navigation } from "../Navigation";
import { LogoSecond } from "../Logo/Logo";
import { SFooter } from "./styles";

const Footer: React.FC<{}> = () => {
  return (
    <SFooter>
      <LogoSecond style={{ width: "250px", height: "250px" }} />
      <Navigation direction="column" margin="0 0 20px 0" />
    </SFooter>
  );
};

export default Footer;
