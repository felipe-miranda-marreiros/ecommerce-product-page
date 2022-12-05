import { Box, List, ListItem, Link } from "@chakra-ui/react";
import { Props } from "../MobileMenu/MobileMenuProps";

export const NavbarList: React.FC<Props> = ({ links }) => {
  return (
    <Box as="nav">
      <List
        listStyleType="none"
        display="flex"
        flexDirection="column"
        gap="1rem"
        color="#000"
        fontWeight={700}
      >
        {links.map((link) => {
          return (
            <ListItem key={link.id} tabIndex={1}>
              <Link>{link.name}</Link>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};
