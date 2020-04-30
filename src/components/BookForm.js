import React, { useState } from 'react';
import { db } from '../firebase';

const BookForm = () => {

  const [book, setBook] = useState({
    title: '',
    author: ''
  });

  const handleSubmit = e => {
    e.preventDefault();
    db.collection('books').add(book);
    setBook({
      title: '',
      author: ''
    });
  };

  const handleChange = e => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  return (
    <div className='section'>
      <div className='container'>
        <h6>Add Book</h6>
        <form onSubmit={handleSubmit}>
          <div className='input-field'>
            <input
              type='text'
              id='title'
              name='title'
              value={book.title}
              onChange={handleChange}
              placeholder='e.g. Tom and Jerry'
              className='validate'
              required
            />
            <label className='active' htmlFor='title'>
              Title
            </label>
          </div>
          <div className='input-field'>
            <input
              type='text'
              id='author'
              name='author'
              value={book.author}
              onChange={handleChange}
              placeholder='e.g. Gene Deitch'
              className='validate'
              required
            />
            <label className='active' htmlFor='author'>
              Author
            </label>
          </div>
          <div className='input-field center'>
            <button
              type='submit'
              className='btn waves-effect waves-light amber darken-2'>
              <i className='material-icons right'>add_circle</i>Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookForm;