import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../services/auth';
import { useAuth } from '../../contexts/AuthContext';
import '../../styles/Register.css'

const StoryverseLogo = () => (
    <div className="logo-container">
        <svg width="80" height="80" viewBox="0 0 120 120" className="logo">
            <defs>
                <linearGradient id="backgroundGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#1E40AF" />
                </linearGradient>
                <linearGradient id="bookGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#60A5FA" />
                    <stop offset="100%" stopColor="#3B82F6" />
                </linearGradient>
            </defs>

            <circle cx="60" cy="60" r="55" fill="url(#backgroundGradient)" className="logo-bg" />

            <g className="book-container">
                <path d="M35 45 L35 75 Q35 80 40 80 L55 80 Q60 75 60 70 L60 45 Q60 40 55 40 L40 40 Q35 40 35 45 Z"
                    fill="white" opacity="0.9" />
                <path d="M60 45 L60 75 Q60 80 65 80 L80 80 Q85 80 85 75 L85 45 Q85 40 80 40 L65 40 Q60 40 60 45 Z"
                    fill="white" opacity="0.9" />
                <rect x="58" y="40" width="4" height="40" fill="url(#bookGradient)" />
                <line x1="40" y1="50" x2="52" y2="50" stroke="#3B82F6" strokeWidth="1.5" opacity="0.6" />
                <line x1="40" y1="55" x2="50" y2="55" stroke="#3B82F6" strokeWidth="1.5" opacity="0.6" />
                <line x1="40" y1="60" x2="52" y2="60" stroke="#3B82F6" strokeWidth="1.5" opacity="0.6" />
                <line x1="68" y1="50" x2="80" y2="50" stroke="#3B82F6" strokeWidth="1.5" opacity="0.6" />
                <line x1="68" y1="55" x2="78" y2="55" stroke="#3B82F6" strokeWidth="1.5" opacity="0.6" />
                <line x1="68" y1="60" x2="80" y2="60" stroke="#3B82F6" strokeWidth="1.5" opacity="0.6" />
            </g>

            <g className="sparkles">
                <circle cx="25" cy="30" r="2" fill="#60A5FA" opacity="0.8">
                    <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="95" cy="35" r="1.5" fill="#3B82F6" opacity="0.6">
                    <animate attributeName="opacity" values="0.6;0.2;0.6" dur="1.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="20" cy="85" r="1.5" fill="#1E40AF" opacity="0.7">
                    <animate attributeName="opacity" values="0.7;0.3;0.7" dur="2.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="90" cy="90" r="2" fill="#60A5FA" opacity="0.5">
                    <animate attributeName="opacity" values="0.5;0.1;0.5" dur="3s" repeatCount="indefinite" />
                </circle>
            </g>
        </svg>
    </div>
);

