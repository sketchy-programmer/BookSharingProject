import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchBookById } from '../../services/bookService';
import { fetchVolumesByBook } from '../../services/volumeService';

const BookDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [ book, setBook ] = useState(null);
    const [ volumes, setVolumes ] = useState([]);

    useEffect(() => {
        fetchBookById(id).then(setBook).catch(console.error);
        fetchVolumesByBook(id).then(setVolumes).catch(console.error);
    }, [ id ]);

    if (!book) return <p>Loading book...</p>;

    return (
        <div>
            <h2>{book.title}</h2>
            <p><strong>Author:</strong> {book.author.username}</p>
            <img src={`http://localhost:5000${book.coverImage}`} alt="cover" width="200" />
            <p><strong>Genre:</strong> {book.genre}</p>
            <p><strong>Summary:</strong> {book.summary}</p>

            <h3>Volumes</h3>
            <ul>
                {volumes.map(v => (
                    <li key={v._id}>{v.title}</li>
                ))}
            </ul>

            {volumes.length > 0 && (
                <button onClick={() => navigate(`/read/${book._id}`)}>
                    Start Reading
                </button>
            )}
        </div>
    );
};

export default BookDetail;