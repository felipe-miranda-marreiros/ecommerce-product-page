import {
  Box,
  Button,
  Fade,
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
import { useAppState } from "../../context/context";
import { ProductCartItem } from "../ProductCartItem/ProductCartItem";

export const ProductCart = () => {
  const { isOpen, onToggle } = useDisclosure();
  const { cart } = useAppState();

  return (
    <Popover closeOnBlur strategy="fixed" boundary="clippingParents">
      <PopoverTrigger>
        <Button
          position="relative"
          type="button"
          variant="unstyled"
          onClick={onToggle}
        >
          <Image src={cartIcon} alt="Cart icon" />
          {cart.length ? (
            <Box
              position="absolute"
              top={1}
              right={3}
              fontSize="10px"
              backgroundColor="primary.orange"
              color="white"
              borderRadius="6px"
              px="6px"
            >
              {cart.map((item) => item.amount || cart.length)}
            </Box>
          ) : null}
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
                  <ProductCartItem data={cart} />
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
