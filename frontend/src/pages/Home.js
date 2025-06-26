import { useState } from 'react';

const StoryverseLogo = () => (
    <div className="logo-container">
        <svg width="120" height="120" viewBox="0 0 120 120" className="logo">
            {/* Background Circle with Gradient */}
            <defs>
                <linearGradient id="backgroundGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#667eea" />
                    <stop offset="100%" stopColor="#764ba2" />
                </linearGradient>
                <linearGradient id="bookGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f093fb" />
                    <stop offset="100%" stopColor="#f5576c" />
                </linearGradient>
                <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>

            <circle cx="60" cy="60" r="55" fill="url(#backgroundGradient)" className="logo-bg" />

            {/* Open Book */}
            <g className="book-container">
                {/* Book Pages */}
                <path d="M35 45 L35 75 Q35 80 40 80 L55 80 Q60 75 60 70 L60 45 Q60 40 55 40 L40 40 Q35 40 35 45 Z"
                    fill="white" opacity="0.9" />
                <path d="M60 45 L60 75 Q60 80 65 80 L80 80 Q85 80 85 75 L85 45 Q85 40 80 40 L65 40 Q60 40 60 45 Z"
                    fill="white" opacity="0.9" />

                {/* Book Spine */}
                <rect x="58" y="40" width="4" height="40" fill="url(#bookGradient)" />

                {/* Text Lines on Pages */}
                <line x1="40" y1="50" x2="52" y2="50" stroke="#667eea" strokeWidth="1.5" opacity="0.6" />
                <line x1="40" y1="55" x2="50" y2="55" stroke="#667eea" strokeWidth="1.5" opacity="0.6" />
                <line x1="40" y1="60" x2="52" y2="60" stroke="#667eea" strokeWidth="1.5" opacity="0.6" />

                <line x1="68" y1="50" x2="80" y2="50" stroke="#667eea" strokeWidth="1.5" opacity="0.6" />
                <line x1="68" y1="55" x2="78" y2="55" stroke="#667eea" strokeWidth="1.5" opacity="0.6" />
                <line x1="68" y1="60" x2="80" y2="60" stroke="#667eea" strokeWidth="1.5" opacity="0.6" />
            </g>

            {/* Floating Stars/Sparkles */}
            <g className="sparkles">
                <circle cx="25" cy="30" r="2" fill="#f093fb" opacity="0.8">
                    <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="95" cy="35" r="1.5" fill="#667eea" opacity="0.6">
                    <animate attributeName="opacity" values="0.6;0.2;0.6" dur="1.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="20" cy="85" r="1.5" fill="#f5576c" opacity="0.7">
                    <animate attributeName="opacity" values="0.7;0.3;0.7" dur="2.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="90" cy="90" r="2" fill="#764ba2" opacity="0.5">
                    <animate attributeName="opacity" values="0.5;0.1;0.5" dur="3s" repeatCount="indefinite" />
                </circle>
            </g>
        </svg>
    </div>
);

const FeatureCard = ({ icon, title, description, delay }) => (
    <div className="feature-card" style={{ animationDelay: `${delay}ms` }}>
        <div className="feature-icon">{icon}</div>
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
);

