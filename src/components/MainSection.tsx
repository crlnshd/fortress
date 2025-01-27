import { useState, useEffect } from "react";

interface Image {
  id_image: string;
  url_image: string;
}

interface Item {
  id: number;
  content: string;
  images: Image[];
}

export function MainSection() {
  const [data, setData] = useState<Item[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const url = "https://api.jsonbin.io/v3/b/6794d9c7ad19ca34f8f42f26";
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
      <header className="main-section">
        {error && <p>Error: {error}</p>}
        <ul className="main-items">
          {data.map((item, index) => (
            <li
              key={item.id}
              className={`main-item main-item-${item.id} ${
                index === 0 ? "first-section" : ""
              }`}
            >
              <div className={`content-wrapper content-wrapper-${item.id}`}>
                {item.images[0] && (
                  <img
                    src={item.images[0].url_image}
                    alt={`Image ${item.images[0].id_image}`}
                    className={`image image-${item.images[0].id_image}`}
                    data-image-id={item.images[0].id_image}
                  />
                )}
                <p className={`p p-${item.id}`}>{item.content}</p>
                {item.images[1] && (
                  <img
                    src={item.images[1].url_image}
                    alt={`Image ${item.images[1].id_image}`}
                    className={`image image-${item.images[1].id_image}`}
                    data-image-id={item.images[1].id_image}
                  />
                )}
              </div>
            </li>
          ))}
        </ul>
      </header>
    </>
  );
}
