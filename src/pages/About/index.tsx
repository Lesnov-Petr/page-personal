import Container from "../../Components/Container";
import { Header } from "../../Components/Header";
import { SAbout } from "./styles";

const About: React.FC<{}> = () => {
  return (
    <Container>
      <SAbout>
        <Header />О СЕБЕ
      </SAbout>
    </Container>
  );
};

export default About;
