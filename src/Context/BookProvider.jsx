import React, { createContext, useState } from "react";
export const BookContext = createContext();
function BookProvider({ children }) {
  const [books, setBooks] = useState([]);
  return (
    <BookContext.Provider value={{ books, setBooks }}>
      {children}
    </BookContext.Provider>
  );
}

export default BookProvider;
