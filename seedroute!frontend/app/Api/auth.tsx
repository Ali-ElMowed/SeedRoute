import axios from 'axios'

export interface loginProps {
    name?: string
    email: string;
    password: string
  }
export const login = async (email: string, password: string) => {
    const res = axios.post("http://localhost:8000/api/login", {
        email,
        password
    })
    return res
}
