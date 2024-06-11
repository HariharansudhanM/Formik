import axios from "axios";
import React, { useContext, useEffect } from "react";
import { BookContext } from "../Context/BookProvider";
import TableRows from "./TableRows";

function BookDisplay() {
  const { books, setBooks } = useContext(BookContext);
  async function getBooks() {
    let result = await axios.get(
      "https://65f1a03c034bdbecc76336f5.mockapi.io/Books"
    );
    let data = result.data;
    setBooks(() => [...books, ...data]);
  }
  useEffect(() => {
    if (!(books.length >= 1)) {
      getBooks();
    }
  }, []);
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Author</th>
            <th scope="col">ISBN Number</th>
            <th scope="col">Publication date</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {books?.map((el, index) => {
            return (
              <TableRows
                key={el.id}
                title={el.title}
                author={el.author}
                ISBN_Number={el.ISBN_Number}
                publication_date={el.publication_date}
                id={el.id}
              />
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default BookDisplay;
