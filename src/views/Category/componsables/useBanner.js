import {onMounted, ref} from "vue";
import {getBannerAPI} from "@/apis/home.js";

export function useBanner(){
    const bannerList=ref([]);

    const getBanner=async ()=>{
        const res= await getBannerAPI();
        bannerList.value=res.result;
    }

    onMounted(()=>getBanner());//轮播图
    return {bannerList};
}