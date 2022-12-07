import { Box, Image } from "@chakra-ui/react";
import productImage1 from "../../assets/image-product-1.jpg";
import productImage2 from "../../assets/image-product-2.jpg";
import productImage3 from "../../assets/image-product-3.jpg";
import productImage4 from "../../assets/image-product-4.jpg";

export const ProductView = () => {
  return (
    <Box>
      <Image
        borderRadius="16px"
        display={{ base: "none", md: "block" }}
        src={productImage1}
      />
    </Box>
  );
};
