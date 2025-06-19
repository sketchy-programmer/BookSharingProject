import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createBook } from '../../services/bookService';

const BookCreator = () => {
    const [ form, setForm ] = useState({ title: '', summary: '', genre: '' });
    const [ coverImage, setCoverImage ] = useState(null);
    const navigate = useNavigate();

    const handleChange = e => setForm({ ...form, [ e.target.name ]: e.target.value });
    const handleFileChange = e => setCoverImage(e.target.files[ 0 ]);

    const handleSubmit = async e => {
        e.preventDefault();
        const formData = new FormData();
        for (let key in form) formData.append(key, form[ key ]);
        if (coverImage) formData.append('coverImage', coverImage);

        try {
            const book = await createBook(formData);
            navigate(`/books/${book._id}`);
        } catch (err) {
            alert('Error creating book');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="title" placeholder="Title" onChange={handleChange} required />
            <input name="genre" placeholder="Genre" onChange={handleChange} />
            <textarea name="summary" placeholder="Summary" onChange={handleChange} />
            <input type="file" onChange={handleFileChange} required />
            <button type="submit">Create Book</button>
        </form>
    );
};

export default BookCreator;