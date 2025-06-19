import { Link } from 'react-router-dom';

const Home = () => (
    <div className="home">
        <h1>📚 Welcome to Storyverse</h1>
        <p>Where readers meet writers — and stories come to life.</p>
        <div>
            <Link to="/login"><button>Login</button></Link>
            <Link to="/register"><button>Register</button></Link>
        </div>
    </div>
);

export default Home;