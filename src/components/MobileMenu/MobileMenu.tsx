import { useRef } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Image,
  useDisclosure,
  Box,
  Button,
} from "@chakra-ui/react";
import { Props } from "./MobileMenuProps";
import mobileMenuIcon from "../../assets/icon-menu.svg";
import mobileCloseIcon from "../../assets/icon-close.svg";
import { NavbarList } from "../NavbarList/NavbarList";

export const MobileMenu: React.FC<Props> = ({ links }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);

  return (
    <Box display={{ md: "none" }}>
      <Button type="button" ref={btnRef} onClick={onOpen} variant="unstyled">
        <Image src={mobileMenuIcon} lineHeight={0} />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton left={4}>
            <Image src={mobileCloseIcon} />
          </DrawerCloseButton>
          <DrawerBody mt={20}>
            <NavbarList
              links={links}
              direction="column"
              gap="1.5rem"
              weight={700}
            />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};
