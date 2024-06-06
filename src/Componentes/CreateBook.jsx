import axios from "axios";
import { useFormik } from "formik";
import React, { useContext, useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { BookContext } from "../Context/BookProvider";
import { Link, useNavigate } from "react-router-dom";
import Options from "./Options";

function CreateBook() {
  const { books, setBooks } = useContext(BookContext);

  const [author, setAuthor] = useState([]);
  const navigate = useNavigate();

  async function getOptions() {
    try {
      let options = await axios.get(
        "https://65f1a03c034bdbecc76336f5.mockapi.io/Authors"
      );
      console.log(options);
      setAuthor(() => [...author, ...options.data]);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getOptions();
  }, []);

  const { values, handleSubmit, handleChange } = useFormik({
    initialValues: {
      title: "",
      author: "",
      ISBN_Number: "",
      publication_date: "",
    },
    validate(values) {
      if (values.title == "") {
        return { title: "Title is required" };
      }
    },
    onSubmit(values) {
      try {
        axios.post("https://65f1a03c034bdbecc76336f5.mockapi.io/Books", values);

        setBooks(() => [...books, values]);
        navigate("/dashboard");
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter title"
          name="title"
          value={values.title}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Author</Form.Label>
        <Form.Select
          aria-label="Default select example"
          name="author"
          value={values.author}
          onChange={handleChange}
        >
          {author.map((el) => {
            return <Options key={el.id} author={el.name} />;
          })}
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>ISBN Number</Form.Label>
        <Form.Control
          type="number"
          name="ISBN_Number"
          value={values.ISBN_Number}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Publication Date</Form.Label>
        <Form.Control
          type="text"
          name="publication_date"
          value={values.publication_date}
          onChange={handleChange}
        />
      </Form.Group>

      <button className="btn btn-success" type="submit">
        Submit
      </button>
      {"  "}
      <Link className="btn btn-success" to={"/dashboard"}>
        Close
      </Link>
    </Form>
  );
}

export default CreateBook;
