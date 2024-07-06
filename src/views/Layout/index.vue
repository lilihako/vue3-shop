<script setup>

import LayoutHeader from "@/views/Layout/components/LayoutHeader.vue";
import LayoutFooter from "@/views/Layout/components/LayoutFooter.vue";
import MainNav from "./components/MainNav.vue";
import LayoutFixed from "./components/LayoutFixed.vue";



</script>

<template>

  <LayoutFixed></LayoutFixed> 
  <MainNav></MainNav>
  <LayoutHeader></LayoutHeader>
  <RouterView/>
  <LayoutFooter></LayoutFooter>
</template>

<style scoped>

</style>