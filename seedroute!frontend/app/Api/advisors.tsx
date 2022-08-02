import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export const getAdvisors = async () => {
    const user:any = JSON.parse(await AsyncStorage.getItem('user')||'')
    
    const res = await axios.get(`http://10.0.2.2:8000/api/getAdvisor`,{
        headers: {
            Authorization :  `Bearer ${user?.access_token}`
        }
    });
    return res;
}