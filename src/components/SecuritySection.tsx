import { SecurityDetail } from "./types";

type SecuritySectionProps = {
  securitySectionData: {
    content: SecurityDetail[];
  };
};

export const SecuritySection = ({
  securitySectionData,
}: SecuritySectionProps) => {
  if (!securitySectionData || !securitySectionData.content) return null;

  const securityData = securitySectionData.content;

  return (
    <section id="security" className="security-section">
      <p className="p-security-title">Охорона</p>
      <div className="rectangle-security"></div>

      <div className="security-grid">
        {securityData.map((data, index) => (
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
};
