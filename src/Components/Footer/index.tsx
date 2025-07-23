import { LogoSecond } from "../Logo/Logo";
import { SFooter } from "./styles";

const Footer: React.FC<{}> = () => {
  return (
    <SFooter>
      <LogoSecond style={{ width: "250px", height: "250px" }} />
    </SFooter>
  );
};

export default Footer;
