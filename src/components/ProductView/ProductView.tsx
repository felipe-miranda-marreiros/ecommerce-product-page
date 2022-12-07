import {
  Box,
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import productImage1 from "../../assets/image-product-1.jpg";
import productImage2 from "../../assets/image-product-2.jpg";
import productImage3 from "../../assets/image-product-3.jpg";
import productImage4 from "../../assets/image-product-4.jpg";

import productThumbnail1 from "../../assets/image-product-1-thumbnail.jpg";
import productThumbnail2 from "../../assets/image-product-2-thumbnail.jpg";
import productThumbnail3 from "../../assets/image-product-3-thumbnail.jpg";
import productThumbnail4 from "../../assets/image-product-4-thumbnail.jpg";

const productThumbnails = [
  productThumbnail1,
  productThumbnail2,
  productThumbnail3,
  productThumbnail4,
];

const productImages = [
  productImage1,
  productImage2,
  productImage3,
  productImage4,
];

export const ProductView = () => {
  return (
    <Box>
      <Tabs variant="unstyled">
        <TabPanels>
          {productImages.map((image, i) => {
            return (
              <TabPanel key={i}>
                <Image
                  borderRadius="16px"
                  display={{ base: "none", md: "block" }}
                  src={image}
                />
              </TabPanel>
            );
          })}
        </TabPanels>
        <TabList mt="1rem">
          {productThumbnails.map((thumbnail, i) => {
            return (
              <Tab
                key={i}
                _notLast={{ marginRight: "1rem" }}
                p={0}
                overflow="hidden"
                _selected={{
                  border: "4px solid orange",
                  borderRadius: "16px",
                  opacity: "0.4",
                }}
              >
                <Image
                  display={{ base: "none", md: "block" }}
                  borderRadius="11px"
                  src={thumbnail}
                />
              </Tab>
            );
          })}
        </TabList>
      </Tabs>
    </Box>
  );
};
