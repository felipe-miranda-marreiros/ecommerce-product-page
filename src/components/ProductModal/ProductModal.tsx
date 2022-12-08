import {
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import { ProductGallery } from "../ProductGallery/ProductGallery";
import nextIcon from "../../assets/icon-next.svg";
import previousIcon from "../../assets/icon-previous.svg";
import { ProductModalProps } from "../../protocols/ProductProps";

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
};
