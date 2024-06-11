import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BookContext } from "../Context/BookProvider";
import { useContext } from "react";

export function Button({
  children,
  handle,
  el,
  buttonState,
  toggle,
  target,
  id,
}) {
  //Initializing State}

  //   const { books, setBooks } = useContext(BookContext);
  //   //Declaring handlers
  //   let navigate = useNavigate();
  //   async function deleteBook(id) {
  //     if (confirm("Are you sure you want to delete this Book?") == true) {
  //       try {
  //         let res = await axios.delete(
  //           `https://65f1a03c034bdbecc76336f5.mockapi.io/Books/${id}`
  //         );
  //         if (res.status == 200) {
  //           setBooks(() => books.filter((el) => el.id !== id));
  //           navigate("/dashboard");
  //           //   console.log(res.data);
  //         }
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     } else {
  //       return;
  //     }
  //   }

  //Return JSX
  return (
    <>
      <button
        type="button"
        className="btn btn-success"
        // onClick={deleteBook(id)}
        disabled={buttonState}
      >
        {children}
      </button>
    </>
  );
}
