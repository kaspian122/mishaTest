import { http } from './apiConfig';
import axios from 'axios';

const userLogin = name => http.post('/login', {user: name});
const addNote = note => http.post('/note', note);
const getAllNotes = () => http.get('/getnotes');
const getNews = () => axios.get('https://jsonplaceholder.typicode.com/todos');
const getImages = () => axios.get('https://picsum.photos/v2/list?limit=30');

const Api = {
    userLogin,
    addNote,
    getAllNotes,
    getNews,
    getImages,
};

export default Api;