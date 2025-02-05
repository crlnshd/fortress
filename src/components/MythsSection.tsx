import { useState, useEffect, useMemo } from "react";
import { Image, Myth } from "./types";

type MythsSectionProps = {
  mythsSectionData: {
    content: Myth[];
    images: Image[];
  };
};

export const MythSection = ({ mythsSectionData }: MythsSectionProps) => {
  const [selectedMythIndex, setSelectedMythIndex] = useState(0);
  const [hiddenIndices, setHiddenIndices] = useState<number[]>([]);

  const myths = mythsSectionData.content;
  const imagesPerMyth = 4;
  const validIndex = Math.min(selectedMythIndex, myths.length - 1);

  const textArray = useMemo(() => {
    return myths.length > 0 ? myths[validIndex].text.split(" ") : [];
  }, [validIndex, myths]);

  const groupedImages = useMemo(() => {
    const result = [];
    for (let i = 0; i < mythsSectionData.images.length; i += imagesPerMyth) {
      result.push(mythsSectionData.images.slice(i, i + imagesPerMyth));
    }
    return result;
  }, [mythsSectionData.images]);

  useEffect(() => {
    if (textArray.length === 0) return;

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
  }, [textArray, selectedMythIndex]);

  const handleMythChange = (index: number) => {
    setSelectedMythIndex(index);
  };

  return (
    <section id="myths" className="myth-section">
      <div className="mythpart1">
        <p className="p-myth">Міфи про фортецю</p>
        <div className="rectangle-myth"></div>

        <div className="buttons-container">
          {myths.map((_, index) => (
            <button
              key={index}
              className={`myth-button ${
                selectedMythIndex === index ? "active" : ""
              }`}
              onClick={() => handleMythChange(index)}
            >
              Міф {index + 1}
            </button>
          ))}
        </div>
      </div>

      <div className="mythpart2">
        <p className="p-myth-text">
          {textArray.map((word, index) => (
            <span
              key={index}
              className={hiddenIndices.includes(index) ? "hidden-text" : ""}
            >
              {word}{" "}
            </span>
          ))}
        </p>

        <div className="image-grid">
          {groupedImages[validIndex]?.map((image, index) => (
            <img
              key={image.src}
              src={image.src}
              alt={image.alt}
              className={`myth-image myth-image-${index}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
