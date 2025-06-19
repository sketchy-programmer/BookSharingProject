import { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { fetchBooks } from '../services/bookService';
import { Link } from 'react-router-dom';

const WriterDashboard = () => {
    const { user } = useAuth();
    const [ books, setBooks ] = useState([]);

    useEffect(() => {
        fetchBooks().then((res) => {
            setBooks(res.filter((book) => book.author._id === user._id));
        });
    }, [ user ]);

    return (
        <div>
            <h1>Your Stories</h1>
            <Link to="/write">+ Create New Book</Link>
            <ul>
                {books.map((book) => (
                    <li key={book._id}>
                        <Link to={`/write/manage/${book._id}`}>{book.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default WriterDashboard;