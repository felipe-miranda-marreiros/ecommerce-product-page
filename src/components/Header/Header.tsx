import {
  Box,
  Image,
  Button,
  useDisclosure,
  Text,
  Heading,
  Portal,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
} from "@chakra-ui/react";
import { nanoid } from "nanoid";
import logo from "../../assets/logo.svg";
import cartIcon from "../../assets/icon-cart.svg";
import userAvatar from "../../assets/image-avatar.png";
import { MobileMenu } from "../MobileMenu/MobileMenu";
import { DesktopMenu } from "../DesktopMenu/DesktopMenu";

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
      p={{ base: "10px 25px", md: "35px 25px" }}
      borderBottom={{ md: "1px solid #b6bcc867" }}
      maxW="1145px"
      m="auto"
    >
      <Box display="flex" alignItems="center" gap={{ md: "3.438rem" }}>
        <MobileMenu links={links} />
        <Image src={logo} alt="Sneakers logo" />
        <DesktopMenu links={links} />
      </Box>
      <Box
        display="flex"
        alignItems="center"
        gap={{ base: "0.35rem", md: "1.3rem" }}
      >
        <Popover closeOnBlur strategy="fixed" boundary="clippingParents">
          <PopoverTrigger>
            <Button type="button" variant="unstyled">
              <Image src={cartIcon} alt="Cart icon" />
            </Button>
          </PopoverTrigger>
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
                p="20px"
                fontSize="sm"
                flex="1"
                display="grid"
                placeItems="center"
                color="neutral.dark-grayish-blue"
                fontWeight={700}
              >
                <Text>Your cart is empty.</Text>
              </PopoverBody>
            </PopoverContent>
          </Portal>
        </Popover>
        <Box w={{ base: "30px", md: "50px" }} h={{ base: "30px", md: "50px" }}>
          <Image
            src={userAvatar}
            alt="Your photo"
            w={{ md: "50px" }}
            h={{ md: "50px" }}
          />
        </Box>
      </Box>
    </Box>
  );
};
