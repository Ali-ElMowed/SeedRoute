import axios from "axios";
import { baseURL } from "./base";
const user = JSON?.parse(localStorage.getItem('user') || '{}')?.access_token


export const postSelectedBlocks = async (data: any) => {
    console.log(user);
    
    const res = await axios.post(`http://10.0.2.2:8000/api/storeBlocksSelected`,data,{
        headers: {
            Authorization :  `Bearer ${user}`
        }
    });
    return res;
}

export const getSelectedBlocks = async () => {
    const res = await axios.get(`http://10.0.2.2:8000/api/getSelectedBlocks`,{
        headers: {
            Authorization :  `Bearer ${user}`
        }
    });
    return res;
}