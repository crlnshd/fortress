import { HeaderData } from "./types";

type HeaderProps = {
  headerData: HeaderData;
  sectionRefs: { [key: string]: React.RefObject<HTMLDivElement> };
};

export const Header = ({ headerData, sectionRefs }: HeaderProps) => {
  const { logo, nav } = headerData;
  const handleScroll = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    targetId: string
  ) => {
    event.preventDefault();

    const targetElement = sectionRefs[targetId]?.current;

    if (!targetElement) return;

    targetElement.scrollIntoView();
  };

  return (
    <header className="header">
      <img src={logo} alt="Logo" className="logo" />
      <nav>
        <ul className="header-items">
          {nav.map((item) => {
            const sectionId = item.url.replace("#", "");
            return (
              <li key={item.name} className="header-item">
                <a href={item.url} onClick={(e) => handleScroll(e, sectionId)}>
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};
