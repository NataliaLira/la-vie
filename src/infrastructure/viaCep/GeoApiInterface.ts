export interface GeoApiInterface {
    endpoint: string
    getAddress(bodyValue: string): any
}