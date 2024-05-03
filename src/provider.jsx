import axios from "axios";
export const api = axios.create({
    baseURL: 'https://crudcrud.com/api/9aa72cb96fab4b108c1febcbb60fbb93',
    timeout: 10000,
  });