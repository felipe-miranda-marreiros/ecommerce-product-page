export interface ProductViewProps {
  productImages: Array<string>;
  thumbnails: Array<string>;
  onOpen?: () => void;
  tabIndex?: number;
  setIndex?: (number: number) => void;
  modalMode?: boolean;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  handlePreviousImage: () => void;
  handleNextImage: () => void;
}

export type ProductModalProps = ModalProps & ProductViewProps;
