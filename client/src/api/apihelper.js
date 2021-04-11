
import axios from 'axios'; 
import constants from '../config/constant'; 



const api = axios.create({
    baseURL: constants.apiUrl,
})


export const createShortLink = payload => api.post('/api', payload); 
export const getAllShortLinks = fetchUrl => api.get('/api/url', fetchUrl); 
export const fetchSinglelink = fetchUrl => api.get('/api/url/:code', fetchUrl); 



const apis = {
    createShortLink, 
    getAllShortLinks, 
    fetchSinglelink
}

export default apis; 