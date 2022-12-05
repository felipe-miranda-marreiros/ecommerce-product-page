import { Box, Image, Button } from "@chakra-ui/react";
import { nanoid } from "nanoid";
import logo from "../../assets/logo.svg";
import cartIcon from "../../assets/icon-cart.svg";
import userAvatar from "../../assets/image-avatar.png";
import { MobileMenu } from "../MobileMenu/MobileMenu";

const links = [
  { id: nanoid(), name: "Collections" },
  { id: nanoid(), name: "Men" },
  { id: nanoid(), name: "Women" },
  { id: nanoid(), name: "About" },
  { id: nanoid(), name: "Contact" },
];

export const Header = () => {
  return (
    <Box
      as="header"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      p="10px 25px"
    >
      <Box display="flex" alignItems="center" gap={4}>
        <MobileMenu links={links} />
        <Image src={logo} alt="Sneakers logo" />
      </Box>
      <Box display="flex" alignItems="center" gap="0.35rem">
        <Button type="button" variant="unstyled">
          <Image src={cartIcon} alt="Cart icon" />
        </Button>
        <Box w="30px" h="30px">
          <Image src={userAvatar} alt="Your photo" />
        </Box>
      </Box>
    </Box>
  );
};
