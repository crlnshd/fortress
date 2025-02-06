import { useState } from "react";
import { SectionDataWithImage } from "./types";
import { useFlickerText } from "../hooks/useFlickerText";

type KnowMoreSectionProps = {
  knowMoreSectionData: SectionDataWithImage;
};

export const KnowMoreSection = ({
  knowMoreSectionData,
}: KnowMoreSectionProps) => {
  const { images, content } = knowMoreSectionData;
  const { textArray, hiddenIndices } = useFlickerText(content);

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="knowmore" className="know-more">
      <p className="p-ques">Чи готові ви дізнатися більше?</p>
      <div className="rectangle"></div>
      <div className="content-container">
        <div className="content-know">
          <p className="p-know">
            {textArray.map((word, index) => (
              <span
                key={index}
                className={hiddenIndices.includes(index) ? "hidden-text" : ""}
              >
                {word}{" "}
              </span>
            ))}
          </p>
        </div>
        <div className="slider-container">
          <button className="slider-button" onClick={prevImage}>
            &#9665;
          </button>
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className="slider-image"
          />
          <button className="slider-button" onClick={nextImage}>
            &#9655;
          </button>
        </div>
      </div>
    </section>
  );
};
