import axios from 'axios'

export interface loginProps {
    name?: string
    email: string;
    password: string
  }
export const login = async (email: string, password: string) => {
    const res = axios.post("http://10.0.2.2:8000/api/login", {
        email,
        password
    })
    return res
}
export const register = async (props: loginProps) => {
    const res = axios.post("http:/10.0.2.2:8000/api/register", {
        name: props.name,
        email: props.email,
        password: props.password
    })
    return res
}