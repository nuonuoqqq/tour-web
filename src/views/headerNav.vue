<template>
  <div>
    <div class="headerNav">
      <div class="header-logo">
        <img src="@/assets/logo.jpg" alt="" />
      </div>
      <div class="header-search">
        <el-input
          v-model="input3"
          style="max-width: 600px"
          placeholder="请输入内容"
          class="input-with-select"
        >
          <template #append>
            <el-button :icon="Search" />
          </template>
        </el-input>
      </div>
      <div class="header-right">
        <el-link :icon="Avatar">登录</el-link>
        <el-link target="_blank">注册</el-link>
        <el-dropdown>
          <span class="el-dropdown-link">
            我的订单
            <el-icon class="el-icon--right">
              <arrow-down />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item v-for="v in Myorder " :key="v.id">{{v.title}}</el-dropdown-item> <!--通过数组遍历——数据的模拟位，通过模拟后端返回数组对象来处理数据-->
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Search, Avatar,ArrowDown } from "@element-plus/icons-vue";
let Myorder = ref([
    {id:1,title:'酒店订单'},
    {id:2,title:'火车票订单'},
    {id:3,title:'飞机票订单'},
    {id:4,title:'旅游订单'},
    {id:5,title:'全部订单'},

])
</script>

<style scoped></style>
