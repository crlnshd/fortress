import { Image, SecurityDetail } from "./types";

type SecuritySectionProps = {
  securitySectionData: {
    content: SecurityDetail[];
    images: Image[];
  };
};

export const SecuritySection = ({
  securitySectionData,
}: SecuritySectionProps) => {
  if (
    !securitySectionData ||
    !securitySectionData.content ||
    !securitySectionData.images
  )
    return null;

  const texts = securitySectionData.content;
  const images = securitySectionData.images;

  return (
    <section className="security-section">
      <p className="p-security-title">Охорона</p>
      <div className="rectangle-security"></div>

      <div className="security-grid">
        {images.map((image, index) => (
          <div key={image.src} className="security-item">
            <img src={image.src} alt={image.alt} className="security-image" />
            <div className="security-text">{texts[index].text}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
