import {loginAPI} from "@/apis/user.js";

export const useUserStore=defineStore(
    'user',
    ()=>{
    //定义管理用户的state
    const userInfo=ref({});
    //2.定义获取接口数据的action函数
    const getuserInfo=async (user)=>{
        const res=await loginAPI(user)
        userInfo.value=res.result;
    }

    //退出时清空用户数据：
    const clearUserInfo=()=>{
        userInfo.value={};
    }

    //3.返回一个对象格式把用户信息和获取方法返回
    return{
        userInfo,
        getuserInfo,
        clearUserInfo,
    }


},
    {
        persist:true
    }
)