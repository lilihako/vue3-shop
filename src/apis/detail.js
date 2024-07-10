//获取商品详情页的请求参数是路径参数

import http from "@/utils/http.js";

export function getDetail(id){
    return http.get('/goods',{params:{id}});
}

//获取商品细节展示页的热榜商品
export const getHotGoodsAPI=({id,type,limit=3})=>{
    return http.get('/goods/hot',{params:{
        id,
        type,
        limit
        }});

}
