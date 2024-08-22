<template>
  <div class="body">
    <header class="header"></header>

    <article class="container">
      <section class="side" id="side">
        <!-- 个人肖像 -->
        <div class="my-center-grid mb-3">
          <el-image
            class="w-1/2 mb-3"
            hide-on-click-modal
            :preview-src-list="myphoto"
            :src="myphoto[0]" />
          <!-- 座右铭或者岗位等，可自定义-->
          <h4 style="font-weight: bold">{{ post }}</h4>
        </div>

        <!-- 基本信息 -->
        <section class="info-unit">
          <h2 class="flex items-center">
            <svg-icon :iconName="baseInfo.icon" />
            <span class="ml-1">{{ baseInfo.title }}</span>
          </h2>
          <hr />
          <ul>
            <template v-for="item in baseInfo.infoList">
              <li class="mt-2 flex items-center">
                <svg-icon :icon-name="item.style" />
                <label class="ml-1">{{ item.name }}</label>
                <span>{{ item.value }}</span>
              </li>
            </template>
          </ul>
        </section>

        <!-- 联系方式 -->
        <section class="info-unit">
          <h2 class="flex items-center">
            <svg-icon :iconName="contactWay.icon" />
            <span class="ml-1">{{ contactWay.title }}</span>
          </h2>
          <hr />
          <ul>
            <template v-for="item in contactWay.caontactList">
              <li class="mt-2 flex items-center">
                <svg-icon :icon-name="item.style" />
                <label class="ml-1">{{ item.name }}</label>
                <a :href="item.url" target="_blank">{{ item.value }}</a>
              </li>
            </template>
          </ul>
        </section>

        <!-- 二维码 -->
        <section class="info-unit">
          <h2 class="flex items-center">
            <svg-icon :iconName="qrcode.icon" />
            <span class="ml-1">{{ qrcode.title }}</span>
          </h2>
          <hr />
          <el-image
            hide-on-click-modal
            :preview-src-list="qrcode.qrcodeList"
            :src="qrcode.qrcodeList[0]" />
        </section>

        <!-- 技能证书 -->
        <section class="info-unit">
          <h2 class="flex items-center">
            <svg-icon :iconName="skillsCertificate.icon" />
            <span class="ml-1">{{ skillsCertificate.title }}</span>
          </h2>
          <hr />
          <el-carousel
            :interval="2000"
            type="card"
            height="200px"
            indicator-position="none">
            <el-carousel-item v-for="item in skillsCertificate.data">
              <el-image class="h-full w-full" :src="item" />
            </el-carousel-item>
          </el-carousel>
        </section>

        <!-- 专业技能 -->
        <section class="info-unit">
          <h2 class="flex items-center">
            <svg-icon :iconName="majorSkill.icon" />
            <span class="ml-1">{{ majorSkill.title }}</span>
          </h2>
          <hr />
          <MySkills />
        </section>

        <!-- 研究领域 -->
        <section class="info-unit">
          <h2 class="flex items-center">
            <svg-icon :iconName="searchAear.icon" />
            <span class="ml-1">{{ searchAear.title }}</span>
          </h2>
          <hr />
          <MyRadarEchart />
        </section>

        <!-- 个性标签 -->
        <section class="info-unit">
          <h2 class="flex items-center">
            <svg-icon :iconName="individuality.icon" />
            <span class="ml-1">{{ individuality.title }}</span>
          </h2>
          <hr />
          <div class="mt-4">
            <el-tag
              v-for="(item, index) in individuality.lable"
              :key="index"
              :type="individuality.style[Math.floor(Math.random() * 5)]"
              class="mb-2 ml-2">
              {{ item }}
            </el-tag>
          </div>
        </section>
      </section>

      <!-- 简历主题区域 -->
      <section class="main">
        <!-- 教育经历 -->
        <section class="edu info-unit">
          <h2 class="flex items-center">
            <svg-icon :iconName="edu.icon" />
            <span class="ml-1">{{ edu.title }}</span>
          </h2>
          <!-- <hr /> -->
          <MyEdu class="mt-4" />
        </section>

        <!-- 工作经历 -->
        <section class="info-unit">
          <h2 class="flex items-center">
            <svg-icon :iconName="work.icon" />
            <span class="ml-1">{{ work.title }}</span>
          </h2>
          <hr />
          <MyWork />
        </section>

        <!-- 校园经历 -->
        <section>
          <h2 class="flex items-center font-bold">
            <svg-icon :iconName="campus.icon" />
            <span class="ml-1">{{ campus.title }}</span>
          </h2>
          <hr class="mb-4" />
          <MyCampus />
        </section>

        <!-- 项目经验 -->
        <section class="info-unit">
          <h2 class="flex items-center">
            <svg-icon :iconName="project.icon" />
            <span class="ml-1">{{ project.title }}</span>
          </h2>
          <!-- <hr /> -->
          <MyProjects class="mt-3" />
        </section>

        <!-- 比赛经历 -->
        <section class="work info-unit">
          <h2 class="flex items-center">
            <svg-icon :iconName="competition.icon" />
            <span class="ml-1">{{ competition.title }}</span>
          </h2>
          <hr />
          <MyCompetitions />
        </section>

        <!-- 实践经历 -->
        <section>
          <h2 class="flex items-center">
            <svg-icon :iconName="practice.icon" />
            <span class="ml-1 font-bold">{{ practice.title }}</span>
          </h2>
          <hr />
          <el-carousel
            height="300px"
            :interval="2000"
            indicator-position="outside">
            <el-carousel-item v-for="item in practice.data" :key="item">
              <el-image :src="item" class="w-full h-full"> </el-image>
            </el-carousel-item>
          </el-carousel>
        </section>
      </section>
    </article>

    <footer class="footer">
      <p>
        Copyright © {{ new Date().getFullYear() }} He Xiang. All Rights
        Reserved.
      </p>
    </footer>

    <!-- 侧栏 -->
    <aside>
      <ul>
        <li>
          <a herf="#" @click="handleEn">English</a>
        </li>
        <li>
          <a href="https://github.com/hexiang10/hexiang10" target="_blank"
            >源码地址</a
          >
        </li>
      </ul>
    </aside>
  </div>
