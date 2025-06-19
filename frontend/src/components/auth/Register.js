import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../services/auth';
import { useAuth } from '../../contexts/AuthContext';

const Register = () => {
    const [ form, setForm ] = useState({ username: '', email: '', password: '', role: 'Reader' });
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e) => setForm({ ...form, [ e.target.name ]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await registerUser(form);
            login(data);
            navigate('/dashboard');
        } catch (err) {
            alert('Registration failed');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="username" placeholder="Username" onChange={handleChange} />
            <input name="email" placeholder="Email" onChange={handleChange} />
            <input name="password" type="password" placeholder="Password" onChange={handleChange} />
            <select name="role" onChange={handleChange}>
                <option value="Reader">Reader</option>
                <option value="Writer">Writer</option>
            </select>
            <button type="submit">Register</button>
        </form>
    );
};

export default Register;