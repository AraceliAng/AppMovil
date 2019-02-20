import axios from 'axios'

const base_url="https://movil-backend.herokuapp.com"

export const login=(data)=>{
    return axios.post(`${base_url}/auth/login`,data)
}
