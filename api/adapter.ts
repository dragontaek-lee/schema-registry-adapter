import { AxiosInstance } from 'axios';
import { ApiRequest } from '../interfaces/api';

export class AxiosAdapter {
    private axiosInstance: AxiosInstance;

    constructor(axiosInstance: AxiosInstance) {
        this.axiosInstance = axiosInstance;
    }

    public async sendRequest(request: ApiRequest) {
        try {
            const response = await this.axiosInstance({
                method: request.method,
                url: request.url,
                data: request.data,
                params: request.params,
            });
            return response;
        } catch (error) {
            throw error;
        }
    }
}