import { useState, useEffect } from "react";
import { SectionData } from "./types";

type KnowMoreSectionProps = {
  knowMoreSectionData: SectionData;
};

export const KnowMoreSection = ({
  knowMoreSectionData,
}: KnowMoreSectionProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hiddenIndices, setHiddenIndices] = useState<number[]>([]);

  const images = knowMoreSectionData.images;
  const textArray = knowMoreSectionData.content.split(" ");

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndices = textArray
        .map((_, index) => (Math.random() < 0.2 ? index : -1))
        .filter((index) => index !== -1);

      setHiddenIndices(randomIndices);

      setTimeout(() => {
        setHiddenIndices([]);
      }, 300);
    }, 1200);

    return () => clearInterval(interval);
  }, [textArray]);

  const nextImage = () => {
    if (!images) return;

    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    if (!images) return;

    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  if (!images) return null;

  return (
    <section className="know-more">
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
