import React, { useContext, useEffect, useState } from "react";
import TopBar from "../Componentes/TopBar";
import SideBar from "../Componentes/SideBar";
import Footer from "../Componentes/Footer";
import { Form } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import Options from "../Componentes/Options";
import axios from "axios";
import { useFormik } from "formik";
import { BookContext } from "../Context/BookProvider";

function BookEdit() {
  const { books, setBooks } = useContext(BookContext);

  const [author, setAuthor] = useState([]);
  const navigate = useNavigate();

  async function getOptions() {
    try {
      let options = await axios.get(
        "https://65f1a03c034bdbecc76336f5.mockapi.io/Authors"
      );
      //   console.log(options);
      setAuthor(() => [...author, ...options.data]);
    } catch (error) {
      console.log(error);
    }
  }
  let { id } = useParams();

  async function getData(id) {
    try {
      let res = await axios.get(
        `https://65f1a03c034bdbecc76336f5.mockapi.io/Books/${id}`
      );

      console.log(res.data);
      let data = res.data;
      setValues({
        id: data.id,
        title: data.title,
        author: data.author,
        ISBN_Number: data.ISBN_Number,
        publication_date: data.publication_date,
      });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData(id);
    getOptions();
  }, []);

  const { touched, errors, values, handleSubmit, handleChange, setValues } =
    useFormik({
      initialValues: {
        id: "",
        title: "",
        author: "",
        ISBN_Number: "",
        publication_date: "",
      },
      validate(values) {
        if (values.title == "") {
          return { title: "Title is required" };
        }
        if (values.ISBN_Number == "") {
          return { ISBN_Number: "ISBN_Number is required" };
        }
        if (values.publication_date == "") {
          return { publication_date: "Title is required" };
        }
      },
      onSubmit(values) {
        let id = values.id;
        try {
          axios.put(
            `https://65f1a03c034bdbecc76336f5.mockapi.io/Books/${id}`,
            values
          );

          //   setBooks(() => {
          //     [...books.filter((el) => el.id !== id), values];
          //   });

          navigate("/dashboard");
        } catch (error) {
          console.log(error);
        }
      },
    });
  ///    Delete Book

  async function deleteBook(id) {
    if (confirm("Are you sure you want to delete") == true) {
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
  }

  return (
    <>
      <TopBar />
      <section className="d-flex">
        <SideBar />
        <div
          style={{ position: "relative", left: "600px", alignSelf: "center" }}
        >
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
              {touched.title && errors.title ? (
                <div style={{ color: "red" }}>{errors.title}</div>
              ) : null}
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
              {touched.ISBN_Number && errors.ISBN_Number ? (
                <div style={{ color: "red" }}>{errors.ISBN_Number}</div>
              ) : null}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Publication Date</Form.Label>
              <Form.Control
                type="text"
                name="publication_date"
                value={values.publication_date}
                onChange={handleChange}
              />
              {touched.publication_date && errors.publication_date ? (
                <div style={{ color: "red" }}>{errors.publication_date}</div>
              ) : null}
            </Form.Group>

            <button className="btn btn-success" type="submit">
              Submit
            </button>
            {"  "}
            <Link className="btn btn-success" to={"/dashboard"}>
              Close
            </Link>
            {"  "}
            <button
              className="btn btn-success"
              type="button"
              onClick={() => deleteBook(id)}
            >
              Delete
            </button>
          </Form>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default BookEdit;
