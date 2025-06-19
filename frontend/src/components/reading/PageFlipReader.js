import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HTMLFlipBook from 'react-pageflip';
import { fetchVolumesByBook } from '../../services/volumeService';

const Page = ({ content, title }) => (
    <div className="page">
        <h3>{title}</h3>
        <p style={{ whiteSpace: 'pre-wrap' }}>{content}</p>
    </div>
);

const PageFlipReader = () => {
    const { bookId } = useParams();
    const [ volumes, setVolumes ] = useState([]);

    useEffect(() => {
        fetchVolumesByBook(bookId).then(setVolumes).catch(console.error);
    }, [ bookId ]);

    return (
        <div className="reader-container">
            <HTMLFlipBook width={400} height={600} showCover={true}>
                {volumes.map((volume) => (
                    <Page key={volume._id} title={volume.title} content={volume.content} />
                ))}
            </HTMLFlipBook>
        </div>
    );
};

export default PageFlipReader;