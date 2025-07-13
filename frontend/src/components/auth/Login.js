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
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#1E40AF" />
                </linearGradient>
            </defs>

            <circle cx="60" cy="60" r="55" fill="url(#backgroundGradient)" className="logo-bg" />

            <g className="book-container">
                <path d="M35 45 L35 75 Q35 80 40 80 L55 80 Q60 75 60 70 L60 45 Q60 40 55 40 L40 40 Q35 40 35 45 Z"
                    fill="white" opacity="0.9" />
                <path d="M60 45 L60 75 Q60 80 65 80 L80 80 Q85 80 85 75 L85 45 Q85 40 80 40 L65 40 Q60 40 60 45 Z"
                    fill="white" opacity="0.9" />
                <rect x="58" y="40" width="4" height="40" fill="#1E40AF" />
                <line x1="40" y1="50" x2="52" y2="50" stroke="#3B82F6" strokeWidth="1.5" opacity="0.6" />
                <line x1="40" y1="55" x2="50" y2="55" stroke="#3B82F6" strokeWidth="1.5" opacity="0.6" />
                <line x1="40" y1="60" x2="52" y2="60" stroke="#3B82F6" strokeWidth="1.5" opacity="0.6" />
                <line x1="68" y1="50" x2="80" y2="50" stroke="#3B82F6" strokeWidth="1.5" opacity="0.6" />
                <line x1="68" y1="55" x2="78" y2="55" stroke="#3B82F6" strokeWidth="1.5" opacity="0.6" />
                <line x1="68" y1="60" x2="80" y2="60" stroke="#3B82F6" strokeWidth="1.5" opacity="0.6" />
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
            
            // Role-based redirect
            if (data.role === 'Writer') {
                navigate('/writer-dashboard');
            } else {
                navigate('/dashboard');
            }
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
                        Continue your storytelling journey
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

            <style jsx>{`
                .login-page {
                    min-height: 100vh;
                    background-color: #F9FAFB;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 2rem;
                }

                .login-container {
                    width: 100%;
                    max-width: 400px;
                    animation: slideInUp 0.8s ease-out;
                }

                .login-card {
                    background: white;
                    border-radius: 12px;
                    padding: 2.5rem;
                    text-align: center;
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
                    border: 1px solid #E5E7EB;
                    transition: all 0.3s ease;
                }

                .login-card:hover {
                    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
                }

                .logo-container {
                    margin-bottom: 1.5rem;
                    animation: float 3s ease-in-out infinite;
                }

                .logo {
                    filter: drop-shadow(0 4px 8px rgba(0,0,0,0.1));
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
                    50% { transform: translateY(-8px); }
                }

                @keyframes pulse {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.05); }
                }

                @keyframes bookFloat {
                    0% { transform: translateY(0px); }
                    100% { transform: translateY(-2px); }
                }

                .login-title {
                    font-size: 1.8rem;
                    font-weight: 700;
                    color: #111827;
                    margin-bottom: 0.5rem;
                }

                .brand-name {
                    color: #3B82F6;
                }

                .login-subtitle {
                    font-size: 1rem;
                    color: #6B7280;
                    margin-bottom: 2rem;
                    line-height: 1.5;
                }

                .login-form {
                    text-align: left;
                    margin-bottom: 1.5rem;
                }

                .form-group {
                    margin-bottom: 1.5rem;
                }

                .form-group label {
                    display: block;
                    color: #374151;
                    font-weight: 500;
                    margin-bottom: 0.5rem;
                    font-size: 0.875rem;
                }

                .form-input {
                    width: 100%;
                    padding: 0.75rem;
                    background: white;
                    border: 1px solid #D1D5DB;
                    border-radius: 6px;
                    color: #111827;
                    font-size: 1rem;
                    transition: all 0.3s ease;
                    box-sizing: border-box;
                }

                .form-input::placeholder {
                    color: #9CA3AF;
                }

                .form-input:focus {
                    outline: none;
                    border-color: #3B82F6;
                    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
                }

                .error-message {
                    background: #FEF2F2;
                    border: 1px solid #FECACA;
                    border-radius: 6px;
                    padding: 0.75rem;
                    color: #DC2626;
                    margin-bottom: 1rem;
                    font-size: 0.875rem;
                    text-align: center;
                    animation: shake 0.5s ease-in-out;
                }

                @keyframes shake {
                    0%, 100% { transform: translateX(0); }
                    25% { transform: translateX(-5px); }
                    75% { transform: translateX(5px); }
                }

                .login-button {
                    width: 100%;
                    padding: 0.75rem;
                    background: #3B82F6;
                    border: none;
                    border-radius: 6px;
                    color: white;
                    font-size: 1rem;
                    font-weight: 500;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
                }

                .login-button:hover:not(:disabled) {
                    background: #2563EB;
                    transform: translateY(-1px);
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                }

                .login-button:active {
                    transform: translateY(0);
                }

                .login-button:disabled {
                    opacity: 0.6;
                    cursor: not-allowed;
                    background: #9CA3AF;
                }

                .loading-spinner {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.5rem;
                }

                .spinner {
                    width: 16px;
                    height: 16px;
                    border: 2px solid rgba(255, 255, 255, 0.3);
                    border-top: 2px solid white;
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                }

                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }

                .login-footer {
                    text-align: center;
                    color: #6B7280;
                    font-size: 0.875rem;
                }

                .link-button {
                    background: none;
                    border: none;
                    color: #3B82F6;
                    font-weight: 500;
                    cursor: pointer;
                    text-decoration: underline;
                    transition: color 0.3s ease;
                }

                .link-button:hover {
                    color: #2563EB;
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
                    .login-page {
                        padding: 1rem;
                    }
                    
                    .login-card {
                        padding: 2rem;
                    }
                    
                    .login-title {
                        font-size: 1.5rem;
                    }
                }

                @media (max-width: 480px) {
                    .login-card {
                        padding: 1.5rem;
                    }
                    
                    .login-title {
                        font-size: 1.3rem;
                    }
                    
                    .logo {
                        width: 60px;
                        height: 60px;
                    }
                }
            `}</style>
        </div>
    );
};

export default Login;