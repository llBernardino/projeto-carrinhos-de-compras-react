import axios from "axios";
export const api = axios.create({
    baseURL: 'https://crudcrud.com/api/30dc23d3d9094537b7e8126a173fb00a',
    timeout: 10000,
  });