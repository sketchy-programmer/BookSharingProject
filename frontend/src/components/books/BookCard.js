import { Link } from 'react-router-dom';
import { useState } from 'react';

const BookCard = ({ book }) => {
    const [ imageLoaded, setImageLoaded ] = useState(false);
    const [ imageError, setImageError ] = useState(false);

    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    const handleImageError = () => {
        setImageError(true);
    };

    return (
        <div className="book-card">
            <Link to={`/books/${book._id}`}>
                <div className="book-card-image-container">
                    {!imageError ? (
                        <img
                            src={`http://localhost:5000${book.coverImage}`}
                            alt={book.title}
                            onLoad={handleImageLoad}
                            onError={handleImageError}
                            style={{ opacity: imageLoaded ? 1 : 0 }}
                        />
                    ) : (
                        <div className="book-card-placeholder">
                            <div className="placeholder-icon">📚</div>
                            <span>No Cover</span>
                        </div>
                    )}
                    {!imageLoaded && !imageError && (
                        <div className="book-card-loading">
                            <div className="loading-spinner"></div>
                        </div>
                    )}
                </div>
                <div className="book-card-content">
                    <h3>{book.title}</h3>
                    <p className="book-author">by {book.author.username}</p>
                    {book.genre && <span className="book-genre">{book.genre}</span>}
                    {book.summary && (
                        <p className="book-summary">
                            {book.summary.length > 100
                                ? `${book.summary.substring(0, 100)}...`
                                : book.summary
                            }
                        </p>
                    )}
                </div>
                <div className="book-card-overlay">
                    <div className="overlay-content">
                        <span className="read-more">Read More →</span>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default BookCard;