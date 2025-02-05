import { useState, useEffect } from "react";
import { Explorer } from "./types";

type ReviewSectionProps = {
  explorersSectionData: {
    content: Explorer[];
  };
};

export const ReviewSection = ({ explorersSectionData }: ReviewSectionProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hiddenIndices, setHiddenIndices] = useState<number[]>([]);

  const explorers = explorersSectionData.content;
  const textArray = explorers[currentIndex].text.split(" ");
  const currentImage = explorers[currentIndex].image;

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
  }, [textArray, currentIndex]);

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % explorers.length);
  };

  return (
    <section id="reviews" className="review-section">
      <p className="p-review-title">Відгуки дослідників</p>
      <div className="rectangle-review"></div>

      <div className="review-content">
        <img
          src={currentImage.src}
          alt={currentImage.alt}
          className="review-image"
        />

        <p className="p-review-text">
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

      <div className="button-container">
        <button onClick={nextReview} className="button-review">
          наступний
        </button>
      </div>
    </section>
  );
};
