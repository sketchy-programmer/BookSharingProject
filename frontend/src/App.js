import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import BookBrowser from './pages/BookBrowser';
import WritingPage from './pages/WritingPage';
import BookDetailPage from './pages/BookDetailPage';
import ReadingPage from './pages/ReadingPage';
import WriterDashboard from './pages/WriterDashBoard';
import VolumeManager from './components/writing/VolumeManager';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/books" element={<BookBrowser />} />
                <Route path="/books/:id" element={<BookDetailPage />} />
                <Route path="/read/:bookId" element={<ReadingPage />} />
                <Route path="/write" element={<WritingPage />} />
                <Route path="/write/manage/:bookId" element={<VolumeManager />} />
                <Route path="/dashboard" element={<WriterDashboard />} />
            </Routes>
        </Router>
    );
}

export default App;