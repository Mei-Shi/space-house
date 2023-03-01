
import axios from './axios'

//添加购物车接口
export function addCart(params) {
    return axios.post('/shop-cart', params);
}

//修改购物车
export function modifyCart(params) {
    return axios.put('/shop-cart', params);
}

//购物车列表
export function getCart(params) {
    return axios.get('/shop-cart', { params });
}

//删除购物商品
export function deleteCartItem(id) {
    return axios.delete(`/shop-cart/${id}`);
}

//根据购物项id数组查询购物项明细
export function getByCartItemIds(params) {
    return axios.get('/shop-cart/settle', { params });
}
