<template>
  <div class="searchlist">
    <div class="searchlist-item">
      <div class="search-box">
        <label for="hotels-destination">目的地/酒店名称</label>
        <input type="text" id="hotels-destination" placeholder="北京" />
        <!-- 冒泡：从可获得的元素开始会一直冒泡到根元素当input框成为焦点的时候
                可以冒泡到上一级再冒泡到上一级直到根元素 -->
      </div>
    </div>
    <div class="searchlist-item">
      <div class="search-box">
        <label>入住时间/退房时间</label>
        <el-date-picker
          v-model="value1"
          type="datetimerange"
          start-placeholder="Start Date"
          end-placeholder="End Date"
          :default-time="defaultTime1"
        />
      </div>
    </div>
    <div class="searchlist-item">
      <div class="search-box">
        <label for="room-guest">房间及住客</label>
        <input type="text" id="room-guest" placeholder="1间/1位" />
      </div>
    </div>
    <div class="searchlist-item">
      <div class="search-box">
        <label for="keyword">关键词(选填)</label>
        <input type="text" id="keyword" placeholder="火车、酒店名称或区域" />
      </div>
    </div>
    <div class="searchlist-item">
      <el-button type="primary" :icon="Search"></el-button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Search } from '@element-plus/icons-vue'
</script>

<style scoped></style>
