import { useState, forwardRef } from "react";
import { ExplorerSectionData } from "./types";
import { useFlickerText } from "../hooks/useFlickerText";

type ReviewSectionProps = {
  explorersSectionData: ExplorerSectionData;
};

export const ReviewSection = forwardRef<HTMLDivElement, ReviewSectionProps>(
  ({ explorersSectionData }, ref) => {
    const { content: explorers } = explorersSectionData;

    const [currentIndex, setCurrentIndex] = useState(0);

    const { textArray, hiddenIndices } = useFlickerText(
      explorers[currentIndex].text
    );

    const currentImage = explorers[currentIndex].image;

    const nextReview = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % explorers.length);
    };

    return (
      <section ref={ref} id="reviews" className="review-section">
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
  }
);
