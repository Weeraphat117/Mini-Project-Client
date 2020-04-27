import React, { createContext, useState } from 'react';
import uniqid from 'uniqid';

export const BookContext = createContext();

const BookContextProvider = ({ children }) => {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: 'Harry Potter',
      author: 'Joanne Rowling'
    },
    {
      id: 2,
      title: 'Star Wars',
      author: 'George Lucas'
    }
  ]);

  const addBook = book => {
    setBooks([...books, { ...book, id: uniqid() }]);
  };

  const deleteBook = id => {
    setBooks(books.filter(book => book.id !== id));
  };

  return (
    <BookContext.Provider value={{ books, addBook, deleteBook }}>
      {children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;