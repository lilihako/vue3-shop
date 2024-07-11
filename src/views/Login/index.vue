<script setup>

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
            <el-form label-position="right" label-width="60px" status-icon>
              <el-form-item label="账户">
                <el-input/>
              </el-form-item>
              <el-form-item label="密码">
                <el-input/>
              </el-form-item>
              <el-form-item label-width="22px">
                <el-checkbox size="large">
                  我已同意阅读服务条款
                </el-checkbox>
              </el-form-item>
              <el-button size="large" class="subBtn">点击登录</el-button>
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

    }
  }
}

</style>