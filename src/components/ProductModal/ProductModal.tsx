import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import { ProductGallery } from "../ProductGallery/ProductGallery";
import { ProductModalProps } from "../../protocols/ProductProps";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

export const ProductModal: React.FC<ProductModalProps> = (props) => {
  const {
    isOpen,
    onClose,
    productImages,
    thumbnails,
    setIndex,
    handleNextImage,
    handlePreviousImage,
    tabIndex,
  } = props;
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="lg">
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
            left="-8%"
            backgroundColor="white"
            variant="unstyled"
            rounded="full"
            transform="translate(50%, -100%)"
            zIndex={2}
            display={{ base: "none", md: "block" }}
            onClick={handlePreviousImage}
            disabled={tabIndex === 0}
            _hover={{ bg: "white" }}
          >
            <ChevronLeftIcon
              w="35px"
              h="35px"
              _hover={{ color: "primary.orange" }}
            />
          </Button>
          <Button
            position="absolute"
            top="45%"
            right="-8%"
            backgroundColor="white"
            variant="unstyled"
            rounded="full"
            transform="translate(-50%, -100%)"
            zIndex={2}
            display={{ base: "none", md: "block" }}
            onClick={handleNextImage}
            disabled={tabIndex === productImages.length - 1}
            _hover={{ bg: "white" }}
          >
            <ChevronRightIcon
              w="35px"
              h="35px"
              _hover={{ color: "primary.orange" }}
            />
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
};
