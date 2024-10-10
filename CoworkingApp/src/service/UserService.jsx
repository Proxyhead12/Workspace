import axios from 'axios';
import { API_URL } from '../config/globals';

const API_URL_MANA = 'http://localhost:8082/api/v1/management';

class UserService {
    login(email, token) {
        return axios.get(`${API_URL_MANA}/${email}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    }
}

export default new UserService();
