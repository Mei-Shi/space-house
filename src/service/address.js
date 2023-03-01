
import axios from './axios'

//添加收货地址
export function addAddress(params) {
    return axios.post('/address', params);
}

//修改收货地址
export function EditAddress(params) {
    return axios.put('/address', params);
}

//删除收货地址
export function DeleteAddress(id) {
    return axios.delete(`/address/${id}`);
}

//默认地址
export function getDefaultAddress() {
    return axios.get('/address/default');
}

//地址列表
export function getAddressList() {
    return axios.get('/address', { pageNumber: 1, pageSize: 1000 })
}

//地址详情
export function getAddressDetail(id) {
    return axios.get(`/address/${id}`)
}
