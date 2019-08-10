import axios from "axios";
import { Injectable, Inject } from '@angular/core';
import { ErrorHandler } from "@angular/core";
import { AxiosInstance } from "axios";

export interface Params {
    [key: string]: any;
}

export interface GetOptions {
    url: string;
    params?: Params;
}

export interface ErrorResponse {
    id: string;
    code: string;
    message: string;
}


@Injectable({
    providedIn: "root"
})

export class ApiService {

    private axiosClient: AxiosInstance;
    private errorHandler: ErrorHandler;
    _baseURL: string;

    constructor(@Inject('BASE_URL') baseUrl: string) {
        this._baseURL = baseUrl;
        this.axiosClient = axios.create({
            //timeout: 3000,
            headers: {
                "X-Initialized-At": Date.now().toString(),
            }
        });

    }

    public async get<T>(options: GetOptions): Promise<T> {
        
        try {
            var axiosResponse = await this.axiosClient.request<T>({
                method: "get",
                url: this._baseURL + options.url,
            });
            console.log(axiosResponse);
            return (Promise.resolve(axiosResponse.data));
        } catch (error) {
            console.log({ "error": error })
            return (Promise.reject("Error!"));
        }

    }

    public async post<T>(options: GetOptions , postData:any): Promise<T> {
        try {
            var axiosResponse = await this.axiosClient.request<T>({
                method: "post",
                url: this._baseURL + options.url,
                data: postData
            });
            console.log(axiosResponse);
            return (Promise.resolve(axiosResponse.data));
        } catch (error) {
            console.log({ "error": error })
            return (Promise.reject("Error!"));
        }
    }



}
