export interface ProductViewProps {
  productImages: Array<string>;
  thumbnails: Array<string>;
  tabIndex?: number;
  modalMode?: boolean;
  onOpen?: () => void;
  setIndex?: (number: number) => void;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  handlePreviousImage: () => void;
  handleNextImage: () => void;
}

export type ProductModalProps = ModalProps & ProductViewProps;
