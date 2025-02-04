import { SectionData } from "./types";

type FooterProps = {
  footerData: SectionData;
};

export const Footer = ({ footerData: footerData }: FooterProps) => {
  if (!footerData || !footerData.content) return null;

  return (
    <footer className="footer-section">
      <div className="footer-content">{footerData.content}</div>
    </footer>
  );
};
