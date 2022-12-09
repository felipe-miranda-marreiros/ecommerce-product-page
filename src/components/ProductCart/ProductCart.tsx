import {
  Box,
  Button,
  Fade,
  Flex,
  Image,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Portal,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

import cartIcon from "../../assets/icon-cart.svg";
import deleteIcon from "../../assets/icon-delete.svg";
import productThumbnail1 from "../../assets/image-product-1-thumbnail.jpg";
import { useAppState } from "../../context/context";

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
  const { isOpen, onToggle } = useDisclosure();
  const { cart } = useAppState();

  return (
    <Popover closeOnBlur strategy="fixed" boundary="clippingParents">
      <PopoverTrigger>
        <Button type="button" variant="unstyled" onClick={onToggle}>
          <Image src={cartIcon} alt="Cart icon" />
        </Button>
      </PopoverTrigger>
      <Fade in={isOpen}>
        <Portal>
          <PopoverContent>
            <PopoverHeader
              p="20px"
              fontSize="md"
              color="black"
              fontWeight={700}
            >
              Cart
            </PopoverHeader>
            <PopoverBody
              p="33px 25px"
              fontSize="sm"
              flex="1"
              color="neutral.dark-grayish-blue"
              fontWeight={700}
              display="flex"
              justifyContent="space-between"
              flexDirection="column"
              placeItems={cart.length === 0 ? "center" : undefined}
            >
              {cart.length === 0 ? (
                <Text m="auto">Your cart is empty.</Text>
              ) : (
                <>
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
                </>
              )}
            </PopoverBody>
          </PopoverContent>
        </Portal>
      </Fade>
    </Popover>
  );
};
