<script setup>
import { vue3ScrollSeamless } from 'vue3-scroll-seamless'
import { reactive } from 'vue'
let list = reactive([
  {
    title: '2023 年，项目“共享助力车全自动立体停车场”成功授权',
    level: '发明专利',
  },
  {
    title: '2022 年，获第十三届挑战杯广东大学生创业计划竞赛',
    level: '银奖（省级）',
  },
  {
    title: '2022 年，获第十三届蓝桥杯全国软件和信息技术专业人才比赛',
    level: '三等奖（省级）',
  },
  {
    title: '2021 年，获珠海市第二届人工智能大赛职业技能大赛',
    level: '（市级）',
  },
  {
    title: '2021 年，千禧团队项目“共享助力停车场”获第二届菁牛汇校内选拔赛',
    level: '优胜奖（校级）',
  },
  {
    title: '2021 年，项目“小吉智”获软件设计大赛',
    level: '一等奖（校级）',
  },
  {
    title: '2021 年，项目“云祠堂”获软件设计大赛',
    level: '三等奖（校级）',
  },
  {
    title:
      '2020 年，项目“课后校园帮”获全国大学生互联网+大赛、大学生创新创业大赛',
    level: '三等奖（校级）',
  },
])
const classOptions = {
  hoverStop: false,
  step: 0.5,
}
</script>

<template>
  <div>
    <ClientOnly>
      <vue3ScrollSeamless
        class="scroll-wrap"
        :classOptions="classOptions"
        :dataList="list">
        <ul class="ui-wrap">
          <li v-for="(item, i) of list" :key="i">
            <p>
              {{ item.title }}
              <span class="award">{{ item.level }}</span>
            </p>
            <!-- <el-divider border-style="dashed" /> -->
          </li>
        </ul>
      </vue3ScrollSeamless></ClientOnly
    >
  </div>
</template>
<style>
.scroll-wrap {
  height: 250px;
  margin: 0 auto;
  overflow: hidden;
}
.ui-wrap {
  list-style: none;
  padding: 0;
  margin: 0 auto;
}
</style>
