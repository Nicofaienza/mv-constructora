import { useState } from "react";
import "./Slider.css";
import { ImCross } from "react-icons/im";

const Slider = ({ sliderImages }) => {
  const [index, setIndex] = useState(0);
  const [isOpenFullImg, setIsOpenFullImg] = useState(false);
  const [fullImg, setFullImg] = useState(null);
  const sliderLength = sliderImages.length;

  const handleFullImg = (src) => {
    setFullImg(src);
    setIsOpenFullImg(true);
    document.body.style.overflow = "hidden";
  };

  const handleArrowLeft = () => {
    index === 0 ? setIndex(-300) : setIndex(index + 100);
  };

  const handleArrowRight = () => {
    index === -((sliderLength - 1) * 100) ? setIndex(0) : setIndex(index - 100);
  };

  return (
    <div id="slider">
      <div
        id="slider__full-img-container"
        style={{ display: isOpenFullImg ? "flex" : "none" }}
      >
        <img id="slider__full-img" src={fullImg} />
        <ImCross
          onClick={() => {
            setIsOpenFullImg(false);
            document.body.style.overflow = "auto";
          }}
        >
          X
        </ImCross>
      </div>
      <div id="slider__arrows-container">
        <span onClick={handleArrowLeft}>{"<"}</span>
        <span onClick={handleArrowRight}>{">"}</span>
      </div>
      <div id="slider__imgs-container" style={{ left: `${index}%` }}>
        {sliderImages.map((image) => (
          <div key={image} className="slider__img-container">
            <img
              loading="lazy"
              className="slider__img"
              src={image}
              onClick={() => {
                handleFullImg(image);
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
