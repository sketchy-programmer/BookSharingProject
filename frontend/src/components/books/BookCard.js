import { Link } from 'react-router-dom';

const BookCard = ({ book }) => (
    <div className="book-card">
        <Link to={`/books/${book._id}`}>
            <img src={`http://localhost:5000${book.coverImage}`} alt={book.title} />
            <h3>{book.title}</h3>
            <p>by {book.author.username}</p>
        </Link>
    </div>
);

export default BookCard;