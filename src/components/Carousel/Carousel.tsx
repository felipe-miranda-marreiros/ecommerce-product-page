import { useEffect, useState } from "react";
import { Box, Button, Image } from "@chakra-ui/react";

import productThumbnail1 from "../../assets/image-product-1-thumbnail.jpg";
import productThumbnail2 from "../../assets/image-product-2-thumbnail.jpg";
import productThumbnail3 from "../../assets/image-product-3-thumbnail.jpg";
import productThumbnail4 from "../../assets/image-product-4-thumbnail.jpg";

import productImage1 from "../../assets/image-product-1.jpg";
import productImage2 from "../../assets/image-product-2.jpg";
import productImage3 from "../../assets/image-product-3.jpg";
import productImage4 from "../../assets/image-product-4.jpg";

import nextIcon from "../../assets/icon-next.svg";
import previousIcon from "../../assets/icon-previous.svg";

const productImages = [
  productImage1,
  productImage2,
  productImage3,
  productImage4,
];

export const Carousel = () => {
  const [index, setIndex] = useState(0);
  const [images, setImages] = useState(productImages);

  useEffect(() => {
    if (index >= images.length || index < 0) {
      return setIndex(0);
    }
  }, [index]);

  const handleNextImage = () => {
    setIndex((prevState) => prevState + 1);
  };

  const handlePreviousImage = () => {
    setIndex((prevState) => prevState - 1);
  };

  return (
    <Box>
      <Box position="relative">
        <Image src={images[index]} h="300px" w="100%" alt="Product image" />
        <Button
          position="absolute"
          top="50%"
          bottom="50%"
          backgroundColor="white"
          variant="ghost"
          rounded="full"
          transform="translate(50%, -100%)"
          onClick={handlePreviousImage}
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
        >
          <Image src={nextIcon} alt="" />
        </Button>
      </Box>
    </Box>
  );
};
