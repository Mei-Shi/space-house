import axios from './axios'

//生成订单
export function createOrder(params) {
    return axios.post('/saveOrder', params);
}

//订单列表
export function getOrderList(params) {
    return axios.get('/order', { params });
}

//订单详情
export function getOrderDetail(id) {
    return axios.get(`/order/${id}`);
}

//取消订单
export function cancelOrder(id) {
    return axios.put(`/order/${id}/cancel`);
}

//确认订单
export function confirmOrder(id) {
    return axios.put(`/order/${id}/finish`)
}

//付款
export function payOrder(params) {
    return axios.get('/paySuccess', { params })
}