import axios from "axios";

const url = 'https://covid19.mathdro.id/api';


export const fetchDataAll = async () => {
    try{
        const {data:{confirmed, recovered, deaths, lastUpdate}} = await axios.get(url);
        return {confirmed, recovered, deaths, lastUpdate};
    } catch(error){
        return error;
    }
}

export const fetchDataCountry = async (country) => {
    try{
        const countryResponse = await axios.get(`${url}countries/${country}`);
        return countryResponse;
    } catch(error) {
        return error;
    }
}

export const fetchDailyData = async () => {
    try{
        const DailyData = await axios.get('https://disease.sh/v3/covid-19/historical/all?lastdays=all');
        return DailyData;
    } catch(error) {
        return error;
    }
}

export const fetchCountry = async () => {
    try{
        const countries = await axios.get(`${url}/countries`);
        return countries;
    } catch(error) {
        return error;
    }
}