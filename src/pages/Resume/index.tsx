import { SResume } from "./styles";
import { Header } from "../../Components/Header";
import Container from "../../Components/Container";

const Resume: React.FC<{}> = () => {
  return (
    <Container>
      <SResume>
        <Header />
        РЕЗЮМЕ
      </SResume>
    </Container>
  );
};

export default Resume;
