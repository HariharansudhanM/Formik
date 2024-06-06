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
    getBooks();
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
          </tr>
        </thead>
        <tbody>
          {books?.map((el, index) => {
            return (
              <TableRows
                key={el.ISBN_Number}
                title={el.title}
                author={el.author}
                ISBN_Number={el.ISBN_Number}
                publication_date={el.publication_date}
              />
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default BookDisplay;
