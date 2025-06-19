import { useEffect, useState } from 'react';
import { fetchBooks } from '../../services/bookService';
import BookCard from './BookCard';

const BookList = () => {
    const [ books, setBooks ] = useState([]);

    useEffect(() => {
        fetchBooks().then(setBooks).catch(console.error);
    }, []);

    return (
        <div className="book-list">
            {books.map(book => <BookCard key={book._id} book={book} />)}
        </div>
    );
};

export default BookList;