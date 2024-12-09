import React, { useState } from "react";

const Image = () => {
  const [image, setImage] = useState({
    src: "lviv.jpg",
    width: 500,
  });

  const increaseSize = () => {
    setImage((prev) => ({ ...prev, width: prev.width + 50 }));
  };

  const decreaseSize = () => {
    setImage((prev) => ({
      ...prev,
      width: Math.max(prev.width - 50, 50),
    }));
  };

  const removeImage = () => {
    setImage(null);
  };

  const addImage = () => {
    if (!image) {
      setImage({ src: "lviv.jpg", width: 500 });
    }
  };

  return (
    <div id="imageContainer">
      {image && (
        <a
          href="https://lviv.travel/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={image.src} alt="Фото Львова" width={image.width} />
        </a>
      )}
      <div className="buttons">
        <button onClick={addImage}>Додати</button>
        <button onClick={increaseSize}>Збільшити</button>
        <button onClick={decreaseSize}>Зменшити</button>
        <button onClick={removeImage}>Видалити</button>
      </div>
    </div>
  );
};

export default Image;

