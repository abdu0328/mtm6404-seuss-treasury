import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function BookDetails() {
  const { id } = useParams(); 
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://seussology.info/api/books/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setBook(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching book details: {error.message}</div>;
  }

  return (
    <div>
      {book && (
        <div className="book-details">
          <h1>{book.title}</h1>
          <img
            src={book.image}
            alt={book.title}
            className="book-cover"
          />
          <p>{book.description}</p>
          <p><strong>Published:</strong> {book.year_published}</p>
        </div>
      )}
    </div>
  );
}

export default BookDetails;
