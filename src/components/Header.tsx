import data from "../header.json";

export function Header() {
  return (
    <>
      {data.map((item) => {
        return (
          <div key={item.id}>
            <p>{item.name}</p>
          </div>
        );
      })}
    </>
  );
}
