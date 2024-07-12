//根据user对象进行登录，请求参数是user对象，包含用户名和密码
import http from "@/utils/http.js";

export function loginAPI(user){
    return http.post('login',user)
}