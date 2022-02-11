import axios from 'axios';

const url = 'http://localhost:5000/shoes';

export const fetchShoes = () => axios.get(url)
