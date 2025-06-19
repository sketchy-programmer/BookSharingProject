import api from './api';

export const fetchBooks = async () => {
    const res = await api.get('/books');
    return res.data;
};

export const fetchBookById = async (id) => {
    const res = await api.get(`/books/${id}`);
    return res.data;
};

export const createBook = async (formData) => {
    const res = await api.post('/books', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
    });
    return res.data;
};