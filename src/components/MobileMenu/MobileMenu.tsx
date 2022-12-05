import { useRef } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Image,
  useDisclosure,
} from "@chakra-ui/react";
import { Props } from "./MobileMenuProps";
import mobileMenuIcon from "../../assets/icon-menu.svg";
import mobileCloseIcon from "../../assets/icon-close.svg";
import { NavbarList } from "../NavbarList/NavbarList";

export const MobileMenu: React.FC<Props> = ({ links }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <button type="button" ref={btnRef} onClick={onOpen}>
        <Image src={mobileMenuIcon} />
      </button>
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
            <NavbarList links={links} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
