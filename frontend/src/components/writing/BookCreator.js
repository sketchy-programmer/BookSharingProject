import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createBook } from '../../services/bookService';

const WritingLogo = () => (
    <div className="writing-logo-container">
        <svg width="100" height="100" viewBox="0 0 100 100" className="writing-logo">
            <defs>
                <linearGradient id="penGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f093fb" />
                    <stop offset="100%" stopColor="#f5576c" />
                </linearGradient>
                <linearGradient id="paperGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="100%" stopColor="#f8f9fa" />
                </linearGradient>
            </defs>

            {/* Paper Background */}
            <rect x="20" y="15" width="60" height="70" rx="5" fill="url(#paperGradient)" 
                  stroke="#e9ecef" strokeWidth="2" className="paper-bg" />
            
            {/* Paper Lines */}
            <line x1="25" y1="25" x2="75" y2="25" stroke="#dee2e6" strokeWidth="1" opacity="0.5" />
            <line x1="25" y1="35" x2="70" y2="35" stroke="#dee2e6" strokeWidth="1" opacity="0.5" />
            <line x1="25" y1="45" x2="75" y2="45" stroke="#dee2e6" strokeWidth="1" opacity="0.5" />
            <line x1="25" y1="55" x2="65" y2="55" stroke="#dee2e6" strokeWidth="1" opacity="0.5" />
            
            {/* Writing on Paper */}
            <line x1="25" y1="25" x2="50" y2="25" stroke="url(#penGradient)" strokeWidth="2" opacity="0.8" />
            <line x1="25" y1="35" x2="45" y2="35" stroke="url(#penGradient)" strokeWidth="2" opacity="0.8" />
            <line x1="25" y1="45" x2="55" y2="45" stroke="url(#penGradient)" strokeWidth="2" opacity="0.8" />
            
            {/* Fountain Pen */}
            <g className="pen-container">
                <rect x="60" y="50" width="25" height="3" rx="1.5" fill="url(#penGradient)" 
                      transform="rotate(45 72.5 51.5)" />
                <circle cx="58" cy="52" r="2" fill="#f5576c" />
                <path d="M56 54 L54 56 L55 57 L57 55 Z" fill="url(#penGradient)" />
            </g>
            
            {/* Sparkles */}
            <circle cx="15" cy="20" r="1.5" fill="#f093fb" opacity="0.8">
                <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle cx="85" cy="30" r="1" fill="#667eea" opacity="0.6">
                <animate attributeName="opacity" values="0.6;0.2;0.6" dur="1.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="90" cy="70" r="1.5" fill="#f5576c" opacity="0.7">
                <animate attributeName="opacity" values="0.7;0.3;0.7" dur="2.5s" repeatCount="indefinite" />
            </circle>
        </svg>
    </div>
);

