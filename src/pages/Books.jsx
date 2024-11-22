import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Books() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://seussology.info/api/books')
      .then((response) => response.json())
      .then((data) => {
        setBooks(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching books: {error.message}</div>;
  }

  return (
    <div>
      
      <div className="books-container">
      <h1>Books</h1>
        {books.map((book) => (
          <div key={book.id} className="book-item">
            <Link to={`/books/${book.id}`}>
              <img
                src={book.image}
                alt={book.title}
                className="book-cover"
              />
            </Link>
            <h3>{book.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Books;
