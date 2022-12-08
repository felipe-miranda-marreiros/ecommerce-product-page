import { Box, Button, Image } from "@chakra-ui/react";

import productImage1 from "../../assets/image-product-1.jpg";
import productImage2 from "../../assets/image-product-2.jpg";
import productImage3 from "../../assets/image-product-3.jpg";
import productImage4 from "../../assets/image-product-4.jpg";

import nextIcon from "../../assets/icon-next.svg";
import previousIcon from "../../assets/icon-previous.svg";
import useProductGalleryHooks from "../../hooks/ProductGalleryHooks";

const productImages = [
  productImage1,
  productImage2,
  productImage3,
  productImage4,
];

export const Carousel = () => {
  const [handleNextImage, handlePreviousImage, index] =
    useProductGalleryHooks();

  return (
    <Box display={{ md: "none" }}>
      <Box position="relative">
        <Image
          src={productImages[index]}
          h="300px"
          w="100%"
          alt="Product image"
          objectFit={{ base: "cover" }}
        />
        <Button
          position="absolute"
          top="50%"
          bottom="50%"
          backgroundColor="white"
          variant="ghost"
          rounded="full"
          transform="translate(50%, -100%)"
          onClick={handlePreviousImage}
          disabled={index === 0}
        >
          <Image src={previousIcon} alt="" />
        </Button>
        <Button
          position="absolute"
          top="50%"
          bottom="50%"
          right={0}
          backgroundColor="white"
          variant="ghost"
          rounded="full"
          transform="translate(-50%, -100%)"
          onClick={handleNextImage}
          disabled={index === productImages.length - 1}
        >
          <Image src={nextIcon} alt="" />
        </Button>
      </Box>
    </Box>
  );
};
