import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { baseURL } from "./base";
console.log(localStorage.getItem('user'));


export const plants = async () => {
 const user:any = JSON.parse(await AsyncStorage.getItem('user')||'')
    const res = await axios.get(`http://10.0.2.2:8000/api/getPlants`,{
        headers: {
            Authorization :  `Bearer ${user?.access_token}`
        }
    });
    return res;
}

export const getPlantById = async (data: number) => {
 const user:any = JSON.parse(await AsyncStorage.getItem('user')||'')
    const res = await axios.get(`http://10.0.2.2:8000/api/getPlants/${data}`,{
        headers: {
            Authorization :  `Bearer ${user?.access_token}`
        }
    });
    return res;
}

export const doPlant = async (plant_id: any, blockId:number) => {
    const user:any = JSON.parse(await AsyncStorage.getItem('user')||'')
       const res = await axios.post(`http://10.0.2.2:8000/api/doPlant/${blockId}`,plant_id,{
           headers: {
               Authorization :  `Bearer ${user?.access_token}`
           }
       });
       return res;
   }