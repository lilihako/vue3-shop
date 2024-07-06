import http from "@/utils/http.js";
// 获取轮播图
// @Param{*}
// @return{*}
export function getBannerAPI(){
    return http.get("/home/banner");
}

export  function getNewAPI(){
    return http.get("/home/new");
}

export const getHotAPI = () => {
    return http.get('/home/hot')
}