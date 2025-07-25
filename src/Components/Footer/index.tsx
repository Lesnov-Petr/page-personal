import { LogoSecond } from "../Logo/Logo";
import { SFooter } from "./styles";

const Footer: React.FC<{}> = () => {
  return (
    <SFooter>
      <LogoSecond style={{ width: "30%", height: "20%" }} />
    </SFooter>
  );
};

export default Footer;
