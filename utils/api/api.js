import http from './http.js'
export const getCouponsIndex = (params) => http.get('coupons',params)
export const setCouponReceive = (params) => http.post('coupon/receive',params)