</template>

<script setup>
import msgUtil from '@/utils/msgUtil'

// 个人肖像
const myphoto = ref([
  'https://s21.ax1x.com/2024/08/19/pAP1V8H.jpg',
  'https://img.picgo.net/2024/08/23/IMG_20230715_171133c1d820d488ebe7a3.jpg',
  'https://img.picgo.net/2024/08/23/IMG_20240211_220800a1f55363c5b9c352.jpg',
  'https://img.picgo.net/2024/08/23/IMG_20240118_135710b9acdb7249699125.jpg',
])

// 座右铭
const post = 'He Xiang'

// 基本信息
const baseInfo = reactive({
  title: '基本信息',
  icon: 'icon-info',
  infoList: [
    {
      style: 'icon-gerenxinxi',
      name: '个人信息',
      value: '何翔 / 男 / ' + (new Date().getFullYear() - 2000) + '岁',
    },
    { style: 'icon-zhengzhimianmao', name: '政治面貌', value: '🚩中共党员' },
    { style: 'icon-juzhudizhi', name: '现居地址', value: '广东省•珠海市' },
  ],
})

// 联系方式
const contactWay = reactive({
  title: '联系方式',
  icon: 'icon-lianxifangshilogo',
  caontactList: [
    {
      name: '邮箱地址',
      style: 'icon-youxiang',
      url: 'https://mail.qq.com/',
      value: 'hexiangjobs@qq.com',
    },
    {
      name: '博客地址',
      style: 'icon-csdn1-copy',
      url: 'https://blog.csdn.net/HXBest',
      value: 'blog.csdn.net/HXBest',
    },
    {
      name: 'GitHub😺',
      style: 'icon-github',
      url: 'https://github.com/hexiang10',
      value: 'github.com/hexiang10',
    },
  ],
})

// 二维码
const qrcode = reactive({
  title: '二维码',
  icon: 'icon-erweima',
  qrcodeList: [
    'https://img.picgo.net/2024/08/20/qq_qrcodef59936ef8c19df0b.jpg',
  ],
})

// 技能证书
const skillsCertificate = reactive({
  title: '技能证书',
  icon: 'icon-jinengzhengshu',
  data: [
    'https://s21.ax1x.com/2024/08/19/pAPw6rF.jpg',
    'https://s21.ax1x.com/2024/08/19/pAPwyKU.jpg',
    'https://s21.ax1x.com/2024/08/20/pAPqM3q.png',
    'https://s21.ax1x.com/2024/08/19/pAPw0Cq.jpg',
    'https://s21.ax1x.com/2024/08/19/pAPwD2V.jpg',
    'https://s21.ax1x.com/2024/08/19/pAPwB80.jpg',
  ],
})

// 专业技能
const majorSkill = reactive({
  title: '专业技能',
  icon: 'icon-zhuanyejineng',
  data: [],
})

// 研究领域
const searchAear = reactive({
  title: '研究领域',
  icon: 'icon-zhuanyezhishijineng',
  data: [],
})

// 个性标签或者自我评价
const individuality = reactive({
  title: '个性标签',
  icon: 'icon-ziwopingjia',
  style: ['primary', 'success', 'info', 'warning', 'danger'],
  lable: [
    '积极',
    '上进',
    '阳光',
    '开朗',
    '活泼',
    '独立',
    '自信',
    '勤奋',
    '努力',
    '创新',
    '团队',
    '沟通',
    '学习',
    '适应',
    '抗压',
    '责任',
    '执行',
    '领导',
    '协作',
    '耐心',
    '篮球',
    '游泳',
    '乒乓',
    '羽毛',
    '跑步',
    '音乐',
    '电影',
    '旅行',
    '编程',
    '摄影',
  ],
})

// 教育经历
const edu = reactive({
  title: '教育经历',
  icon: 'icon-jiaoyujingli',
  data: [],
})

// 工作经历
const work = reactive({
  title: '工作经历',
  icon: 'icon-48copy22',
  data: [],
})

// 校园经历
const campus = reactive({
  title: '校园经历',
  icon: 'icon-xiaoyuanjingli',
  data: [],
})

// 项目经验
const project = reactive({
  title: '项目经验',
  icon: 'icon-xiangmujingyan-',
  data: [],
})

// 比赛经历
const competition = reactive({
  title: '比赛经历',
  icon: 'icon-awardrecord',
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

const handleEn = () => {
  msgUtil.msgWarn('暂未完善，敬请期待')
}
</script>

<style>
@import url('@/assets/css/typo.css');
@import url('@/assets/css/index.css');
</style>
