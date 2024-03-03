<template>
  <div class="topfilter">
    <div>
      <h4>位置区域</h4>
    </div>
    <div class="topfilter-tab">
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane
          :label="v.label"
          :name="v.name"
          v-for="v in topfilterlist"
          :key="v.id"
        >
          <el-button
            v-for="(k, i) in v.list"
            :key="i"
            size="small"
            type="info"
            plain
            >{{ k }}</el-button
          >
        </el-tab-pane>
      </el-tabs>
    </div>
    <div>
      <h4>星级价格</h4>
    </div>
    <div class="topfilter-price">
      <el-button
        size="small"
        type="info"
        plain
        v-for="(v, i) in pricelist"
        :key="i"
        >{{ v }}</el-button
      >
    </div>
    <div>
      <h4>高级筛选</h4>
    </div>
    <div class="topfilter-filter">
      <el-dropdown v-for="(v,i) in filterlist" :key="i">  <!--v表示数组里的每一个对象-->
        <span class="el-dropdown-link">
            {{ v.title }}
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item v-for="(k,i) in v.list">{{k}}</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { ArrowDown } from "@element-plus/icons-vue";
const activeName = ref("first");
let topfilterlist = ref([
  {
    id: 1,
    name: "first",
    label: "热门筛选",
    list: ["天安门广场", "王府井", "北京大学"],
  },
  {
    id: 2,
    name: "second",
    label: "机场车票",
    list: ["北京南站", "北京西站", "北京火车站"],
  },
  {
    id: 3,
    name: "third",
    label: "商业区",
    list: ["三里屯", "国贸地区", "西直门"],
  },
  {
    id: 4,
    name: "fourth",
    label: "景点",
    list: ["什沙海", "前门大街", "五道口"],
  },
]);
let pricelist = ref(["五星(钻级)", "四星(钻级)", "三星(钻级)"]);
let filterlist = ref([
    {title:'早餐',list:['含早餐','单份早餐','双份早餐','多份早餐']},
    {title:'支付方式',list:['到店付款','在线付款','闪住']},
    {title:'房型',list:['单人床','双人床','三人床','大床房','特大床房']},
    {title:'酒店设施',list:['免费停车','室内游泳','免费早餐','大床房','特大床房']},
])

</script>

<style scoped></style>