const BookCreator = () => {
    const [form, setForm] = useState({ title: '', summary: '', genre: '' });
    const [coverImage, setCoverImage] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
    const handleFileChange = e => setCoverImage(e.target.files[0]);

    const handleSubmit = async e => {
        e.preventDefault();
        setIsSubmitting(true);
        
        const formData = new FormData();
        for (let key in form) formData.append(key, form[key]);
        if (coverImage) formData.append('coverImage', coverImage);

        try {
            const book = await createBook(formData);
            navigate(`/books/${book._id}`);
        } catch (err) {
            alert('Error creating book');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="writing-page">
            {/* Hero Section */}
            <div className="writing-hero">
                <div className="writing-hero-content">
                    <WritingLogo />
                    <h1 className="writing-title">
                        Create Your <span className="brand-name">Masterpiece</span>
                    </h1>
                    <p className="writing-subtitle">
                        Transform your ideas into <span className="highlight">extraordinary stories</span>
                    </p>
                </div>
                
                {/* Floating Writing Elements */}
                <div className="floating-elements">
                    <div className="floating-element floating-1">✍️</div>
                    <div className="floating-element floating-2">📝</div>
                    <div className="floating-element floating-3">💡</div>
                    <div className="floating-element floating-4">🎨</div>
                    <div className="floating-element floating-5">📖</div>
                </div>
            </div>

            {/* Book Creator Form */}
            <div className="creator-section">
                <div className="creator-container">
                    <h2 className="creator-title">Bring Your Story to Life</h2>
                    
                    <form onSubmit={handleSubmit} className="creator-form">
                        <div className="form-group">
                            <label htmlFor="title" className="form-label">Book Title</label>
                            <input
                                id="title"
                                name="title"
                                type="text"
                                placeholder="Enter your book title..."
                                value={form.title}
                                onChange={handleChange}
                                className="form-input"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="genre" className="form-label">Genre</label>
                            <input
                                id="genre"
                                name="genre"
                                type="text"
                                placeholder="Fantasy, Romance, Mystery..."
                                value={form.genre}
                                onChange={handleChange}
                                className="form-input"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="summary" className="form-label">Book Summary</label>
                            <textarea
                                id="summary"
                                name="summary"
                                placeholder="Tell readers what your story is about..."
                                value={form.summary}
                                onChange={handleChange}
                                className="form-textarea"
                                rows="4"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="cover" className="form-label">Cover Image</label>
                            <div className="file-upload-wrapper">
                                <input
                                    id="cover"
                                    type="file"
                                    onChange={handleFileChange}
                                    className="file-input"
                                    accept="image/*"
                                    required
                                />
                                <label htmlFor="cover" className="file-label">
                                    <span className="file-icon">📁</span>
                                    {coverImage ? coverImage.name : 'Choose cover image'}
                                </label>
                            </div>
                        </div>

                        <button 
                            type="submit" 
                            className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <>
                                    <span className="spinner"></span>
                                    Creating...
                                </>
                            ) : (
                                <>
                                    <span className="btn-icon">✨</span>
                                    Create Book
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>

            <style jsx>{`
                .writing-page {
                    min-height: 100vh;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    position: relative;
                    overflow-x: hidden;
                }

                .writing-hero {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    min-height: 60vh;
                    padding: 2rem;
                    position: relative;
                    text-align: center;
                }

                .writing-hero-content {
                    z-index: 2;
                    max-width: 800px;
                }

                .writing-logo-container {
                    margin-bottom: 2rem;
                    animation: float 3s ease-in-out infinite;
                }

                .writing-logo {
                    filter: drop-shadow(0 10px 20px rgba(0,0,0,0.2));
                    transition: transform 0.3s ease;
                }

                .writing-logo:hover {
                    transform: scale(1.05);
                }

                .paper-bg {
                    animation: paperFloat 2s ease-in-out infinite alternate;
                }

                .pen-container {
                    animation: penWrite 3s ease-in-out infinite;
                }

                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }

                @keyframes paperFloat {
                    0% { transform: translateY(0px); }
                    100% { transform: translateY(-2px); }
                }

                @keyframes penWrite {
                    0%, 100% { transform: translateX(0px); }
                    50% { transform: translateX(-2px); }
                }

                .writing-title {
                    font-size: 3rem;
                    font-weight: 800;
                    color: white;
                    margin-bottom: 1rem;
                    text-shadow: 0 4px 8px rgba(0,0,0,0.3);
                    animation: slideInUp 1s ease-out;
                }

                .brand-name {
                    background: linear-gradient(45deg, #f093fb, #f5576c);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }

                .writing-subtitle {
                    font-size: 1.2rem;
                    color: rgba(255,255,255,0.9);
                    margin-bottom: 2rem;
                    line-height: 1.6;
                    animation: slideInUp 1s ease-out 0.2s both;
                }

                .highlight {
                    color: #f093fb;
                    font-weight: 600;
                }

                .floating-elements {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    pointer-events: none;
                    z-index: 1;
                }

                .floating-element {
                    position: absolute;
                    font-size: 1.5rem;
                    opacity: 0.4;
                    animation: floatRandom 6s ease-in-out infinite;
                }

                .floating-1 {
                    top: 15%;
                    left: 10%;
                    animation-delay: 0s;
                }

                .floating-2 {
                    top: 25%;
                    right: 15%;
                    animation-delay: 1s;
                }

                .floating-3 {
                    top: 35%;
                    left: 20%;
                    animation-delay: 2s;
                }

                .floating-4 {
                    top: 45%;
                    right: 20%;
                    animation-delay: 3s;
                }

                .floating-5 {
                    top: 55%;
                    left: 15%;
                    animation-delay: 4s;
                }

                @keyframes floatRandom {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    25% { transform: translateY(-15px) rotate(3deg); }
                    50% { transform: translateY(-8px) rotate(-3deg); }
                    75% { transform: translateY(-20px) rotate(2deg); }
                }

                .creator-section {
                    background: rgba(255,255,255,0.05);
                    backdrop-filter: blur(10px);
                    padding: 4rem 2rem;
                    position: relative;
                }

                .creator-container {
                    max-width: 600px;
                    margin: 0 auto;
                }

                .creator-title {
                    text-align: center;
                    font-size: 2.2rem;
                    color: white;
                    margin-bottom: 3rem;
                    font-weight: 700;
                    animation: slideInUp 0.8s ease-out;
                }

                .creator-form {
                    background: rgba(255,255,255,0.1);
                    backdrop-filter: blur(15px);
                    border: 1px solid rgba(255,255,255,0.2);
                    border-radius: 20px;
                    padding: 2.5rem;
                    animation: slideInUp 0.8s ease-out 0.2s both;
                }

                .form-group {
                    margin-bottom: 2rem;
                }

                .form-label {
                    display: block;
                    color: white;
                    font-weight: 600;
                    margin-bottom: 0.5rem;
                    font-size: 1rem;
                }

                .form-input, .form-textarea {
                    width: 100%;
                    padding: 1rem 1.5rem;
                    border: 2px solid rgba(255,255,255,0.2);
                    border-radius: 15px;
                    background: rgba(255,255,255,0.1);
                    color: white;
                    font-size: 1rem;
                    transition: all 0.3s ease;
                    backdrop-filter: blur(10px);
                }

                .form-input:focus, .form-textarea:focus {
                    outline: none;
                    border-color: #f093fb;
                    background: rgba(255,255,255,0.15);
                    box-shadow: 0 0 0 3px rgba(240, 147, 251, 0.2);
                }

                .form-input::placeholder, .form-textarea::placeholder {
                    color: rgba(255,255,255,0.6);
                }

                .form-textarea {
                    resize: vertical;
                    min-height: 120px;
                }

                .file-upload-wrapper {
                    position: relative;
                }

                .file-input {
                    position: absolute;
                    opacity: 0;
                    width: 100%;
                    height: 100%;
                    cursor: pointer;
                }

                .file-label {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 1rem 1.5rem;
                    border: 2px dashed rgba(255,255,255,0.3);
                    border-radius: 15px;
                    background: rgba(255,255,255,0.05);
                    color: rgba(255,255,255,0.8);
                    cursor: pointer;
                    transition: all 0.3s ease;
                    backdrop-filter: blur(10px);
                }

                .file-label:hover {
                    border-color: #f093fb;
                    background: rgba(255,255,255,0.1);
                }

                .file-icon {
                    font-size: 1.2rem;
                }

                .submit-btn {
                    width: 100%;
                    padding: 1.2rem 2rem;
                    border: none;
                    border-radius: 15px;
                    background: linear-gradient(45deg, #f093fb, #f5576c);
                    color: white;
                    font-size: 1.1rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.5rem;
                    box-shadow: 0 4px 15px rgba(240, 147, 251, 0.4);
                }

                .submit-btn:hover:not(:disabled) {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 25px rgba(240, 147, 251, 0.6);
                }

                .submit-btn:disabled {
                    opacity: 0.7;
                    cursor: not-allowed;
                }

                .submit-btn.submitting {
                    background: linear-gradient(45deg, #c471d1, #d14b64);
                }

                .btn-icon {
                    font-size: 1.1rem;
                }

                .spinner {
                    width: 18px;
                    height: 18px;
                    border: 2px solid rgba(255,255,255,0.3);
                    border-top: 2px solid white;
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                }

                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }

                @keyframes slideInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                /* Responsive Design */
                @media (max-width: 768px) {
                    .writing-title {
                        font-size: 2.2rem;
                    }

                    .writing-subtitle {
                        font-size: 1.1rem;
                        padding: 0 1rem;
                    }

                    .creator-form {
                        padding: 2rem;
                    }

                    .creator-title {
                        font-size: 1.8rem;
                    }

                    .floating-element {
                        font-size: 1.2rem;
                    }
                }

                @media (max-width: 480px) {
                    .writing-title {
                        font-size: 1.8rem;
                    }

                    .writing-logo {
                        width: 80px;
                        height: 80px;
                    }

                    .creator-form {
                        padding: 1.5rem;
                    }

                    .form-input, .form-textarea {
                        padding: 0.8rem 1rem;
                    }
                }
            `}</style>
        </div>
    );
};

export default BookCreator;