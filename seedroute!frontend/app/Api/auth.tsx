import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios'
import { baseURL } from './base';

export interface loginProps {
    name?: string
    email: string;
    password: string
  }
export const login = async (email: string, password: string) => {
    const res = axios.post(`http://10.0.2.2:8000/api/login`, {
        email,
        password
    })
    return res
}
export const register = async (name: string, email: string, password: string, password_confirmation: string) => {
    const res = axios.post(`http://10.0.2.2:8000/api/register`, {
        name,
        email,
        password,
        password_confirmation
    })
    return res
}
export const profile = async () => {
    const user:any = JSON.parse(await AsyncStorage.getItem('user')||'')
    const res = axios.post(`http://10.0.2.2:8000/api/register`, {
        headers: {
            Authorization :  `Bearer ${user?.access_token}`
        }})
    return res
}