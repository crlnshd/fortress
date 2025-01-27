import { useState, useEffect } from "react";

interface Item {
  id: number;
  name?: string;
}
interface Item2 {
  id: number;
  url_image?: string;
}

type HeaderData = Item | Item2;

export function Header() {
  const [data, setData] = useState<HeaderData[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const url = "https://api.jsonbin.io/v3/b/679380cfad19ca34f8f3b180";
      const accessKey =
        "$2a$10$iUanowfhmUBtkx74LhKiYO33hawb2vpwitJkP/6SB8JUWNMkAyN5.";
      const headers = {
        "X-ACCESS-KEY": accessKey,
      };

      try {
        const response = await fetch(url, { headers });
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();

        if (Array.isArray(json)) {
          setData(json);
        } else if (json.record && Array.isArray(json.record)) {
          setData(json.record);
        } else {
          console.error("Unexpected data structure: ", json);
          setData([]);
        }
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("unknown error");
        }
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <header className="header">
        {error && <p>Error: {error}</p>}
        {data
          .filter((item) => "url_image" in item && item.url_image)
          .map((item) => (
            <img
              key={item.id}
              src={(item as Item2).url_image}
              alt={`Logo ${item.id}`}
              className={`logo-${item.id} ${item.id === 7 ? "logo" : ""}`}
            />
          ))}

        <ul className="header-items">
          {data
            .filter((item) => "name" in item && item.name)
            .map((item) => (
              <li key={item.id} className="header-item">
                {(item as Item).name}
              </li>
            ))}
        </ul>
      </header>
    </>
  );
}