const Home = () => {
    const [ isHovered, setIsHovered ] = useState(false);

    return (
        <div className="home">
            {/* Hero Section */}
            <div className="hero-section">
                <div className="hero-content">
                    <StoryverseLogo />
                    <h1 className="hero-title">
                        Welcome to <span className="brand-name">Storyverse</span>
                    </h1>
                    <p className="hero-subtitle">
                        Where readers meet writers — and <span className="highlight">stories come to life</span>
                    </p>

                    <div className="cta-buttons">
                        <button className="btn-primary" onClick={() => window.location.href = '/login'}>
                            Login
                        </button>
                        <button className="btn-secondary" onClick={() => window.location.href = '/register'}>
                            Join Our Universe
                        </button>
                    </div>
                </div>

                {/* Floating Elements */}
                <div className="floating-elements">
                    <div className="floating-book floating-1">📖</div>
                    <div className="floating-book floating-2">✨</div>
                    <div className="floating-book floating-3">📚</div>
                    <div className="floating-book floating-4">🖋️</div>
                </div>
            </div>

            {/* Features Section */}
            <div className="features-section">
                <h2 className="section-title">Discover Your Next Adventure</h2>
                <div className="features-grid">
                    <FeatureCard
                        icon="📚"
                        title="Discover Stories"
                        description="Explore a vast collection of stories from talented writers around the world"
                        delay={100}
                    />
                    <FeatureCard
                        icon="✍️"
                        title="Write & Publish"
                        description="Create your own stories with our intuitive writing tools and share them with readers"
                        delay={200}
                    />
                    <FeatureCard
                        icon="📖"
                        title="Interactive Reading"
                        description="Experience stories like never before with our immersive page-flip reader"
                        delay={300}
                    />
                    <FeatureCard
                        icon="🌟"
                        title="Connect & Grow"
                        description="Join a vibrant community of readers and writers sharing their passion for storytelling"
                        delay={400}
                    />
                </div>
            </div>

            <style jsx>{`
                .home {
                    min-height: 100vh;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    position: relative;
                    overflow-x: hidden;
                }

                .hero-section {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    min-height: 100vh;
                    padding: 2rem;
                    position: relative;
                    text-align: center;
                }

                .hero-content {
                    z-index: 2;
                    max-width: 800px;
                }

                .logo-container {
                    margin-bottom: 2rem;
                    animation: float 3s ease-in-out infinite;
                }

                .logo {
                    filter: drop-shadow(0 10px 20px rgba(0,0,0,0.2));
                    transition: transform 0.3s ease;
                }

                .logo:hover {
                    transform: scale(1.05);
                }

                .logo-bg {
                    animation: pulse 4s ease-in-out infinite;
                }

                .book-container {
                    animation: bookFloat 2s ease-in-out infinite alternate;
                }

                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }

                @keyframes pulse {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.05); }
                }

                @keyframes bookFloat {
                    0% { transform: translateY(0px); }
                    100% { transform: translateY(-3px); }
                }

                .hero-title {
                    font-size: 3.5rem;
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

                .hero-subtitle {
                    font-size: 1.3rem;
                    color: rgba(255,255,255,0.9);
                    margin-bottom: 3rem;
                    line-height: 1.6;
                    animation: slideInUp 1s ease-out 0.2s both;
                }

                .highlight {
                    color: #f093fb;
                    font-weight: 600;
                }

                .cta-buttons {
                    display: flex;
                    gap: 1.5rem;
                    justify-content: center;
                    flex-wrap: wrap;
                    animation: slideInUp 1s ease-out 0.4s both;
                }

                .btn-primary, .btn-secondary {
                    padding: 1rem 2.5rem;
                    font-size: 1.1rem;
                    font-weight: 600;
                    border: none;
                    border-radius: 50px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    text-decoration: none;
                    display: inline-block;
                    position: relative;
                    overflow: hidden;
                }

                .btn-primary {
                    background: linear-gradient(45deg, #f093fb, #f5576c);
                    color: white;
                    box-shadow: 0 4px 15px rgba(240, 147, 251, 0.4);
                }

                .btn-primary:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 25px rgba(240, 147, 251, 0.6);
                }

                .btn-secondary {
                    background: rgba(255,255,255,0.15);
                    color: white;
                    border: 2px solid rgba(255,255,255,0.3);
                    backdrop-filter: blur(10px);
                }

                .btn-secondary:hover {
                    background: rgba(255,255,255,0.25);
                    transform: translateY(-2px);
                    box-shadow: 0 8px 25px rgba(255,255,255,0.2);
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

                .floating-book {
                    position: absolute;
                    font-size: 2rem;
                    opacity: 0.6;
                    animation: floatRandom 6s ease-in-out infinite;
                }

                .floating-1 {
                    top: 20%;
                    left: 10%;
                    animation-delay: 0s;
                }

                .floating-2 {
                    top: 30%;
                    right: 15%;
                    animation-delay: 1s;
                }

                .floating-3 {
                    bottom: 30%;
                    left: 20%;
                    animation-delay: 2s;
                }

                .floating-4 {
                    bottom: 20%;
                    right: 10%;
                    animation-delay: 3s;
                }

                @keyframes floatRandom {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    25% { transform: translateY(-20px) rotate(5deg); }
                    50% { transform: translateY(-10px) rotate(-5deg); }
                    75% { transform: translateY(-30px) rotate(3deg); }
                }

                .features-section {
                    padding: 5rem 2rem;
                    background: rgba(255,255,255,0.05);
                    backdrop-filter: blur(10px);
                }

                .section-title {
                    text-align: center;
                    font-size: 2.5rem;
                    color: white;
                    margin-bottom: 3rem;
                    font-weight: 700;
                }

                .features-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 2rem;
                    max-width: 1200px;
                    margin: 0 auto;
                }

                .feature-card {
                    background: rgba(255,255,255,0.1);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255,255,255,0.2);
                    border-radius: 20px;
                    padding: 2rem;
                    text-align: center;
                    transition: all 0.3s ease;
                    animation: slideInUp 0.8s ease-out both;
                }

                .feature-card:hover {
                    transform: translateY(-10px);
                    background: rgba(255,255,255,0.15);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.2);
                }

                .feature-icon {
                    font-size: 3rem;
                    margin-bottom: 1rem;
                }

                .feature-card h3 {
                    color: white;
                    font-size: 1.3rem;
                    margin-bottom: 1rem;
                    font-weight: 600;
                }

                .feature-card p {
                    color: rgba(255,255,255,0.8);
                    line-height: 1.6;
                    font-size: 0.95rem;
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
                    .hero-title {
                        font-size: 2.5rem;
                    }

                    .hero-subtitle {
                        font-size: 1.1rem;
                        padding: 0 1rem;
                    }

                    .cta-buttons {
                        flex-direction: column;
                        align-items: center;
                    }

                    .btn-primary, .btn-secondary {
                        width: 200px;
                    }

                    .features-grid {
                        grid-template-columns: 1fr;
                        gap: 1.5rem;
                    }

                    .section-title {
                        font-size: 2rem;
                    }
                }

                @media (max-width: 480px) {
                    .hero-title {
                        font-size: 2rem;
                    }

                    .logo {
                        width: 80px;
                        height: 80px;
                    }

                    .floating-book {
                        font-size: 1.5rem;
                    }
                }
            `}</style>
        </div>
    );
};

export default Home;