const Register = () => {
    const [ form, setForm ] = useState({ username: '', email: '', password: '', role: 'Reader' });
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
            const data = await registerUser(form);
            login(data);
            navigate('/dashboard');
        } catch (err) {
            setError('Registration failed. Please check your information and try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="register-page">
            <div className="register-container">
                <div className="register-card">
                    <StoryverseLogo />

                    <h1 className="register-title">
                        Join the <span className="brand-name">Storyverse</span>
                    </h1>

                    <p className="register-subtitle">
                        Begin your <span className="highlight">storytelling adventure</span>
                    </p>

                    <form onSubmit={handleSubmit} className="register-form">
                        {error && (
                            <div className="error-message">
                                {error}
                            </div>
                        )}

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input
                                    id="username"
                                    name="username"
                                    type="text"
                                    placeholder="Choose a username"
                                    value={form.username}
                                    onChange={handleChange}
                                    required
                                    className="form-input"
                                />
                            </div>

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
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                placeholder="Create a password"
                                value={form.password}
                                onChange={handleChange}
                                required
                                className="form-input"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="role">I want to...</label>
                            <div className="role-selector">
                                <div
                                    className={`role-option ${form.role === 'Reader' ? 'active' : ''}`}
                                    onClick={() => setForm({ ...form, role: 'Reader' })}
                                >
                                    <div className="role-icon">📚</div>
                                    <div className="role-info">
                                        <h4>Read Stories</h4>
                                        <p>Discover amazing stories from writers around the world</p>
                                    </div>
                                </div>
                                <div
                                    className={`role-option ${form.role === 'Writer' ? 'active' : ''}`}
                                    onClick={() => setForm({ ...form, role: 'Writer' })}
                                >
                                    <div className="role-icon">✍️</div>
                                    <div className="role-info">
                                        <h4>Write Stories</h4>
                                        <p>Share your creativity and connect with readers</p>
                                    </div>
                                </div>
                            </div>
                            <input
                                type="hidden"
                                name="role"
                                value={form.role}
                            />
                        </div>

                        <button
                            type="submit"
                            className="register-button"
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <span className="loading-spinner">
                                    <span className="spinner"></span>
                                    Creating Account...
                                </span>
                            ) : (
                                'Create Account'
                            )}
                        </button>
                    </form>

                    <div className="register-footer">
                        <p>
                            Already have an account?{' '}
                            <button
                                onClick={() => navigate('/login')}
                                className="link-button"
                            >
                                Sign in here
                            </button>
                        </p>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .register-page {
                    min-height: 100vh;
                    background: #F9FAFB;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 2rem;
                    position: relative;
                }

                .register-container {
                    width: 100%;
                    max-width: 480px;
                    animation: slideInUp 0.8s ease-out;
                }

                .register-card {
                    background: white;
                    border-radius: 12px;
                    padding: 2.5rem;
                    text-align: center;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
                    border: 1px solid #E5E7EB;
                    transition: all 0.3s ease;
                }

                .register-card:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
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

                .register-title {
                    font-size: 1.8rem;
                    font-weight: 700;
                    color: #1F2937;
                    margin-bottom: 0.5rem;
                }

                .brand-name {
                    color: #3B82F6;
                }

                .register-subtitle {
                    font-size: 1rem;
                    color: #6B7280;
                    margin-bottom: 2rem;
                    line-height: 1.5;
                }

                .highlight {
                    color: #3B82F6;
                    font-weight: 600;
                }

                .register-form {
                    text-align: left;
                    margin-bottom: 1.5rem;
                }

                .form-row {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1rem;
                    margin-bottom: 1.5rem;
                }

                .form-group {
                    margin-bottom: 1.5rem;
                }

                .form-group label {
                    display: block;
                    color: #374151;
                    font-weight: 600;
                    margin-bottom: 0.5rem;
                    font-size: 0.9rem;
                }

                .form-input {
                    width: 100%;
                    padding: 0.75rem;
                    background: white;
                    border: 1px solid #D1D5DB;
                    border-radius: 8px;
                    color: #1F2937;
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

                .role-selector {
                    display: flex;
                    gap: 1rem;
                    margin-top: 0.5rem;
                }

                .role-option {
                    flex: 1;
                    background: white;
                    border: 2px solid #E5E7EB;
                    border-radius: 12px;
                    padding: 1.5rem;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    text-align: center;
                }

                .role-option:hover {
                    border-color: #3B82F6;
                    background: #F8FAFC;
                }

                .role-option.active {
                    border-color: #3B82F6;
                    background: #EFF6FF;
                    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
                }

                .role-icon {
                    font-size: 2rem;
                    margin-bottom: 0.5rem;
                }

                .role-info h4 {
                    color: #1F2937;
                    font-size: 1rem;
                    font-weight: 600;
                    margin-bottom: 0.25rem;
                }

                .role-info p {
                    color: #6B7280;
                    font-size: 0.8rem;
                    line-height: 1.4;
                }

                .error-message {
                    background: #FEF2F2;
                    border: 1px solid #FECACA;
                    border-radius: 8px;
                    padding: 0.75rem;
                    color: #DC2626;
                    margin-bottom: 1rem;
                    font-size: 0.9rem;
                    text-align: center;
                    animation: shake 0.5s ease-in-out;
                }

                @keyframes shake {
                    0%, 100% { transform: translateX(0); }
                    25% { transform: translateX(-5px); }
                    75% { transform: translateX(5px); }
                }

                .register-button {
                    width: 100%;
                    padding: 0.75rem;
                    background: #3B82F6;
                    border: none;
                    border-radius: 8px;
                    color: white;
                    font-size: 1rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
                }

                .register-button:hover:not(:disabled) {
                    background: #2563EB;
                    transform: translateY(-1px);
                    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
                }

                .register-button:active {
                    transform: translateY(0);
                }

                .register-button:disabled {
                    opacity: 0.7;
                    cursor: not-allowed;
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

                .register-footer {
                    text-align: center;
                    color: #6B7280;
                    font-size: 0.9rem;
                }

                .link-button {
                    background: none;
                    border: none;
                    color: #3B82F6;
                    font-weight: 600;
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
                    .register-page {
                        padding: 1rem;
                    }
                    
                    .register-card {
                        padding: 2rem;
                    }
                    
                    .register-title {
                        font-size: 1.5rem;
                    }
                    
                    .form-row {
                        grid-template-columns: 1fr;
                        gap: 0;
                    }
                    
                    .role-selector {
                        flex-direction: column;
                    }
                }

                @media (max-width: 480px) {
                    .register-card {
                        padding: 1.5rem;
                    }
                    
                    .register-title {
                        font-size: 1.3rem;
                    }
                    
                    .logo {
                        width: 60px;
                        height: 60px;
                    }
                    
                    .role-option {
                        padding: 1rem;
                    }
                    
                    .role-icon {
                        font-size: 1.5rem;
                    }
                }
            `}</style>
        </div>
    );
};

export default Register;