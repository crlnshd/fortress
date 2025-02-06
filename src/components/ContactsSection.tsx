import { forwardRef } from "react";
import { BaseSectionData } from "./types";

type ContactsSectionProps = {
  contactsSectionData: BaseSectionData;
};

const BREAK_BEFORE_WORDS = [
  "Адреса",
  "Телефон",
  "Електронна",
  "Графік",
  "Завітайте",
];
const LIST_BEFORE_WORDS = ["Адреса", "Телефон", "Електронна", "Графік"];

const formatContent = (content: string) => {
  return content
    .replace(new RegExp(`(${BREAK_BEFORE_WORDS.join("|")})`, "g"), "\n$1")
    .replace(new RegExp(`(${LIST_BEFORE_WORDS.join("|")})`, "g"), "● $1");
};

export const ContactsSection = forwardRef<HTMLDivElement, ContactsSectionProps>(
  ({ contactsSectionData }, ref) => {
    const { content } = contactsSectionData;

    const formattedContent = formatContent(content);

    return (
      <section ref={ref} id="contacts" className="contacts-section">
        <p className="p-contacts-title">Контакти</p>
        <div className="rectangle-contacts"></div>

        <p className="p-contacts-text">
          {formattedContent.split("\n").map((line, index) => (
            <span key={index}>
              {line.trim()}
              <br />
            </span>
          ))}
        </p>

        <div className="rectangle-footer"></div>
      </section>
    );
  }
);
