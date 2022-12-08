import {
  Box,
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { ProductViewProps } from "../../protocols/ProductProps";

export const ProductGallery: React.FC<ProductViewProps> = (props) => {
  const { productImages, thumbnails, onOpen, tabIndex, setIndex, modalMode } =
    props;
  return (
    <Tabs
      index={modalMode ? tabIndex : undefined}
      onChange={(index) => (setIndex ? setIndex(index) : null)}
      variant="unstyled"
      display={{ base: "none", md: "block" }}
      position="relative"
    >
      <TabPanels>
        {productImages.map((image, i) => {
          return (
            <TabPanel p={0} key={i} cursor="pointer" onClick={onOpen}>
              <Image
                borderRadius="16px"
                display={{ base: "none", md: "block" }}
                src={image}
              />
            </TabPanel>
          );
        })}
      </TabPanels>
      <TabList mt="1.5rem">
        {thumbnails.map((thumbnail, i) => {
          return (
            <Tab
              key={i}
              _notLast={{ marginRight: "2rem" }}
              p={0}
              position="relative"
              overflow="hidden"
              _selected={{
                border: "4px solid orange",
                borderRadius: "16px",
                _after: {
                  content: '""',
                  position: "absolute",
                  inset: 0,
                  backgroundColor: "white",
                  opacity: "0.6",
                  display: "block",
                },
              }}
            >
              <Box
                position="relative"
                overflow="hidden"
                _hover={{
                  _after: {
                    content: '""',
                    position: "absolute",
                    inset: 0,
                    backgroundColor: "white",
                    opacity: "0.6",
                    display: "block",
                    borderRadius: "11px",
                  },
                }}
              >
                <Image
                  display={{ base: "none", md: "block" }}
                  borderRadius="11px"
                  src={thumbnail}
                />
              </Box>
            </Tab>
          );
        })}
      </TabList>
    </Tabs>
  );
};
