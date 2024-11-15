import { Routes, Route, Link } from 'react-router-dom';
import Books from './pages/Books';
import BookDetails from './pages/BookDetails';
import Quotes from './pages/Quotes';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/books">Books</Link>
        <Link to="/quotes">Quotes</Link>
      </nav>
      <Routes>
        <Route path="/" element={<h1>Welcome to Seuss Treasury</h1>} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/:id" element={<BookDetails />} />
        <Route path="/quotes" element={<Quotes />} />
      </Routes>
    </div>
  );
}

export default App;
