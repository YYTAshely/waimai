import { method } from 'cypress/types/bluebird'
import axios from './request'

export const getApiHomeData = (param) =>{
    return axios.request({
        url:'/home/getHomeData',
        method:'get',
        data:param
    })
}