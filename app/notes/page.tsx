import AddNoteButton from "../components/AddNote";
import ListOfCards from "./ListOfCards";

export default function Notes() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-1 px-10 pb-10 mt-2">
      <h1
        style={{
          fontSize: "30px",
          color: "white",
        }}
      >
        Welcome Nachito
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyItems: "center",
            alignItems: "center",
            gap: 10,
          }}
        >
          <p>Create a task</p>
        </div>
        <AddNoteButton />
      </div>
      <ListOfCards />
    </main>
  );
}
