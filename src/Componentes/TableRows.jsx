import React from "react";

function TableRows({ title, author, ISBN_Number, publication_date }) {
  return (
    <tr>
      <td>{title}</td>
      <td>{author}</td>
      <td>{ISBN_Number}</td>
      <td>{publication_date}</td>
    </tr>
  );
}

export default TableRows;
