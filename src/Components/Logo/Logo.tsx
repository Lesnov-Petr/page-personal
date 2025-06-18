import logoFirst from "../../assets/images/logoFirst.svg";
import logoSecond from "../../assets/images/logoSecond.svg";
import { SLogo, SLogoImage } from "./styles";

interface LogoProps {
  style?: React.CSSProperties;
}

export const LogoFirst: React.FC<LogoProps> = ({ style }) => {
  return (
    <SLogo>
      <SLogoImage src={logoFirst} alt="Logo" style={style} />
    </SLogo>
  );
};

export const LogoSecond: React.FC<LogoProps> = ({ style }) => {
  return (
    <SLogo>
      <SLogoImage src={logoSecond} alt="Logo" style={style} />
    </SLogo>
  );
};
