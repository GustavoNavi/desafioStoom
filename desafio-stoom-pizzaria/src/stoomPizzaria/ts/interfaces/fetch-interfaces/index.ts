import { IHttpMethod } from '../enum/fetch-enums';

export interface IFetch {
    method: IHttpMethod;
    path: string;
    headers?: any;
    responseType?: any;
    data?: any;
    service: string;
}