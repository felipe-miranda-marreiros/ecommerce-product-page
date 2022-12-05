import { Box } from "@chakra-ui/react";
import { Props } from "../MobileMenu/MobileMenuProps";
import { NavbarList } from "../NavbarList/NavbarList";

export const DesktopMenu: React.FC<Props> = ({ links }) => {
  return (
    <Box display={{ md: "block", base: "none" }}>
      <NavbarList
        links={links}
        direction="row"
        color="neutral.dark-grayish-blue"
        gap="2.188rem"
      />
    </Box>
  );
};
