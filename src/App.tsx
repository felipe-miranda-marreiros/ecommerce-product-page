import { Container, Flex } from "@chakra-ui/react";
import { Carousel } from "./components/Carousel/Carousel";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { ProductView } from "./components/ProductView/ProductView";

function App() {
  return (
    <Container px={{ md: "1rem" }} maxW={{ lg: "container.xl" }} minH="100vh">
      <Header />
      <Flex
        direction={{ base: "column", md: "row" }}
        paddingBlock={{ lg: "5rem", md: "2.5rem" }}
        paddingInline={{ lg: "3.5rem", md: '1.75' }}
        gap={{ lg: "7rem" }}
      >
        <Carousel />
        <ProductView />
        <Main />
      </Flex>
    </Container>
  );
}

export default App;
