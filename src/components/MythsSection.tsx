import { useState, useMemo, forwardRef } from "react";
import { MythsSectionData } from "./types";
import { useFlickerText } from "../hooks/useFlickerText";

type MythsSectionProps = {
  mythsSectionData: MythsSectionData;
};

const IMAGES_PER_MYTH = 4;

export const MythSection = forwardRef<HTMLDivElement, MythsSectionProps>(
  ({ mythsSectionData }, ref) => {
    const { content: myths, images } = mythsSectionData;

    const [selectedMythIndex, setSelectedMythIndex] = useState(0);

    const validIndex = Math.min(selectedMythIndex, myths.length - 1);

    const { textArray, hiddenIndices } = useFlickerText(myths[validIndex].text);

    const groupedImages = useMemo(() => {
      const result = [];
      for (let i = 0; i < images.length; i += IMAGES_PER_MYTH) {
        result.push(images.slice(i, i + IMAGES_PER_MYTH));
      }
      return result;
    }, [images]);

    const handleMythChange = (index: number) => {
      setSelectedMythIndex(index);
    };

    return (
      <section ref={ref} id="myths" className="myth-section">
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
            {groupedImages[validIndex].map((image, index) => (
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
  }
);
