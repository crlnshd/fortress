import { SectionDataWithImage } from "./types";

type AboutSectionProps = {
  aboutSectionData: SectionDataWithImage;
};

export const AboutSection = ({ aboutSectionData }: AboutSectionProps) => {
  const { images, content } = aboutSectionData;

  return (
    <section id="about" className="main-section">
      <ul className="main-items">
        <li className="main-item first-section">
          <div className="content-wrapper">
            <img src={images[0].src} alt={images[0].alt} className="image" />

            <p className="p-1">{content}</p>
            <img src={images[1].src} alt={images[1].alt} className="image" />
          </div>
        </li>
      </ul>
    </section>
  );
};
