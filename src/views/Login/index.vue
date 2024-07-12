<script setup>
//表单校验的操作
import {loginAPI} from "@/apis/user.js";
// //先导入element-plus需要的样式和组件
// import{ElMessage} from "element-plus";
// import 'element-plus/theme-chalk/el-message.css'
import router from "@/router/index.js";
import {ElMessage} from "element-plus";
import {useUserStore} from "@/stores/userStore.js";

const form=ref({
  account:'heima290',
  password:'hm#qd@23!',
  agree:true
})//先声明一个响应式对象，用来响应表单的值
const rules={
  account:[{
    required:true,message:'用户名不能为空',trigger:'blur'
  }],
  password:[{
    required:true,message:'密码不能为空',trigger:'blur'
  },{
    min:6,max:14,message: '密码需要6-14位',trigger:'blur'
  }],
  agree:[{
    validator(rule,value,callback){
      if(value){
        callback();
      }else {
        callback(new Error('请勾选协议'))
      }
    }
  }]
}//声明一个普通对象：普通对象不会被vue跟踪变化，变化后vue不会为其更DOM，所以是普通对象，这个普通对象定义了账号、密码的校验规则

const userInfo=useUserStore();
// 表单的统一验证
const formRef=ref(null);
const login=()=>{
  formRef.value.validate( async (valid)=>{
    if(valid){
      // try {
      //   const {account, password} = form.value;
      //   await loginAPI({account, password});
      //   // console.log(res);
      //   ElMessage({type: 'success', message: '登陆成功'});
      //   router.replace({path: '/'});
      // }catch (e){
      //   ElMessage({type: 'error', message: e.respose.data.message});
      // }
      const {account,password}=form.value;
      // await loginAPI({account,password});
      await userInfo.getuserInfo({account,password});
      ElMessage({type:'success',message:'登陆成功'});
      router.replace({path:'/'});
    }
  });


}
</script>


<template>
  <div>
    <header class="login-header">
      <div class="container m-top-20">
        <h1 class="logo">
          <RouterLink to="/">鸣鸣商城</RouterLink>
        </h1>
        <RouterLink class="entry" to="/">
          进入网站首页
          <i class="iconfont icon-angle-left"></i>
          <i class="iconfont icon-angle-right"></i>
        </RouterLink>
      </div>
    </header>
    <section class="login-section">
      <div class="wrapper">
        <nav>
          <a href="javascript:;">账户登录</a>
        </nav>
        <div class="account-box">
          <div class="form">
            <el-form ref="formRef" label-position="right" label-width="60px" status-icon :model="form" :rules="rules">
<!--              为表单元素绑定响应式对象和规则 绑定响应式数据时需要用:model-->
              <el-form-item label="账户" prop="account">
                <el-input v-model="form.account"/>
              </el-form-item>
              <el-form-item label="密码" prop="password">
                <el-input  v-model="form.password" show-password/>
              </el-form-item>
              <el-form-item label-width="22px" prop="agree">
                <el-checkbox size="large" v-model="form.agree">
                  我已同意阅读服务条款
                </el-checkbox>
              </el-form-item>
              <el-button size="large" class="subBtn" @click="login">点击登录</el-button>
            </el-form>
          </div>
        </div>
      </div>
    </section>

    <footer class="login-footer">
      <div class="container">
        <p>
          <a href="javascript:;">关于我们</a>
          <a href="javascript:;">帮助中心</a>
          <a href="javascript:;">售后服务</a>
          <a href="javascript:;">配送与验收</a>
          <a href="javascript:;">商务合作</a>
          <a href="javascript:;">搜索推荐</a>
          <a href="javascript:;">友情链接</a>
        </p>
        <p>CopyRight &copy; 鸣鸣商城</p>

      </div>

    </footer>
  </div>

</template>

<style scoped lang="scss">
.login-header{
  background-color:#fff;
  border-bottom: 1px solid #e4e4e4;
  .container{
    display: flex;
    align-items:flex-end;
    justify-content:space-between;
  }
  .logo{
    width: 200px;
    a{
      display: block;
      height:132px;
      width:100%;
      text-indent: -9999px;
      background: url("@/assets/images/logo.png") no-repeat center 18px / contain;
    }
  }
  .sub{
    flex: 1;
    font-size:24px;
    font-weight: normal;
    margin-bottom: 38px;
    margin-left: 20px;
    color:#666;
  }
  .entry{
    width:120px;
    margin-bottom: 38px;
    font-size: 16px;
    i{
      font-size: 14px;
      color: $xtxColor;
      letter-spacing: -5px;
    }
  }
}
.login-section {

  background: url("@/assets/images/R-C.gif")repeat ;
  height: 488px;
  position: relative;
  .wrapper{
    width: 380px;
    background: #fff;
    position: absolute;
    left: 35%;
    top:54px;
    transform: translate3d(100px,0,0);
    box-shadow: 0 0 10px rgba(0,0,0,0.15);
    nav{
      font-size: 14px;
      height: 55px;
      margin-bottom: 20px;
      border-bottom: 1px solid #f5f5f5;
      display: flex;
      padding: 0 40px;
      text-align: right;
      align-items: center;
      a{
        flex: 1;
        line-height: 1;
        display: inline-block;
        font-size: 18px;
        position: relative;
        text-align: center;
      }
    }


  }

}
.login-footer{
  padding: 30px 0 50px;
  background: #fff;
  p{
    text-align: center;
    color:#999;
    padding-top:20px;
    a{
      line-height: 1px;
      padding:0 10px;
      color:#999;
      display: inline-block;
      ~a{
        border-left:1px solid #ccc;
      }

    }
  }
}
.account-box{
  .toggle{
    padding:15px 40px;
    text-align:right;
    a{
      color:$xtxColor;
      i{
        font-size: 14px;
      }
    }
  }
  .form{
    padding: 0 20px 20px 20px;
    &-item{
      margin-bottom: 28px;
      .input{
        position: relative;
        height:36px;
        >i{
          width: 34px;
          height:34px;
          background: #cfcdcd;
          color:#fff;
          position: absolute;
          left:1px;
          top:1px;
          text-align: center;
          line-height: 34px;
          font-size: 18px;
        }
        input{
          padding-left: 44px;
          border:1px solid #cfcdcd;
          height:36px;
          line-height: 36px;
          width: 100%;
          &.error{
            border-color:$priceColor;
          }
          &.active,
          &.focus{
            border-color:$xtxColor;
          }
        }
        .code {
          position: absolute;
          right: 1px;
          top: 1px;
          text-align: center;
          line-height: 34px;
          font-size: 14px;
          background: #f5f5f5;
          color: #666;
          width: 90px;
          height: 34px;
          cursor: pointer;
        }
      }

      >.error {
        position: absolute;
        font-size: 12px;
        line-height: 28px;
        color: $priceColor;

        i {
          font-size: 14px;
          margin-right: 2px;
        }
      }
    }

    .agree {
      a {
        color: #069;
      }
    }

    .btn {
      display: block;
      width: 100%;
      height: 40px;
      color: #fff;
      text-align: center;
      line-height: 40px;
      background: $xtxColor;

      &.disabled {
        background: #cfcdcd;
      }
    }
  }

  .action {
    padding: 20px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .url {
      a {
        color: #999;
        margin-left: 10px;
      }
    }
  }
}

.subBtn {
  background: $xtxColor;
  width: 100%;
  color: #fff;
}
</style>