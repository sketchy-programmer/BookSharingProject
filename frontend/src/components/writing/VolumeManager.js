import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchBookById } from '../../services/bookService';
import { fetchVolumesByBook, createVolume } from '../../services/volumeService';

const VolumeManager = () => {
    const { bookId } = useParams();
    const [ book, setBook ] = useState(null);
    const [ volumes, setVolumes ] = useState([]);
    const [ form, setForm ] = useState({ title: '', content: '', order: 1 });

    useEffect(() => {
        fetchBookById(bookId).then(setBook);
        fetchVolumesByBook(bookId).then(setVolumes);
    }, [ bookId ]);

    const handleChange = (e) =>
        setForm((prev) => ({ ...prev, [ e.target.name ]: e.target.value }));

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newVolume = await createVolume(bookId, form);
            setVolumes([ ...volumes, newVolume ]);
            setForm({ title: '', content: '', order: form.order + 1 });
        } catch (err) {
            alert('Failed to create volume');
        }
    };

    return (
        <div>
            <h2>Manage Volumes for {book?.title}</h2>
            <form onSubmit={handleSubmit}>
                <input name="title" placeholder="Volume Title" onChange={handleChange} value={form.title} />
                <textarea name="content" placeholder="Write here..." onChange={handleChange} value={form.content} />
                <input name="order" type="number" placeholder="Order" onChange={handleChange} value={form.order} />
                <button type="submit">Add Volume</button>
            </form>

            <h3>Existing Volumes</h3>
            <ul>
                {volumes.map((v) => (
                    <li key={v._id}>
                        {v.order}. {v.title}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default VolumeManager;