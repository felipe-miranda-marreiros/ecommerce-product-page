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
    <>
      <Header />
      <Container
        paddingBlock={{ base: 0, md: "5rem" }}
        px={{ md: "45px" }}
        maxW={{ lg: "1110px" }}
      >
        <Flex direction={{ base: "column", md: "row" }} gap={{ lg: "5rem" }}>
          <Carousel />
          <ProductView
            productImages={productImages}
            thumbnails={productThumbnails}
          />
          <Main />
        </Flex>
      </Container>
    </>
  );
}

export default App;
