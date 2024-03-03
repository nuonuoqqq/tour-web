<template>
  <div class="common-layout">
    <el-container>
      <!-- 左侧导航栏 -->
        <NavMenu />
      <el-container>
        <!-- 头部 -->
        <el-header>
        <Header />
        </el-header>
        <el-main>
          <Searchlist />
          <Topfilter />
          <!-- 推荐酒店 -->
          <Recommend />
        </el-main>
      </el-container>
    </el-container>
  </div>
    </template>
    
    <script setup>
import {ref} from 'vue'
import NavMenu from './navMenu.vue'
import Header from './headerNav.vue'
import Searchlist from './searchlist.vue'
import Topfilter from './topfilter.vue'
import Recommend from './recommend.vue'
    </script>
    
    
    <style scoped>

    </style>
    