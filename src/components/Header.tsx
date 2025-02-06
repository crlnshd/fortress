import { HeaderData } from "./types";

type HeaderProps = {
  headerData: HeaderData;
};

export const Header = ({ headerData }: HeaderProps) => {
  const { logo, nav } = headerData;
  const handleScroll = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    targetId: string
  ) => {
    event.preventDefault();

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
      });
    }
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
