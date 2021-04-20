
import axios from 'axios'; 
import constants from '../config/constant'


export const createShortUrl = reqObj => axios.post(constants.apiUrl, reqObj) //post free homepage url



export const getFeaturesPage = () => axios.get('/features');  //feature page 


export const signup = userData => axios.post('/api/signup', userData);

export const signin = userData => axios.get('/api/signin', userData); 





const apis = {
    createShortUrl, 
    getFeaturesPage, 
    signup, 
    signin
}


export default apis; 