import { SectionData } from "./types";

type ContactsSectionProps = {
  contactsSectionData: SectionData;
};

export const ContactsSection = ({
  contactsSectionData,
}: ContactsSectionProps) => {
  if (!contactsSectionData || !contactsSectionData.content) return null;

  const breakBeforeWords = [
    "Адреса",
    "Телефон",
    "Електронна",
    "Графік",
    "Завітайте",
  ];
  const listBeforeWords = ["Адреса", "Телефон", "Електронна", "Графік"];

  let formattedContent = contactsSectionData.content.replace(
    new RegExp(`(${breakBeforeWords.join("|")})`, "g"),
    "\n$1"
  );

  formattedContent = formattedContent.replace(
    new RegExp(`(${listBeforeWords.join("|")})`, "g"),
    "● $1"
  );

  return (
    <section className="contacts-section">
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
};
