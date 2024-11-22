import { useState, useEffect } from 'react';

function Quotes() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://seussology.info/api/quotes/random/10')
      .then((response) => response.json())
      .then((data) => {
        setQuotes(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading quotes...</div>;
  }

  if (error) {
    return <div>Error fetching quotes: {error.message}</div>;
  }

  return (
    <div>
      <h1>Quotes</h1>
      <ul className='quote-container'>
        {quotes.map((quote, index) => (
          <li key={quote.id} className="quote-item">
            <p className="quote-text">"{quote.text}"</p>
            <p className="quote-author">- {quote.book.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Quotes;
