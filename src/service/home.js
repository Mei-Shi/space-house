import axios from '@/service/axios'

//首页
export function getHome(params) {
    return axios.get('/index-infos');
}