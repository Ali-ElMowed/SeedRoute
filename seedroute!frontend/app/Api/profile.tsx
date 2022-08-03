import AsyncStorage from "@react-native-async-storage/async-storage";
import { IsAny } from "@reduxjs/toolkit/dist/tsHelpers";
import axios from "axios";

export const updateUser = async (name: any, email:any, image:any) => {
    const user:any = JSON.parse(await AsyncStorage.getItem('user')||'')
    const res = await axios.post(`http://10.0.2.2:8000/api/updateUser`,{"name":name , "email":email, "image":image},{
        headers: {
            Authorization :  `Bearer ${user?.access_token}`,
            'Content-Type' : 'multipart/form-data'
            
        }
    });
    return res;
}