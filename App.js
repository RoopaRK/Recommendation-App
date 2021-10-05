import React from "react";
import "./styles.css";
import { useState } from "react";

const bookDB = {
  INDIA: [
    { name: "Bangalore", rating: "4/5" },
    { name: "Pune", rating: "3.5/5" }
  ],

  USA: [
    {
      name: "NewYork",
      rating: "5/5"
    },
    {
      name: "Washington DC",
      rating: "4.5/5"
    }
  ],
  AUSTRALIA: [
    {
      name: "Sydney",
      rating: "3.5/5"
    },
    {
      name: "Melbourne",
      rating: "5/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("AUSTRALIA");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> ✈🛩 TOP TRAVEL PLACES . </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favorite Travel spots of India,Usa,Australia. Select a genre
        to get started{" "}
      </p>

      <div>
        {Object.keys(bookDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {bookDB[selectedGenre].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "smaller" }}> {book.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
