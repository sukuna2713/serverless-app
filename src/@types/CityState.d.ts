declare type CityState = {
    loading: boolean;
    error: string;
    cities: import('../API').CreateCityInput[];
}