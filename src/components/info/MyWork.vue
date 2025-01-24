<template>
  <h2 class="flex items-center">
    <svg-icon :iconName="work.icon" />
    <span class="ml-1">{{ work.title }}</span>
  </h2>
  <hr />
  <ul class="info-unit">
    <li>
      <h3>
        <span class="stress">珠海科技学院/外国语学院 — 学生思想政治辅导员</span>
        <time>2025.01 — 至今</time>
      </h3>
      <p class="font-bold" style="margin-top: 0.2rem; margin-bottom: 0.2rem">
        工作特色：
      </p>
      <ul class="info-content">
        <li>
          <span
            class="award">担任团委书记</span>，充分发挥思想引领与组织协调的能力优势，助力学生在多方面全面发展。思想引领方面，通过组织主题团日活动、思政讲座等形式，引导学生树立正确价值观，开展社会实践，让学生在社会中受教育、长才干。学业辅导上，组织学习帮扶小组和学习经验交流会，开展学科知识竞赛，营造良好学习氛围。学生社团管理上，加强对社团管理引导，鼓励开展特色活动和投身各类志愿服务与公益活动。在校园文化建设上，策划开展多彩活动，营造活力校园氛围，增强学生归属感与认同感。
        </li>
      </ul>
      <p class="font-bold" style="margin-top: 0.2rem; margin-bottom: 0.2rem">
        亮点成效：
      </p>
      <p>📅 2024-2025年度</p>
      <ul class="info-content">
        <li>
          工作案例《规范多元评价标准，深化育人发展内涵——对学生综合素质测评工作的分析和思考》，荣获广东高校思想政治工作优秀案例评选活动<span class="award">三等奖（省级）</span>。
        </li>
        <li>
          思政论文《学品养育工程视角下大学生综合素质测评体系的优化研究》，荣获广东高校思想政治工作优秀论文评选活动<span class="award">优秀奖（省级）</span>。
        </li>
      </ul>
    </li>
    <li>
      <h3>
        <span class="stress">珠海科技学院/计算机学院 — 学生思想政治辅导员</span>
        <time>2023.06 — 2025.01</time>
      </h3>
      <p class="font-bold" style="margin-top: 0.2rem; margin-bottom: 0.2rem">
        工作优势：
      </p>
      <ul class="info-content">
        <li>
          <span class="award">利用专业优势</span>，帮助学生做好学业辅导、赛事指导、职业规划，通过竞赛、分享会、招聘会助力学生成长成才。
        </li>
        <li>
          <span class="award">参与校友服务</span>，与学校上百余名校友建立起友好联系，积极融入各地区校友会的建设之中。
        </li>
        <li>
          <span class="award">开展校企合作</span>，与众多校内外企业实现资源对接，达成合作意向，形成互相支持共同发展的良好局面。
        </li>
      </ul>
      <p class="font-bold" style="margin-top: 0.2rem; margin-bottom: 0.2rem">
        亮点成效：
      </p>
      <p>📅 2023-2024年度</p>
      <ul class="info-content">
        <li>
          学生职业发展类案例作品《以兴促学，“职”引未来》，荣获广东高校思想政治工作优秀案例评选活动<span class="award">优秀奖（省级）</span>。
        </li>
        <li>
          获评第十五届蓝桥杯全国软件和信息技术专业人才大赛广东赛区软件组<span class="award">优秀指导教师</span>，所指导的8名学生<span class="award">均获省级</span>竞赛奖项。
        </li>
        <li>
          连续获评第五届、第六届全国高校计算机能力挑战赛<span class="award">优秀指导教师</span>，所指导的学生荣获华南赛区本研组二等奖。
        </li>
        <li>
          工作期间荣获<span class="award">就业工作先进集体、大运会总分第一名、精神文明奖、职规赛优秀组织奖、军训先进连</span>等多项学院集体荣誉。
        </li>
      </ul>
      <!-- <p class="font-bold" style="margin-top: 0.2rem; margin-bottom: 0.2rem">
        工作动态：
      </p>
      <MyWorkRecord01 /> -->
    </li>

    <li>
      <h3>
        <span class="stress">珠海科技学院/学生处 — 思想教育科实习生</span>
        <time>2023.03 — 2023.06</time>
      </h3>
      <ul class="info-content">
        <li>
          负责学生公益积分核查、解除处分记录归档、易班平台的建设与管理、学校各类活动的策划、组织和后台管理等。
        </li>
        <li>
          负责思想教育科日常事务文件的填写与上报以及相关数据的整理与归纳，同时协助完成领导交办的其他任务。
        </li>
      </ul>
    </li>
    <li>
      <h3>
        <span class="stress">远光软件股份有限公司 — 软件开发实习生</span>
        <time>2022.10 — 2023.03</time>
      </h3>
      <ul class="info-content">
        <li>
          主要参与了企业的九天技术社区项目和实践运用低代码开发平台，发版了快速上手低代码帮助文档以及技术社区
          产品发版文档。通过使用低代码技术开发设计实现了服务器管理项目、客户机管理项目，并通过用户体验平台的
          实践完善了低代码样例库。
        </li>
        <!-- <el-carousel
          :interval="3000"
          type="card"
          height="200px"
          indicator-position="none">
          <el-carousel-item v-for="item in yuanguang">
            <el-image class="w-full h-full" :src="item" />
          </el-carousel-item>
        </el-carousel> -->
      </ul>
    </li>
  </ul>
</template>

<script setup>
// 工作经历
const work = reactive({
  title: '工作经历',
  icon: 'icon-48copy22',
  data: [],
})
const yuanguang = [
  'https://img.picgo.net/2024/08/21/fastdoc94d2a5320de42078.png',
  'https://img.picgo.net/2024/08/21/didaima205961977307756a.png',
  'https://img.picgo.net/2024/08/21/tiyanpingtai6e3e4c7bf7748737.png',
  'https://img.picgo.net/2024/08/21/jishushequweb76c8b228bfbda11a.png',
  'https://img.picgo.net/2024/08/21/jishushequdoora11de9eeef633529.png',
  'https://img.picgo.net/2024/08/21/kehujif1893546896b215f.png',
]
</script>

<style scoped >
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>