import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { ProductItemProps, useAppState } from "../../context/context";
import deleteIcon from "../../assets/icon-delete.svg";

interface ProductCartItemProps {
  data: ProductItemProps[];
}

export const ProductCartItem: React.FC<ProductCartItemProps> = ({ data }) => {
  const { removeCartItems } = useAppState();
  return (
    <>
      {data.map((product) => {
        return (
          <Flex
            key={product.id}
            alignItems="center"
            justifyContent="space-between"
          >
            <Box h="50px" w="50px">
              <Image
                borderRadius="8px"
                src={product.thumbnail}
                alt={product.title}
              />
            </Box>
            <Box>
              <Text fontWeight={400}>{product.title}</Text>
              <Text fontWeight={400}>
                ${product.price} {product.amount ? `x ${product.amount}` : null}{" "}
                <Text as="span" fontWeight={700} color="black">
                  {product.totalPrice
                    ? `$ ${product.totalPrice?.toFixed(2)}`
                    : null}
                </Text>
              </Text>
            </Box>
            <Button variant="unstyled" onClick={removeCartItems}>
              <Image src={deleteIcon} />
            </Button>
          </Flex>
        );
      })}
    </>
  );
};
