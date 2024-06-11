import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { BookContext } from "../Context/BookProvider";
import axios from "axios";

function TableRows({ title, author, ISBN_Number, publication_date, id }) {
  const { books, setBooks } = useContext(BookContext);

  let navigate = useNavigate();
  // async function deleteBook(id) {
  //   if (confirm("Are you sure you want to delete this Book?") == true) {
  //     try {
  //       let res = await axios.delete(
  //         `https://65f1a03c034bdbecc76336f5.mockapi.io/Books/${id}`
  //       );
  //       if (res.status == 200) {
  //         setBooks(() => books.filter((el) => el.id !== id));
  //         navigate("/dashboard");
  //         //   console.log(res.data);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   } else {
  //     return;
  //   }
  // }

  async function deleteBook(id) {
    try {
      let res = await axios.delete(
        `https://65f1a03c034bdbecc76336f5.mockapi.io/Books/${id}`
      );

      if (res.status == 200) {
        // handleChangeFlag();
        // deleteUsers(req.Email);

        setBooks(() => books.filter((el) => el.id !== id));
        navigate("/dashboard");
        //   console.log(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <tr>
      <td>{title}</td>
      <td>{author}</td>
      <td>{ISBN_Number}</td>
      <td>{publication_date}</td>
      <td>
        <Link to={`/books/edit/${id}`}>
          <button className="btn btn-success"> Edit</button>
        </Link>{" "}
      </td>
    </tr>
  );
}

export default TableRows;
