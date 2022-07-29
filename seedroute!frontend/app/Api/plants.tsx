import axios from "axios";
import { baseURL } from "./base";
console.log(localStorage.getItem('user'));

const user = JSON?.parse(localStorage.getItem('user') || '{}')?.access_token

export const plants = async () => {
    const res = await axios.get(`http://10.0.2.2:8000/api/getPlants`,{
        headers: {
            Authorization :  `Bearer ${user}`
        }
    });
    return res;
}

export const getPlantById = async (data: number) => {
    const res = await axios.get(`http://10.0.2.2:8000/api/getPlants/${data}`,{
        headers: {
            Authorization :  `Bearer ${user}`
        }
    });
    return res;
}