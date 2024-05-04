import axios from "axios";
export const api = axios.create({
    baseURL: 'https://crudcrud.com/api/f7a76f147c42425c8e1b6ac7178ee835',
    timeout: 10000,
  });