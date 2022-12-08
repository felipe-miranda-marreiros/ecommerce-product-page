import {
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  useDisclosure,
  Box,
  Button,
} from "@chakra-ui/react";

import nextIcon from "../../assets/icon-next.svg";
import previousIcon from "../../assets/icon-previous.svg";
import ProductGalleryHooks from "../../hooks/ProductGalleryHooks";

interface ProductViewProps {
  productImages: Array<string>;
  thumbnails: Array<string>;
  onOpen?: () => void;
  tabIndex?: number;
  setIndex?: (number: number) => void;
  modalMode?: boolean;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  handlePreviousImage: () => void;
  handleNextImage: () => void;
}

function ProductModal({
  isOpen,
  onClose,
  productImages,
  thumbnails,
  setIndex,
  handleNextImage,
  handlePreviousImage,
  tabIndex,
}: ModalProps & ProductViewProps) {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay display={{ base: "none", md: "block" }} />
        <ModalContent
          position="relative"
          borderRadius="none"
          backgroundColor="unset"
          boxShadow="none"
        >
          <ModalCloseButton
            top={-12}
            size="lg"
            right={-2}
            color="primary.orange"
            display={{ base: "none", md: "block" }}
          />
          <Button
            position="absolute"
            top="45%"
            left="-10%"
            backgroundColor="white"
            variant="ghost"
            rounded="full"
            transform="translate(50%, -100%)"
            zIndex={2}
            display={{ base: "none", md: "block" }}
            onClick={handlePreviousImage}
            disabled={tabIndex === 0}
          >
            <Image src={previousIcon} alt="" />
          </Button>
          <Button
            position="absolute"
            top="45%"
            right="-10%"
            backgroundColor="white"
            variant="ghost"
            rounded="full"
            transform="translate(-50%, -100%)"
            zIndex={2}
            display={{ base: "none", md: "block" }}
            onClick={handleNextImage}
            disabled={tabIndex === productImages.length - 1}
          >
            <Image src={nextIcon} alt="" />
          </Button>
          <ProductGallery
            productImages={productImages}
            thumbnails={thumbnails}
            tabIndex={tabIndex}
            setIndex={setIndex}
            modalMode
          />
        </ModalContent>
      </Modal>
    </>
  );
}

const ProductGallery: React.FC<ProductViewProps> = ({
  productImages,
  thumbnails,
  onOpen,
  tabIndex,
  setIndex,
  modalMode,
}) => {
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

export const ProductView: React.FC<ProductViewProps> = ({
  productImages,
  thumbnails,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [handleNextImage, handlePreviousImage, index, setIndex] =
    ProductGalleryHooks();

  return (
    <>
      <ProductModal
        isOpen={isOpen}
        onClose={onClose}
        productImages={productImages}
        handleNextImage={handleNextImage}
        handlePreviousImage={handlePreviousImage}
        thumbnails={thumbnails}
        tabIndex={index}
        setIndex={setIndex}
        modalMode
      />
      <ProductGallery
        onOpen={onOpen}
        productImages={productImages}
        thumbnails={thumbnails}
        tabIndex={index}
        setIndex={setIndex}
      />
    </>
  );
};
