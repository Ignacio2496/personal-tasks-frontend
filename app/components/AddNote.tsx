"use client";

import { useState } from "react";
import Modal from "./Modal";

export default function AddNoteButton() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "30px",
          height: "30px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "15px",
          borderRadius: "10px",
          background: "white",
        }}
      >
        <p>+</p>
      </button>
      <Modal open={open} setOpen={setOpen} />
    </div>
  );
}
