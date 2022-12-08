import { useDisclosure } from "@chakra-ui/react";
import ProductGalleryHooks from "../../hooks/ProductGalleryHooks";
import { ProductViewProps } from '../../protocols/ProductProps';
import { ProductGallery } from "../ProductGallery/ProductGallery";
import { ProductModal } from "../ProductModal/ProductModal";

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
