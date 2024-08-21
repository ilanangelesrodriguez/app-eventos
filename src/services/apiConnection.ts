import axios, { AxiosInstance, AxiosResponse } from 'axios';

class ApiConnection {
    private client: AxiosInstance;

    constructor(baseURL: string) {
        this.client = axios.create({
            baseURL: baseURL,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    async get<T>(url: string): Promise<AxiosResponse<T>> {
        return this.client.get(url);
    }

    async post<T>(url: string, data: T): Promise<AxiosResponse<T>> {
        return this.client.post(url, data);
    }

    async put<T>(url: string, data: T): Promise<AxiosResponse<T>> {
        return this.client.put(url, data);
    }

    async delete<T>(url: string): Promise<AxiosResponse<T>> {
        return this.client.delete(url);
    }
}

const URL = 'https://communist-viki-ilanangelesrodriguez-a7079bf8.koyeb.app/';
const apiConnection = new ApiConnection(URL);
export default apiConnection;
