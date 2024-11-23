import { Method } from "axios";

export interface ApiRequest {
    method: string;
    url: string;
    data?: any;
    params?: any;
}

export interface ApiEndpoint {
    method: Method;
    url: string;
    params?: { [key: string]: string };
}
