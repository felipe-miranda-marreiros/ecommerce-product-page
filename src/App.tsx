import { Container } from "@chakra-ui/react";
import { Carousel } from "./components/Carousel/Carousel";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <Container px={{ md: "1rem" }} maxW={{ lg: "container.xl" }} minH="100vh">
      <Header />
      <Carousel />
    </Container>
  );
}

export default App;
