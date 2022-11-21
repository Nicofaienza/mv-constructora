import "./ImgGallery.css";
import { ImCross } from "react-icons/im";

import { useState } from "react";

const ImgGallery = ({ images }) => {
  const [closeFullImg, setCloseFullImg] = useState(true);
  const [srcFullImg, setSrcFullImg] = useState(null);

  const openFulImg = (reference) => {
    setCloseFullImg(false);
    setSrcFullImg(reference);
    document.body.style.overflow = "hidden";
  };

  const closeImg = () => {
    setCloseFullImg(true);
    document.body.style.overflow = "auto";
  };

  return (
    <div id="ImgGallery">
      <div
        className={closeFullImg ? "ful-img close" : "ful-img"}
        id="fulImgBox"
      >
        <img src={srcFullImg} id="fulImg" alt="" />
        <ImCross onClick={closeImg}>x</ImCross>
      </div>
      <div className="img-gallery">
        {images.map((image) => (
          <div key={image} className="img-gallery__img-container">
            <img
              src={image}
              onClick={() => {
                openFulImg(image);
              }}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImgGallery;
