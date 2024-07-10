<script setup>
//获取面包屑数据
import {useRoute} from "vue-router";
import {getCategoryFilterAPI, getSubCategoryAPI} from "@/apis/subcategory.js";
import GootsItem from "@/views/Home/components/GootsItem.vue";

const filterData=ref({});
const route=useRoute();
const getFilterData=async (id)=>{
  const res= await getCategoryFilterAPI(id);
  filterData.value=res.result;
}
onMounted(()=>getFilterData(route.params.id));



//获二级分类商品列表：
const goodList=ref([])
const reqData=ref({
  categoryId:route.params.id,
  page:1,
  pageSize:20,
  sortField:'publishTime'
})
const getGoodList=async ()=>{
  const res=await getSubCategoryAPI(reqData.value);
  goodList.value=res.result.items
}
onMounted(()=>getGoodList())

//切换tab显示改变
const tabChange=()=>{
  // console.log('tab切换了',reqData.value.sortField)
  reqData.value.page=1;
  getGoodList();
}

//实现商品列表的无限加载
const disabled=ref(false);
const load=async ()=>{
reqData.value.page++;
const res=await getSubCategoryAPI(reqData.value);
goodList.value=[...goodList.value,...res.result.items];//使用列表的扩展运算符，把新加载的数据加上去。

  //判断什么时候
  if(res.result.length===0){
    disabled.value=true;
  }
}
</script>

<template>
  <div class="container ">
    <!-- 面包屑 -->
    <div class="bread-container">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: `/category/${filterData.parentId}` }">
          {{filterData.parentName}}
        </el-breadcrumb-item>
        <el-breadcrumb-item>{{filterData.name}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="sub-container">
      <el-tabs v-model="reqData.sortField" @tab-change="tabChange">
        <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
        <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
        <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
      </el-tabs>
      <div class="body" v-infinite-scroll="load" :infinite-scroll-disabled="disabled">
        <!-- 商品列表-->
        <GootsItem v-for="good in goodList":good="good":key="good.id"></GootsItem>
      </div>
    </div>
  </div>

</template>



<style lang="scss" scoped>
.bread-container {
  padding: 25px 0;
  color: #666;
}

.sub-container {
  padding: 20px 10px;
  background-color: #fff;

  .body {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
  }

  .goods-item {
    display: block;
    width: 220px;
    margin-right: 20px;
    padding: 20px 30px;
    text-align: center;

    img {
      width: 160px;
      height: 160px;
    }

    p {
      padding-top: 10px;
    }

    .name {
      font-size: 16px;
    }

    .desc {
      color: #999;
      height: 29px;
    }

    .price {
      color: $priceColor;
      font-size: 20px;
    }
  }

  .pagination-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }


}
</style>