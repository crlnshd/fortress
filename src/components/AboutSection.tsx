import { SectionData } from "./types";

type AboutSectionProps = {
  aboutSectionData: SectionData;
};

export const AboutSection = ({ aboutSectionData }: AboutSectionProps) => {
  return (
    <section className="main-section">
      <ul className="main-items">
        <li className="main-item first-section">
          <div className="content-wrapper">
            {aboutSectionData.images?.[0] && (
              <img
                src={aboutSectionData.images[0].src}
                alt={aboutSectionData.images[0].alt}
                className="image"
              />
            )}
            <p className="p-1">{aboutSectionData.content}</p>
            {aboutSectionData.images?.[1] && (
              <img
                src={aboutSectionData.images[1].src}
                alt={aboutSectionData.images[1].alt}
                className="image"
              />
            )}
          </div>
        </li>
      </ul>
    </section>
  );
};
