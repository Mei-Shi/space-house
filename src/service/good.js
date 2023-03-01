// good.js
import axios from './axios'

//商品分类
export function getCategory() {
    return axios.get('/categories');
}

//商品详情
export function getDetail(id) {
    return axios.get(`/goods/detail/${id}`);
}

//搜索商品
export function search(params) {
    return axios.get('/search', { params })
}