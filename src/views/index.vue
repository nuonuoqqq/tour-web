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
        </el-main>
      </el-container>
    </el-container>
  </div>
    </template>
    
    <script setup>
import NavMenu from './navMenu.vue'
import Header from './headerNav.vue'
import Searchlist from './searchlist.vue'
    </script>
    
    
    <style scoped>
    
    </style>
    