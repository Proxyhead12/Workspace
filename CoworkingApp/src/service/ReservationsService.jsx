import axios from 'axios';
import { API_URL } from '../config/globals';
const API_URL_RES= API_URL+"/reservation"+'/api/v1/reservation';
const ReservationsService = {
    checkAvailability: (spaceId, date, startTime, endTime) => {
        return axios.get(`/reservations/check?spaceId=${spaceId}&date=${date}&startTime=${startTime}&endTime=${endTime}`);
    },
    createReservation: (reservation) => {
        return axios.post(API_URL_RES, reservation);
    }
};

export default ReservationsService;
