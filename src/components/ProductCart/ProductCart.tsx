import {
  Box,
  Button,
  Flex,
  Image,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Portal,
  Text,
} from "@chakra-ui/react";

import cartIcon from "../../assets/icon-cart.svg";
import deleteIcon from "../../assets/icon-delete.svg";

interface ProductCartItemProps {
  thumbnail: string;
  title: string;
  totalPrice: number;
}

import productThumbnail1 from "../../assets/image-product-1-thumbnail.jpg";

export const ProductCartItem = () => {
  return (
    <Flex alignItems="center" justifyContent="space-between">
      <Box h="50px" w="50px">
        <Image
          borderRadius="8px"
          src={productThumbnail1}
          alt="Fall Limited Edition Sneakers"
        />
      </Box>
      <Box>
        <Text fontWeight={400}>Fall Limited Edition Sneakers</Text>
        <Text fontWeight={400}>
          $125.00 x 3{" "}
          <Text as="span" fontWeight={700} color="black">
            $375.00
          </Text>
        </Text>
      </Box>
      <Button variant="unstyled">
        <Image src={deleteIcon} />
      </Button>
    </Flex>
  );
};

export const ProductCart = () => {
  return (
    <Popover closeOnBlur strategy="fixed" boundary="clippingParents">
      <PopoverTrigger>
        <Button type="button" variant="unstyled">
          <Image src={cartIcon} alt="Cart icon" />
        </Button>
      </PopoverTrigger>
      <Portal>
        <PopoverContent>
          <PopoverHeader p="20px" fontSize="md" color="black" fontWeight={700}>
            Cart
          </PopoverHeader>
          <PopoverBody
            p="33px 25px"
            fontSize="sm"
            flex="1"
            // display="grid"
            color="neutral.dark-grayish-blue"
            fontWeight={700}
            display="flex"
            justifyContent="space-between"
            flexDirection="column"
          >
            {/* <Text>Your cart is empty.</Text> */}
            <ProductCartItem />
            <Button
              type="button"
              backgroundColor="primary.orange"
              color="white"
              w="full"
              h="56px"
              variant="unstyled"
            >
              Checkout
            </Button>
          </PopoverBody>
        </PopoverContent>
      </Portal>
    </Popover>
  );
};
