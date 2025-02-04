import { useState, useEffect } from "react";
import { SectionData, Image } from "./types";

type HistorySectionProps = {
  historySectionData: SectionData & { jumpingImages?: Image[] };
};

export const HistorySection = ({ historySectionData }: HistorySectionProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scaryImage, setScaryImage] = useState<Image | null>(null);
  const [hiddenIndices, setHiddenIndices] = useState<number[]>([]);

  const images = historySectionData.images;
  const jumpingImages = historySectionData.jumpingImages || [];
  const textArray = historySectionData.content.split(" ");

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

  const changeImage = () => {
    if (!images) return;

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

  if (!images) return null;

  return (
    <section className="history-section">
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
};
