type ResProps = {
  data: Record<string, string>[];
};

const FetchCards = () => {
  return fetch(`https://to-do-list-classes-production.up.railway.app/notes/`, {
    cache: "no-store",
  })
    .then((res) => res.json())
    .then((res) => res.data);
};

export default async function ListOfCards() {
  const cards = await FetchCards();
  console.log("cards", cards);

  return (
    <div className={"flex flex-col gap-3 full"}>
      {cards.map((x: any) => (
        <div
          key={x.title}
          style={{
            background: "white",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            padding: 20,
            borderRadius: "10px",
            gap: 7,
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <p
                style={{
                  fontWeight: 600,
                }}
              >
                {x.title}
              </p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <p>{x.description}</p>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "10px",
              paddingTop: 10,
            }}
          >
            <button
              style={{
                background: "green",
                color: "white",
                padding: 5,
                borderRadius: "5px",
              }}
            >
              Edit
            </button>
            <button
              style={{
                background: "red",
                color: "white",
                padding: 5,
                borderRadius: "5px",
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
