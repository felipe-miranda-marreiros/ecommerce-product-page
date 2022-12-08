import { Container, Flex } from "@chakra-ui/react";
import { Carousel } from "./components/Carousel/Carousel";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { ProductView } from "./components/ProductView/ProductView";

import productImage1 from "./assets/image-product-1.jpg";
import productImage2 from "./assets/image-product-2.jpg";
import productImage3 from "./assets/image-product-3.jpg";
import productImage4 from "./assets/image-product-4.jpg";

import productThumbnail1 from "./assets/image-product-1-thumbnail.jpg";
import productThumbnail2 from "./assets/image-product-2-thumbnail.jpg";
import productThumbnail3 from "./assets/image-product-3-thumbnail.jpg";
import productThumbnail4 from "./assets/image-product-4-thumbnail.jpg";

const productThumbnails = [
  productThumbnail1,
  productThumbnail2,
  productThumbnail3,
  productThumbnail4,
];

const productImages = [
  productImage1,
  productImage2,
  productImage3,
  productImage4,
];

function App() {
  return (
    <Container px={{ md: "1rem" }} maxW={{ lg: "container.xl" }} minH="100vh">
      <Header />
      <Flex
        direction={{ base: "column", md: "row" }}
        paddingBlock={{ lg: "5rem", md: "2.5rem" }}
        paddingInline={{ lg: "3.5rem", md: "1.75rem" }}
        gap={{ lg: "7rem" }}
      >
        <Carousel />
        <ProductView
          productImages={productImages}
          thumbnails={productThumbnails}
        />
        <Main />
      </Flex>
    </Container>
  );
}

export default App;
