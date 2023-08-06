// import axios from "axios";
import { BASEURL } from "./BasicUrl/Url";
import axios, { AxiosError } from 'axios';

// export default axios.create({
//   baseURL: BASEURL.URL,
//   headers: {
//     "Content-type": "application/json"
//   }
// });


const apiClient = axios.create({
    baseURL: BASEURL.URL,
});

// apiClient.interceptors.request.use(async(config) => {
//     const token = localStorage.getItem('token')
//     if (config.data instanceof FormData) {
//         console.log('ITS FORMDATA');
//         config.headers['Content-Type'] = 'multipart/form-data'
//         if (token === null) {
//             return config;
//         }
//         config.headers['authorization'] = `Bearer ${token}`;
    
//         return config;
//     } else {
//         config.headers['Content-Type'] = 'application/json';
//         if (token === null) {
//             return config;
//         }
//         config.headers['authorization'] = `Bearer ${token}`;
    
//         return config;
//     }
    
   
// },  error => {
//     return Promise.reject(error)
// }); 

// apiClient.interceptors.response.use((data) => {
//     return data;
// }, async(error: AxiosError<any, unknown>) => {
//     if (!error.response) {
//         return Promise.reject(error.message);
//     } else {
//         if (error.response?.data instanceof Array) {
//             return Promise.reject(JSON.stringify(error.response?.data));
//         } else if (error.response?.data instanceof Object) {
//             return Promise.reject(error.response?.data.message);
//         }
//         else {
//             if (error.response?.status === 401 || error.response?.status === 403) {
//              localStorage.setItem('token', '');
//             }
            
//             return Promise.reject(error.response?.data.message);
//         }
//     }
// });

export default apiClient;
