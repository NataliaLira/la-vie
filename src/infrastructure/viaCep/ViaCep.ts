import axios, { AxiosInstance } from "axios";
import { GeoApiInterface } from "./GeoApiInterface";

export class ViaCep implements GeoApiInterface {
    endpoint: string = 'https://viacep.com.br/';
    private api: AxiosInstance

    constructor(){
        this.api = axios.create({
            baseURL: this.endpoint
        })
    }

    async getAddress(bodyValue: string) {
        // this.api.get('ws/' + bodyValue + 'json/')
        let response = await this.api.get(`ws/${bodyValue}/json/`)
        return response.data
    }
}


