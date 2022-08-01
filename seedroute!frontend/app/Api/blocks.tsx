import axios from "axios";
import { useAppSelector } from "../redux/hooks";
import { baseURL } from "./base";
import { AsyncStorageStatic } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage'
// const user = JSON?.parse(localStorage.getItem('user') || '{}')?.access_token


export const postSelectedBlocks = async (data: any) => {
 const user:any = JSON.parse(await AsyncStorage.getItem('user')||'')
    const res = await axios.post(`http://10.0.2.2:8000/api/storeBlocksSelected`,data,{
        headers: {
            Authorization :  `Bearer ${user?.access_token}`
        }
    });
    return res;
}

export const getSelectedBlocks = async () => {
    const user:any = JSON.parse(await AsyncStorage.getItem('user')||'')
    
    const res = await axios.get(`http://10.0.2.2:8000/api/getSelectedBlocks`,{
        headers: {
            Authorization :  `Bearer ${user?.access_token}`
        }
    });
    return res;
}
export const getSelectedBlockByName = async (name:number) => {
    const user:any = JSON.parse(await AsyncStorage.getItem('user')||'')
    
    const res = await axios.get(`http://10.0.2.2:8000/api/getSelectedBlocks/${name}`,{
        headers: {
            Authorization :  `Bearer ${user?.access_token}`
        }
    });
    return res;
}