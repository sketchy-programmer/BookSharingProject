import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../services/auth';
import { useAuth } from '../../contexts/AuthContext';
import '../../styles/Login.css'; // Assuming you have a CSS file for styles

// Custom logo component for Storyverse

const StoryverseLogo = () => (
    <div className="logo-container">
        <svg width="80" height="80" viewBox="0 0 120 120" className="logo">
            <defs>
                <linearGradient id="backgroundGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#667eea" />
                    <stop offset="100%" stopColor="#764ba2" />
                </linearGradient>
                <linearGradient id="bookGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f093fb" />
                    <stop offset="100%" stopColor="#f5576c" />
                </linearGradient>
            </defs>

            <circle cx="60" cy="60" r="55" fill="url(#backgroundGradient)" className="logo-bg" />

            <g className="book-container">
                <path d="M35 45 L35 75 Q35 80 40 80 L55 80 Q60 75 60 70 L60 45 Q60 40 55 40 L40 40 Q35 40 35 45 Z"
                    fill="white" opacity="0.9" />
                <path d="M60 45 L60 75 Q60 80 65 80 L80 80 Q85 80 85 75 L85 45 Q85 40 80 40 L65 40 Q60 40 60 45 Z"
                    fill="white" opacity="0.9" />
                <rect x="58" y="40" width="4" height="40" fill="url(#bookGradient)" />
                <line x1="40" y1="50" x2="52" y2="50" stroke="#667eea" strokeWidth="1.5" opacity="0.6" />
                <line x1="40" y1="55" x2="50" y2="55" stroke="#667eea" strokeWidth="1.5" opacity="0.6" />
                <line x1="40" y1="60" x2="52" y2="60" stroke="#667eea" strokeWidth="1.5" opacity="0.6" />
                <line x1="68" y1="50" x2="80" y2="50" stroke="#667eea" strokeWidth="1.5" opacity="0.6" />
                <line x1="68" y1="55" x2="78" y2="55" stroke="#667eea" strokeWidth="1.5" opacity="0.6" />
                <line x1="68" y1="60" x2="80" y2="60" stroke="#667eea" strokeWidth="1.5" opacity="0.6" />
            </g>

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

const Login = () => {
    const [ form, setForm ] = useState({ email: '', password: '' });
    const [ isLoading, setIsLoading ] = useState(false);
    const [ error, setError ] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [ e.target.name ]: e.target.value });
        if (error) setError(''); // Clear error when user starts typing
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            const data = await loginUser(form);
            login(data);
            navigate('/dashboard');
        } catch (err) {
            setError('Invalid email or password. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <div className="login-card">
                    <StoryverseLogo />

                    <h1 className="login-title">
                        Welcome Back to <span className="brand-name">Storyverse</span>
                    </h1>

                    <p className="login-subtitle">
                        Continue your <span className="highlight">storytelling journey</span>
                    </p>

                    <form onSubmit={handleSubmit} className="login-form">
                        {error && (
                            <div className="error-message">
                                {error}
                            </div>
                        )}

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Enter your email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="form-input"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                placeholder="Enter your password"
                                value={form.password}
                                onChange={handleChange}
                                required
                                className="form-input"
                            />
                        </div>

                        <button
                            type="submit"
                            className="login-button"
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <span className="loading-spinner">
                                    <span className="spinner"></span>
                                    Signing In...
                                </span>
                            ) : (
                                'Sign In'
                            )}
                        </button>
                    </form>

                    <div className="login-footer">
                        <p>
                            New to Storyverse?{' '}
                            <button
                                onClick={() => navigate('/register')}
                                className="link-button"
                            >
                                Create an account
                            </button>
                        </p>
                    </div>
                </div>
            </div>

            {/* Floating Elements */}
            <div className="floating-elements">
                <div className="floating-book floating-1">📖</div>
                <div className="floating-book floating-2">✨</div>
                <div className="floating-book floating-3">📚</div>
                <div className="floating-book floating-4">🖋️</div>
            </div>

            <style jsx>{`
                // .login-page {
                //     min-height: 100vh;
                //     background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                //     display: flex;
                //     align-items: center;
                //     justify-content: center;
                //     padding: 2rem;
                //     position: relative;
                //     overflow: hidden;
                // }

                // .login-container {
                //     z-index: 2;
                //     width: 100%;
                //     max-width: 400px;
                //     animation: slideInUp 0.8s ease-out;
                // }

                // .login-card {
                //     background: rgba(255, 255, 255, 0.1);
                //     backdrop-filter: blur(20px);
                //     border: 1px solid rgba(255, 255, 255, 0.2);
                //     border-radius: 24px;
                //     padding: 2.5rem;
                //     text-align: center;
                //     box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
                //     transition: all 0.3s ease;
                // }

                // .login-card:hover {
                //     transform: translateY(-5px);
                //     box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3);
                // }

                // .logo-container {
                //     margin-bottom: 1.5rem;
                //     animation: float 3s ease-in-out infinite;
                // }

                // .logo {
                //     filter: drop-shadow(0 8px 16px rgba(0,0,0,0.2));
                //     transition: transform 0.3s ease;
                // }

                // .logo:hover {
                //     transform: scale(1.05);
                // }

                // .logo-bg {
                //     animation: pulse 4s ease-in-out infinite;
                // }

                // .book-container {
                //     animation: bookFloat 2s ease-in-out infinite alternate;
                // }

                // @keyframes float {
                //     0%, 100% { transform: translateY(0px); }
                //     50% { transform: translateY(-8px); }
                // }

                // @keyframes pulse {
                //     0%, 100% { transform: scale(1); }
                //     50% { transform: scale(1.05); }
                // }

                // @keyframes bookFloat {
                //     0% { transform: translateY(0px); }
                //     100% { transform: translateY(-2px); }
                // }

                // .login-title {
                //     font-size: 1.8rem;
                //     font-weight: 700;
                //     color: white;
                //     margin-bottom: 0.5rem;
                //     text-shadow: 0 2px 4px rgba(0,0,0,0.3);
                // }

                // .brand-name {
                //     background: linear-gradient(45deg, #f093fb, #f5576c);
                //     -webkit-background-clip: text;
                //     -webkit-text-fill-color: transparent;
                //     background-clip: text;
                // }

                // .login-subtitle {
                //     font-size: 1rem;
                //     color: rgba(255, 255, 255, 0.8);
                //     margin-bottom: 2rem;
                //     line-height: 1.5;
                // }

                // .highlight {
                //     color: #f093fb;
                //     font-weight: 600;
                // }

                // .login-form {
                //     text-align: left;
                //     margin-bottom: 1.5rem;
                // }

                // .form-group {
                //     margin-bottom: 1.5rem;
                // }

                // .form-group label {
                //     display: block;
                //     color: white;
                //     font-weight: 600;
                //     margin-bottom: 0.5rem;
                //     font-size: 0.9rem;
                // }

                // .form-input {
                //     width: 100%;
                //     padding: 1rem;
                //     background: rgba(255, 255, 255, 0.1);
                //     border: 1px solid rgba(255, 255, 255, 0.2);
                //     border-radius: 12px;
                //     color: white;
                //     font-size: 1rem;
                //     transition: all 0.3s ease;
                //     backdrop-filter: blur(10px);
                // }

                // .form-input::placeholder {
                //     color: rgba(255, 255, 255, 0.6);
                // }

                // .form-input:focus {
                //     outline: none;
                //     border-color: #f093fb;
                //     background: rgba(255, 255, 255, 0.15);
                //     box-shadow: 0 0 0 3px rgba(240, 147, 251, 0.2);
                //     transform: translateY(-2px);
                // }

                // .error-message {
                //     background: rgba(245, 87, 108, 0.15);
                //     border: 1px solid rgba(245, 87, 108, 0.3);
                //     border-radius: 8px;
                //     padding: 0.75rem;
                //     color: #f5576c;
                //     margin-bottom: 1rem;
                //     font-size: 0.9rem;
                //     text-align: center;
                //     animation: shake 0.5s ease-in-out;
                // }

                // @keyframes shake {
                //     0%, 100% { transform: translateX(0); }
                //     25% { transform: translateX(-5px); }
                //     75% { transform: translateX(5px); }
                // }

                // .login-button {
                //     width: 100%;
                //     padding: 1rem;
                //     background: linear-gradient(45deg, #f093fb, #f5576c);
                //     border: none;
                //     border-radius: 12px;
                //     color: white;
                //     font-size: 1.1rem;
                //     font-weight: 600;
                //     cursor: pointer;
                //     transition: all 0.3s ease;
                //     box-shadow: 0 4px 15px rgba(240, 147, 251, 0.4);
                //     position: relative;
                //     overflow: hidden;
                // }

                // .login-button:hover:not(:disabled) {
                //     transform: translateY(-2px);
                //     box-shadow: 0 8px 25px rgba(240, 147, 251, 0.6);
                // }

                // .login-button:active {
                //     transform: translateY(0);
                // }

                // .login-button:disabled {
                //     opacity: 0.7;
                //     cursor: not-allowed;
                // }

                // .loading-spinner {
                //     display: flex;
                //     align-items: center;
                //     justify-content: center;
                //     gap: 0.5rem;
                // }

                // .spinner {
                //     width: 16px;
                //     height: 16px;
                //     border: 2px solid rgba(255, 255, 255, 0.3);
                //     border-top: 2px solid white;
                //     border-radius: 50%;
                //     animation: spin 1s linear infinite;
                // }

                // @keyframes spin {
                //     0% { transform: rotate(0deg); }
                //     100% { transform: rotate(360deg); }
                // }

                // .login-footer {
                //     text-align: center;
                //     color: rgba(255, 255, 255, 0.8);
                //     font-size: 0.9rem;
                // }

                // .link-button {
                //     background: none;
                //     border: none;
                //     color: #f093fb;
                //     font-weight: 600;
                //     cursor: pointer;
                //     text-decoration: underline;
                //     transition: color 0.3s ease;
                // }

                // .link-button:hover {
                //     color: #f5576c;
                // }

                // .floating-elements {
                //     position: absolute;
                //     top: 0;
                //     left: 0;
                //     width: 100%;
                //     height: 100%;
                //     pointer-events: none;
                //     z-index: 1;
                // }

                // .floating-book {
                //     position: absolute;
                //     font-size: 1.5rem;
                //     opacity: 0.4;
                //     animation: floatRandom 8s ease-in-out infinite;
                // }

                // .floating-1 {
                //     top: 20%;
                //     left: 10%;
                //     animation-delay: 0s;
                // }

                // .floating-2 {
                //     top: 30%;
                //     right: 15%;
                //     animation-delay: 2s;
                // }

                // .floating-3 {
                //     bottom: 30%;
                //     left: 20%;
                //     animation-delay: 4s;
                // }

                // .floating-4 {
                //     bottom: 20%;
                //     right: 10%;
                //     animation-delay: 6s;
                // }

                // @keyframes floatRandom {
                //     0%, 100% { transform: translateY(0px) rotate(0deg); }
                //     25% { transform: translateY(-20px) rotate(5deg); }
                //     50% { transform: translateY(-10px) rotate(-5deg); }
                //     75% { transform: translateY(-30px) rotate(3deg); }
                // }

                // @keyframes slideInUp {
                //     from {
                //         opacity: 0;
                //         transform: translateY(30px);
                //     }
                //     to {
                //         opacity: 1;
                //         transform: translateY(0);
                //     }
                // }

                // /* Responsive Design */
                // @media (max-width: 768px) {
                //     .login-page {
                //         padding: 1rem;
                //     }
                    
                //     .login-card {
                //         padding: 2rem;
                //     }
                    
                //     .login-title {
                //         font-size: 1.5rem;
                //     }
                    
                //     .floating-book {
                //         font-size: 1.2rem;
                //     }
                // }

                // @media (max-width: 480px) {
                //     .login-card {
                //         padding: 1.5rem;
                //     }
                    
                //     .login-title {
                //         font-size: 1.3rem;
                //     }
                    
                //     .logo {
                //         width: 60px;
                //         height: 60px;
                //     }
                // }
            `}</style>
        </div>
    );
};

export default Login;