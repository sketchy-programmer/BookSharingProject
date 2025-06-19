import api from './api';

export const fetchVolumesByBook = async (bookId) => {
    const res = await api.get(`/volumes/${bookId}`);
    return res.data;
};

export const createVolume = async (bookId, data) => {
    const res = await api.post(`/volumes/${bookId}`, data);
    return res.data;
};