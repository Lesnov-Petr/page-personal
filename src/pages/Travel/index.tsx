import { STravel } from "./styles";
import { Header } from "../../Components/Header";
import Container from "../../Components/Container";

const Travel: React.FC<{}> = () => {
  return (
    <Container>
      <STravel>
        <Header />
        Путешествие
      </STravel>
    </Container>
  );
};

export default Travel;
