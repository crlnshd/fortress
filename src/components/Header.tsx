import { HeaderData } from "./types";

type HeaderProps = {
  header: HeaderData;
};

export const Header = ({ header }: HeaderProps) => {
  return (
    <header className="header">
      <img src={header.logo} alt="Logo" className="logo" />

      <nav>
        <ul className="header-items">
          {header.nav.map((item) => (
            <li key={item.name} className="header-item">
              <a href={item.url}>{item.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
