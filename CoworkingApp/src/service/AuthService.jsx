import axios from 'axios';
import { API_URL } from '../config/globals';
const API_URL_AUTH = API_URL+'/api/v1/auth';

class AuthService{
    login(auth){
        return axios.post(`${API_URL_AUTH}/login`, auth);
    }
    register(user){
        return axios.post(`${API_URL_AUTH}/register`, user);
    }
    loginForGoogle(token){
        return axios.post(`${API_URL_AUTH}/login/oauth2/google`, token);
    }
    registerForGoogle(token){
        return axios.post(`${API_URL_AUTH}/register/oauth2/google`, token);
    }

}
export default new AuthService();