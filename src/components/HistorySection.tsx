import { useState, forwardRef } from "react";
import { HistorySectionData, Image } from "./types";
import { useFlickerText } from "../hooks/useFlickerText";

type HistorySectionProps = {
  historySectionData: HistorySectionData;
};

export const HistorySection = forwardRef<HTMLDivElement, HistorySectionProps>(
  ({ historySectionData }, ref) => {
    const { images, jumpingImages = [], content } = historySectionData;

    const { textArray, hiddenIndices } = useFlickerText(content);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [scaryImage, setScaryImage] = useState<Image | null>(null);

    const changeImage = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);

      if (jumpingImages.length > 0 && Math.random() < 0.4) {
        const randomScaryImage =
          jumpingImages[Math.floor(Math.random() * jumpingImages.length)];
        setScaryImage(randomScaryImage);

        setTimeout(() => {
          setScaryImage(null);
        }, 1000);
      }
    };

    return (
      <section ref={ref} id="history" className="history-section">
        <p className="p-history"> Історія будівництва</p>
        <div className="rectangle-history"></div>
        <div className="content-history">
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className="history-image"
          />
          <p className="p-history-content">
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
          <button onClick={changeImage} className="button-history">
            тіні ніколи не сплять
          </button>
        </div>

        {scaryImage && (
          <img src={scaryImage.src} alt="Scary Image" className="scary-image" />
        )}
      </section>
    );
  }
);
