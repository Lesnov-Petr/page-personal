import Body from "../../Components/Body";
import Hero from "../../Components/Hero";
import { SMain } from "./styles";

const Main: React.FC<{}> = () => {
  return (
    <SMain>
      <Hero />
      <Body />
    </SMain>
  );
};

export default Main;
