<template>
  <div class="banner">
    <el-carousel height="620px">
      <el-carousel-item  v-for="item in bannerlist" :key="item.id">
        <img :src="`/src/assets/images/${item.img_url}`" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup>
import { ref } from "vue";
let bannerlist = ref([
    {id:1,img_url:'tianan.jpg'},
    {id:2,img_url:'yunnan.jpg'},
    {id:3,img_url:'guizhou.jpg'},
    {id:4,img_url:'shanxi.jpg'},
    {id:5,img_url:'changan.jpg'},
])
</script>

<style scoped></style>
