import { SecurityDetail } from "./types";
import { forwardRef } from "react";

type SecuritySectionProps = {
  securitySectionData: {
    content: SecurityDetail[];
  };
};

export const SecuritySection = forwardRef<HTMLDivElement, SecuritySectionProps>(
  ({ securitySectionData }, ref) => {
    const { content } = securitySectionData;
    if (!content || content.length === 0) {
      return <div>No security details available</div>;
    }
    return (
      <section ref={ref} id="security" className="security-section">
        <p className="p-security-title">Охорона</p>
        <div className="rectangle-security"></div>

        <div className="security-grid">
          {content.map((data, index) => (
            <div key={index} className="security-item">
              <img
                src={data.image.src}
                alt={data.image.alt}
                className="security-image"
              />
              <div className="security-text">{data.text}</div>
            </div>
          ))}
        </div>
      </section>
    );
  }
);
