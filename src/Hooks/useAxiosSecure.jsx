import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
    baseURL: 'https://electro-ambition-server.vercel.app'
})

const useAxiosSecure = () => {
    const navigate = useNavigate()
    const { SignOut } = useAuth()
    useEffect(() => {
        axiosSecure.interceptors.request.use((req) => {
            const token = localStorage.getItem('ElectroAmbitionToken');
            if (token) {
                req.headers.Authorization = `Bearer ${token}`;
            }
            return req;
        })
        axiosSecure.interceptors.response.use(res => res, async (error) => {
            if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                SignOut()
                navigate("/signIn")
            }
            return Promise.reject(error)
        })
    }, [])
    return [axiosSecure]
};

export default useAxiosSecure;