import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import { books } from "./Books";
import Book from "./Book";

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        console.log(book);
        return <Book key={book.img} {...book} />;
      })}
    </section>
  );
}

ReactDom.render(<BookList />, document.getElementById("root"));
