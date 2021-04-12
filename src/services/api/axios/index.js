import Axios from 'axios';
import { API_HOST } from '../../../config';

function returnAxiosInstance() {
	return Axios.create({
        baseURL : API_HOST
    });
}

export function get(url) {
	const axios = returnAxiosInstance();
	return axios.get(url);
}

export function post(url, requestData) {
	const axios = returnAxiosInstance();
	return axios.post(url, requestData);
}