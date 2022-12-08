import { useState } from "react";

const useProductGalleryHooks = () => {
  const [index, setIndex] = useState(0);

  const handleNextImage = () => {
    setIndex((prevState) => prevState + 1);
  };

  const handlePreviousImage = () => {
    setIndex((prevState) => prevState - 1);
  };

  return [handleNextImage, handlePreviousImage, index, setIndex] as const;
};

export default useProductGalleryHooks;
