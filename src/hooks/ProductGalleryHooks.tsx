import React, { useState } from "react";

const useProductGalleryHooks = () => {
  const [index, setIndex] = useState(0);

  const handleNextImage = () => {
    setIndex((prevState) => prevState + 1);
  };

  const handlePreviousImage = () => {
    setIndex((prevState) => prevState - 1);
  };

  return React.useMemo(() => {
    return [handleNextImage, handlePreviousImage, index, setIndex] as const;
  }, [index]);
};

export default useProductGalleryHooks;
