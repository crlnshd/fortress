import { HeaderData } from "./types";

type HeaderProps = {
  headerData: HeaderData;
};

export const Header = ({ headerData }: HeaderProps) => {
  const { logo, nav } = headerData;

  return (
    <header className="header">
      <img src={logo} alt="Logo" className="logo" />
      <nav>
        <ul className="header-items">
          {nav.map((item) => {
            return (
              <li key={item.name} className="header-item">
                <a href={`#${item.url}`}>{item.name}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};
