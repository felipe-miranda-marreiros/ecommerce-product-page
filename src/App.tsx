import { Container } from "@chakra-ui/react";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <Container px={{ lg: "1rem" }} maxW={{ lg: "container.xl" }} minH="100vh">
      <Header />
    </Container>
  );
}

export default App;
