import React from "react";

const Book = (props) => {
  const { title, img, author } = props;
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert("wassup bitches");
  };
  const complexExample = (author) => {
    console.log(author);
  };
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="book" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        Wassup?
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        More Complex Example
      </button>
      {console.log(props)}
    </article>
  );
};

export default Book;
