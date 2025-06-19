import HTMLFlipBook from 'react-pageflip';

const Page = ({ volume }) => (
    <div className="page">
        <h3>{volume.title}</h3>
        <p style={{ whiteSpace: 'pre-wrap' }}>{volume.content}</p>
    </div>
);

const PageFlipWriter = ({ volumes }) => {
    if (!volumes.length) return <p>No volumes to preview.</p>;

    return (
        <div className="writer-preview">
            <HTMLFlipBook width={400} height={600} showCover={true}>
                {volumes.map((v) => (
                    <Page key={v._id} volume={v} />
                ))}
            </HTMLFlipBook>
        </div>
    );
};

export default PageFlipWriter;