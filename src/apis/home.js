import http from "@/utils/http.js";
// 获取轮播图
// @Param{*}
// @return{*}
export function getBannerAPI(){
    return http.get("/home/banner");
}
//获取新鲜推荐
export  function getNewAPI(){
    return http.get("/home/new");
}
//获取当下热门
export const getHotAPI = () => {
    return http.get('/home/hot')
}
/**
 * @description: 获取产品列表
 * @param {*}
 * @return {*}
 */
export const getGoodsAPI = () => {
    return http.get('/home/goods')
}