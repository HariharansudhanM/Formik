import React from "react";

function Options({ author }) {
  return (
    <>
      <option value={author}>{author}</option>
    </>
  );
}

export default Options;
