import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

import minusIcon from "../../assets/icon-minus.svg";
import plusIcon from "../../assets/icon-plus.svg";
import { Cart } from "../../assets/icon/Cart";
import { useAppState } from "../../context/context";

import productThumbnail1 from "../../assets/image-product-1-thumbnail.jpg";
import { nanoid } from "nanoid";

const productItemCart = {
  id: nanoid(),
  title: "Fall Limited Edition Sneakers",
  price: "125.00",
  thumbnail: productThumbnail1,
};

export const Main = () => {
  const { amount, changeAmount, addToCart } = useAppState();
  return (
    <VStack
      as="main"
      align="flex-start"
      justify="center"
      p={{ base: "25px" }}
      spacing={{ base: "1rem", lg: "1.6rem" }}
    >
      <Heading
        as="h1"
        size={{ base: "xs", lg: "sm" }}
        letterSpacing={{ lg: "widest" }}
        color="primary.orange"
        textTransform="uppercase"
      >
        Sneaker Company
      </Heading>
      <VStack
        as="section"
        align="flex-start"
        spacing={{ base: "1rem", lg: "2.5rem" }}
      >
        <Heading
          as="h2"
          size={{ base: "lg", md: "2xl" }}
          w={{ base: "20ch", md: "full" }}
          lineHeight="1.2"
        >
          Fall Limited Edition Sneakers
        </Heading>
        <Text as="p" color="neutral.dark-grayish-blue" w={{ lg: "50ch" }}>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </Text>
      </VStack>
      <Flex w={{ base: "100%" }}>
        <Flex
          flexDirection={{ base: "row", lg: "column" }}
          alignItems={{ base: "center", lg: "initial" }}
          w={{ base: "100%" }}
        >
          <Flex gap="1rem" alignItems="center">
            <Text fontSize="2rem" fontWeight={700}>
              $125.00
            </Text>
            <Text
              as="span"
              padding=".1rem .3rem"
              fontWeight={700}
              backgroundColor="primary.pale-orange"
              color="primary.orange"
              borderRadius="4px"
            >
              50%
            </Text>
          </Flex>
          <Text
            textDecoration="line-through"
            fontWeight={700}
            color="neutral.grayish-blue"
            marginLeft={{ base: "auto", lg: "unset" }}
          >
            $250.00
          </Text>
        </Flex>
      </Flex>
      <Flex flexDirection={{ base: "column", lg: "row" }} gap="1rem" w="100%">
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          backgroundColor="neutral.light-grayish-blue"
          borderRadius="8px"
          flexBasis="40%"
        >
          <Button variant="unstyled" onClick={() => changeAmount("remove")}>
            <Image src={minusIcon} m="auto" alt="" />
          </Button>
          <Box color="black" fontWeight={700}>
            {amount}
          </Box>
          <Button variant="unstyled" onClick={() => changeAmount("add")}>
            <Image src={plusIcon} m="auto" alt="" />
          </Button>
        </Box>
        <Button
          leftIcon={<Cart color="white" />}
          backgroundColor="primary.orange"
          p="1.4rem 0"
          _hover={{ opacity: "0.5" }}
          color="white"
          w="100%"
          boxShadow="0px 10px 40px #ff7d1ab0"
          onClick={() => addToCart(productItemCart)}
        >
          Add to cart
        </Button>
      </Flex>
    </VStack>
  );
};
