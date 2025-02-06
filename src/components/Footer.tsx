import { BaseSectionData } from "./types";

type FooterProps = {
  footerData: BaseSectionData;
};

export const Footer = ({ footerData: footerData }: FooterProps) => {
  return (
    <footer className="footer-section">
      <div className="footer-content">{footerData.content}</div>
    </footer>
  );
};
