import { useState } from 'react';

const StoryverseFooter = () => {
    const [hoveredLink, setHoveredLink] = useState(null);

    const currentYear = new Date().getFullYear();

    const footerLinks = {
        explore: [
            { name: "Browse Stories", href: "/stories" },
            { name: "New Releases", href: "/new" },
            { name: "Top Rated", href: "/top-rated" },
            { name: "Genres", href: "/genres" }
        ],
        writers: [
            { name: "Start Writing", href: "/write" },
            { name: "Writing Tools", href: "/tools" },
            { name: "Publishing Guide", href: "/guide" },
            { name: "Writer Resources", href: "/resources" }
        ],
        community: [
            { name: "Forums", href: "/forums" },
            { name: "Book Clubs", href: "/clubs" },
            { name: "Events", href: "/events" },
            { name: "Contests", href: "/contests" }
        ],
        support: [
            { name: "Help Center", href: "/help" },
            { name: "Contact Us", href: "/contact" },
            { name: "Privacy Policy", href: "/privacy" },
            { name: "Terms of Service", href: "/terms" }
        ]
    };

    return (
        <footer className="storyverse-footer">
            {/* Decorative top border */}
            <div className="footer-border">
                <div className="floating-sparkle sparkle-1">✨</div>
                <div className="floating-sparkle sparkle-2">📖</div>
                <div className="floating-sparkle sparkle-3">🌟</div>
                <div className="floating-sparkle sparkle-4">📚</div>
            </div>

            <div className="footer-content">
                {/* Main Footer Content */}
                <div className="footer-main">
                    {/* Brand Section */}
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <svg width="60" height="60" viewBox="0 0 120 120" className="logo-small">
                                <defs>
                                    <linearGradient id="footerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#3b82f6" />
                                        <stop offset="100%" stopColor="#1e40af" />
                                    </linearGradient>
                                </defs>
                                <circle cx="60" cy="60" r="55" fill="url(#footerGradient)" />
                                <g className="footer-book">
                                    <path d="M35 45 L35 75 Q35 80 40 80 L55 80 Q60 75 60 70 L60 45 Q60 40 55 40 L40 40 Q35 40 35 45 Z"
                                        fill="white" opacity="0.9" />
                                    <path d="M60 45 L60 75 Q60 80 65 80 L80 80 Q85 80 85 75 L85 45 Q85 40 80 40 L65 40 Q60 40 60 45 Z"
                                        fill="white" opacity="0.9" />
                                    <rect x="58" y="40" width="4" height="40" fill="#1e40af" />
                                    <line x1="40" y1="50" x2="52" y2="50" stroke="#3b82f6" strokeWidth="1.5" opacity="0.6" />
                                    <line x1="40" y1="55" x2="50" y2="55" stroke="#3b82f6" strokeWidth="1.5" opacity="0.6" />
                                    <line x1="68" y1="50" x2="80" y2="50" stroke="#3b82f6" strokeWidth="1.5" opacity="0.6" />
                                    <line x1="68" y1="55" x2="78" y2="55" stroke="#3b82f6" strokeWidth="1.5" opacity="0.6" />
                                </g>
                            </svg>
                        </div>
                        <h3 className="footer-brand-name">Storyverse</h3>
                        <p className="footer-tagline">Where readers meet writers — and stories come to life</p>
                        
                        {/* Social Links */}
                        <div className="social-links">
                            <a href="#" className="social-link" aria-label="Facebook">
                                <div className="social-icon">📘</div>
                            </a>
                            <a href="#" className="social-link" aria-label="Twitter">
                                <div className="social-icon">🐦</div>
                            </a>
                            <a href="#" className="social-link" aria-label="Instagram">
                                <div className="social-icon">📷</div>
                            </a>
                            <a href="#" className="social-link" aria-label="Discord">
                                <div className="social-icon">💬</div>
                            </a>
                        </div>
                    </div>

                    {/* Links Grid */}
                    <div className="footer-links">
                        <div className="link-column">
                            <h4>Explore</h4>
                            <ul>
                                {footerLinks.explore.map((link, index) => (
                                    <li key={index}>
                                        <a 
                                            href={link.href}
                                            onMouseEnter={() => setHoveredLink(link.name)}
                                            onMouseLeave={() => setHoveredLink(null)}
                                            className={hoveredLink === link.name ? 'hovered' : ''}
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="link-column">
                            <h4>For Writers</h4>
                            <ul>
                                {footerLinks.writers.map((link, index) => (
                                    <li key={index}>
                                        <a 
                                            href={link.href}
                                            onMouseEnter={() => setHoveredLink(link.name)}
                                            onMouseLeave={() => setHoveredLink(null)}
                                            className={hoveredLink === link.name ? 'hovered' : ''}
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="link-column">
                            <h4>Community</h4>
                            <ul>
                                {footerLinks.community.map((link, index) => (
                                    <li key={index}>
                                        <a 
                                            href={link.href}
                                            onMouseEnter={() => setHoveredLink(link.name)}
                                            onMouseLeave={() => setHoveredLink(null)}
                                            className={hoveredLink === link.name ? 'hovered' : ''}
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="link-column">
                            <h4>Support</h4>
                            <ul>
                                {footerLinks.support.map((link, index) => (
                                    <li key={index}>
                                        <a 
                                            href={link.href}
                                            onMouseEnter={() => setHoveredLink(link.name)}
                                            onMouseLeave={() => setHoveredLink(null)}
                                            className={hoveredLink === link.name ? 'hovered' : ''}
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Newsletter Section */}
                <div className="newsletter-section">
                    <div className="newsletter-content">
                        <h3>Stay Updated</h3>
                        <p>Get the latest stories, writing tips, and community updates delivered to your inbox.</p>
                        <div className="newsletter-form">
                            <input 
                                type="email" 
                                placeholder="Enter your email address"
                                className="newsletter-input"
                            />
                            <button className="newsletter-btn">Subscribe</button>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <div className="footer-bottom-content">
                        <p>&copy; {currentYear} Storyverse. All rights reserved. Made with 💙 for storytellers everywhere.</p>
                        <div className="footer-badges">
                            <span className="badge">✨ Trusted by 100K+ writers</span>
                            <span className="badge">🌟 5M+ stories shared</span>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .storyverse-footer {
                    background: linear-gradient(135deg, #f9fafb 0%, #e5e7eb 100%);
                    border-top: 1px solid #e5e7eb;
                    position: relative;
                    overflow: hidden;
                }

                .footer-border {
                    height: 4px;
                    background: linear-gradient(90deg, #3b82f6, #1e40af, #3b82f6);
                    position: relative;
                    overflow: hidden;
                }

                .floating-sparkle {
                    position: absolute;
                    font-size: 1.2rem;
                    opacity: 0.4;
                    animation: sparkleFloat 8s ease-in-out infinite;
                }

                .sparkle-1 {
                    left: 10%;
                    animation-delay: 0s;
                }

                .sparkle-2 {
                    left: 30%;
                    animation-delay: 2s;
                }

                .sparkle-3 {
                    left: 60%;
                    animation-delay: 4s;
                }

                .sparkle-4 {
                    left: 85%;
                    animation-delay: 6s;
                }

                @keyframes sparkleFloat {
                    0%, 100% { 
                        transform: translateY(0px) scale(1);
                        opacity: 0.4;
                    }
                    50% { 
                        transform: translateY(-8px) scale(1.1);
                        opacity: 0.7;
                    }
                }

                .footer-content {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 2rem;
                }

                .footer-main {
                    display: grid;
                    grid-template-columns: 1fr 2fr;
                    gap: 4rem;
                    padding: 3rem 0;
                }

                .footer-brand {
                    animation: slideInLeft 0.8s ease-out;
                }

                .footer-logo {
                    margin-bottom: 1rem;
                }

                .logo-small {
                    filter: drop-shadow(0 4px 8px rgba(0,0,0,0.1));
                    transition: transform 0.3s ease;
                }

                .logo-small:hover {
                    transform: scale(1.05);
                }

                .footer-book {
                    animation: bookGlow 3s ease-in-out infinite alternate;
                }

                @keyframes bookGlow {
                    0% { opacity: 0.8; }
                    100% { opacity: 1; }
                }

                .footer-brand-name {
                    font-size: 1.8rem;
                    font-weight: 700;
                    color: #1f2937;
                    margin-bottom: 0.5rem;
                }

                .footer-tagline {
                    color: #6b7280;
                    font-size: 0.9rem;
                    margin-bottom: 1.5rem;
                    line-height: 1.5;
                }

                .social-links {
                    display: flex;
                    gap: 1rem;
                    margin-top: 1rem;
                }

                .social-link {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 40px;
                    height: 40px;
                    border-radius: 8px;
                    background: white;
                    border: 1px solid #e5e7eb;
                    transition: all 0.3s ease;
                    text-decoration: none;
                }

                .social-link:hover {
                    background: #3b82f6;
                    border-color: #3b82f6;
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
                }

                .social-icon {
                    font-size: 1.2rem;
                    transition: transform 0.3s ease;
                }

                .social-link:hover .social-icon {
                    transform: scale(1.1);
                }

                .footer-links {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 2rem;
                    animation: slideInRight 0.8s ease-out;
                }

                .link-column h4 {
                    color: #1f2937;
                    font-size: 1.1rem;
                    font-weight: 600;
                    margin-bottom: 1rem;
                    position: relative;
                }

                .link-column h4::after {
                    content: '';
                    position: absolute;
                    bottom: -4px;
                    left: 0;
                    width: 30px;
                    height: 2px;
                    background: #3b82f6;
                    border-radius: 1px;
                }

                .link-column ul {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }

                .link-column li {
                    margin-bottom: 0.5rem;
                }

                .link-column a {
                    color: #6b7280;
                    text-decoration: none;
                    font-size: 0.9rem;
                    transition: all 0.3s ease;
                    display: inline-block;
                    position: relative;
                }

                .link-column a::before {
                    content: '';
                    position: absolute;
                    bottom: -2px;
                    left: 0;
                    width: 0;
                    height: 1px;
                    background: #3b82f6;
                    transition: width 0.3s ease;
                }

                .link-column a:hover,
                .link-column a.hovered {
                    color: #3b82f6;
                    transform: translateX(4px);
                }

                .link-column a:hover::before,
                .link-column a.hovered::before {
                    width: 100%;
                }

                .newsletter-section {
                    background: white;
                    border-radius: 12px;
                    padding: 2rem;
                    margin: 2rem 0;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.05);
                    border: 1px solid #e5e7eb;
                    animation: slideInUp 0.8s ease-out 0.2s both;
                }

                .newsletter-content h3 {
                    color: #1f2937;
                    font-size: 1.4rem;
                    margin-bottom: 0.5rem;
                    font-weight: 600;
                }

                .newsletter-content p {
                    color: #6b7280;
                    margin-bottom: 1.5rem;
                    font-size: 0.9rem;
                }

                .newsletter-form {
                    display: flex;
                    gap: 1rem;
                    flex-wrap: wrap;
                }

                .newsletter-input {
                    flex: 1;
                    min-width: 250px;
                    padding: 0.75rem 1rem;
                    border: 1px solid #e5e7eb;
                    border-radius: 8px;
                    font-size: 0.9rem;
                    transition: all 0.3s ease;
                }

                .newsletter-input:focus {
                    outline: none;
                    border-color: #3b82f6;
                    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
                }

                .newsletter-btn {
                    padding: 0.75rem 1.5rem;
                    background: #3b82f6;
                    color: white;
                    border: none;
                    border-radius: 8px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    font-size: 0.9rem;
                }

                .newsletter-btn:hover {
                    background: #1e40af;
                    transform: translateY(-1px);
                    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
                }

                .footer-bottom {
                    border-top: 1px solid #e5e7eb;
                    padding: 1.5rem 0;
                    animation: slideInUp 0.8s ease-out 0.4s both;
                }

                .footer-bottom-content {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    flex-wrap: wrap;
                    gap: 1rem;
                }

                .footer-bottom p {
                    color: #6b7280;
                    font-size: 0.85rem;
                    margin: 0;
                }

                .footer-badges {
                    display: flex;
                    gap: 1rem;
                    flex-wrap: wrap;
                }

                .badge {
                    background: #f3f4f6;
                    color: #6b7280;
                    padding: 0.25rem 0.75rem;
                    border-radius: 20px;
                    font-size: 0.75rem;
                    font-weight: 500;
                    border: 1px solid #e5e7eb;
                }

                @keyframes slideInLeft {
                    from {
                        opacity: 0;
                        transform: translateX(-30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                @keyframes slideInRight {
                    from {
                        opacity: 0;
                        transform: translateX(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
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
                @media (max-width: 1024px) {
                    .footer-main {
                        grid-template-columns: 1fr;
                        gap: 3rem;
                    }

                    .footer-links {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }

                @media (max-width: 768px) {
                    .footer-content {
                        padding: 0 1rem;
                    }

                    .footer-links {
                        grid-template-columns: 1fr;
                        gap: 1.5rem;
                    }

                    .newsletter-form {
                        flex-direction: column;
                    }

                    .newsletter-input {
                        min-width: 100%;
                    }

                    .footer-bottom-content {
                        flex-direction: column;
                        text-align: center;
                    }

                    .footer-badges {
                        justify-content: center;
                    }
                }

                @media (max-width: 480px) {
                    .footer-main {
                        padding: 2rem 0;
                    }

                    .newsletter-section {
                        padding: 1.5rem;
                    }

                    .social-links {
                        justify-content: center;
                    }

                    .floating-sparkle {
                        font-size: 1rem;
                    }
                }
            `}</style>
        </footer>
    );
};

export default StoryverseFooter;