<template>
  <h2 class="flex items-center font-bold">
    <svg-icon :iconName="campus.icon" />
    <span class="ml-1">{{ campus.title }}</span>
  </h2>
  <hr class="mb-4" />
  <el-timeline>
    <el-timeline-item timestamp="2021.06 — 2022.06" placement="top">
      <el-card class="px-3 py-3">
        <span class="stress">● 计算机协会/主席团会长</span>
        <p class="px-3">
          ✅任职期间曾举办了蓝桥杯比赛、金山办公KOS应用大赛等多项赛事，负责管理协会各部门的工作任务，
          积极开展协会内部以及对外的学术交流活动，“计协论坛”创始成员，
          凝聚其他技术类协会成员合作参与人工智能职业技能大赛、计算机设计大赛等比赛与项目开发。
          任职期间荣获
          <span class="award">“优秀主席团”</span>。
        </p>
      </el-card>
    </el-timeline-item>
    <el-timeline-item timestamp="2021.06 — 2021.10" placement="top">
      <el-card class="px-3 py-3">
        <span class="stress">● 计算机学院/新生代理班长、软件工程专业代言人</span>
        <p class="px-3">
          ✅任职期间负责为入学新生介绍专业性质，学习方向，课程指导等工作，帮助新生更好地融入到专业学习当中。任职期间荣获
          <span class="award">“优秀专业代言人”、</span>
          <span class="award">“优秀新生代理班长”</span>。
        </p>
      </el-card>
    </el-timeline-item>
    <el-timeline-item timestamp="2020.06 — 2021.06" placement="top">
      <el-card class="px-3 py-3">
        <span class="stress">● 计算机协会/秘书处部长</span>
        <p class="px-3">
          ✅任职期间曾组织举办了四方交流会、软件设计大赛等10余项比赛和活动，
          并在协会内主持开展了office技能培训、无课表制作、电脑系统优化、编程技术指导等多项培训工作。任职期间荣获
          <span class="award">“优秀干部”、</span>
          <span class="award">“优秀社团骨干”</span>。
        </p>
      </el-card>
    </el-timeline-item>
    <el-timeline-item timestamp="2019.10 — 2020.06" placement="top">
      <el-card class="px-3 py-3">
        <span class="stress">● 校学生会/学习部干事</span>
        <p class="px-3">
          ✅负责开展和主持校级活动及比赛，曾组织过校级的辩论赛、校园十佳歌手大赛、金湾区双语比赛等多项比赛。任职期间荣获
          <span class="award">“部门之星”</span>。
        </p>
      </el-card>
    </el-timeline-item>
  </el-timeline>
  <div>
    <h3 class="font-bold text-center ">🎯在校期间实践经历🎯</h3>
  </div>
  <el-table :data="tableData" height="160" style="width: 100%" class="mb-4">
    <el-table-column prop="date"  width="80" />
    <el-table-column prop="name" />
  </el-table>
  <el-carousel height="300px" :interval="2000" indicator-position="outside">
    <el-carousel-item v-for="item in practice.data" :key="item">
      <el-image :src="item" class="w-full h-full"> </el-image>
    </el-carousel-item>
  </el-carousel>
</template>

<script setup>
// 校园经历
const campus = reactive({
  title: '校园经历',
  icon: 'icon-xiaoyuanjingli',
  data: [],
})
// 实践经历
const practice = reactive({
  title: '实践经历',
  icon: 'icon-a-danjian129',
  data: [
    'https://s21.ax1x.com/2024/08/21/pAi1jEV.jpg',
    'https://s21.ax1x.com/2024/08/21/pAi1vNT.jpg',
    'https://s21.ax1x.com/2024/08/21/pAi1OH0.jpg',
    'https://s21.ax1x.com/2024/08/21/pAi1LBq.jpg',
    'https://s21.ax1x.com/2024/08/21/pAi1qun.jpg',
    'https://s21.ax1x.com/2024/08/21/pAi1x4U.jpg',
  ],
})
const tableData = [
  {
    date: '2022年',
    name: '参加第二届字节跳动青训营，参与抖音APP项目和搜索引擎项目的实践和答辩',
  },
  {
    date: '2021年',
    name: '参加第二届珠港澳人工智能开发者论坛',
  }, {
    date: '2021年',
    name: '参加腾讯云启创中心学习实践',
  }, {
    date: '2021年',
    name: '前往华为鲲鹏创新中心交流学习',
  }, {
    date: '2021年',
    name: '参加两会知识宣传普及志愿活动，荣获“弘扬两个会精神优秀志愿者”表彰',
  }, {
    date: '2021年',
    name: '参加“请党放心，强国有我”暑假社会实践活动',
  }, {
    date: '2020年',
    name: '参加“党史支教活动”、“关怀服务长者”等志愿活动',
  },
  {
    date: '2019年',
    name: '参加第二届“励志学子成长营”，荣获“优秀学员”',
  }
]
</script>