import { Box, List, ListItem, Link } from "@chakra-ui/react";
import { Props } from "../MobileMenu/MobileMenuProps";

type FlexProps = "row" | "column";

interface NavbarListProps {
  color?: string;
  direction?: FlexProps;
  weight?: string | number;
  gap?: string | number;
}

export const NavbarList: React.FC<NavbarListProps & Props> = (props) => {
  const { links, color, direction, weight, gap } = props;
  return (
    <Box as="nav">
      <List
        listStyleType="none"
        display="flex"
        flexDirection={direction}
        gap={gap}
        color={color}
        fontWeight={weight}
      >
        {links.map((link) => {
          return (
            <ListItem key={link.id} tabIndex={1}>
              <Link
                position="relative"
                _hover={{
                  _after: {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    inset: "0 0 -52px 0",
                    borderBottom: "4px solid orange",
                  },
                  color: "black",
                }}
              >
                {link.name}
              </Link>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};
