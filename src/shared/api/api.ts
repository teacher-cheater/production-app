import axios from 'axios';
import { USER_STORAGE_KEY } from 'shared/const/localstorage';

export const $api = axios.create({
    baseURL: 'https://localhost:8000',
    headers: {
        authorization: localStorage.getItem(USER_STORAGE_KEY),
    },
});
