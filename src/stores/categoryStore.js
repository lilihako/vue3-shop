// import { ref, onMounted } from 'vue'
// import { defineStore } from 'pinia'//在vite中已经配置过。自动导入组件
import { getCategoryAPI } from '@/apis/layout';

export const useCategoryStore = defineStore('category', () => {
  const categoryList = ref([]);
  const getCategory = async () => {
    const res = await getCategoryAPI();
    categoryList.value = res.result;
  }
  onMounted(() => getCategory())

  return {categoryList,getCategory}
})
