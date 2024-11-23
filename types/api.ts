import { ApiEndpoint } from "../interfaces/api";

export type ResourceMap = {
    [key: string]: {
        [action: string]: ApiEndpoint;
    };
};