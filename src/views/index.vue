<template>
  <div class="body">
    <header class="header"></header>

    <article class="container">
      <section class="side" id="side">
        <!-- 个人肖像 -->
        <div class="my-center-grid mb-3">
          <el-image class="w-1/2 mb-3" hide-on-click-modal :preview-src-list="myphoto" :src="myphoto[0]" />
          <!-- 座右铭或者岗位等，可自定义-->
          <h4 style="font-weight: bold">{{ post }}</h4>
        </div>

        <!-- 基本信息 -->
        <section class="info-unit">
          <MyContact />
        </section>

        <!-- 我的频道 -->
        <section class="info-unit">
          <MyChannel />
        </section>

        <!-- 加我好友 -->
        <section class="info-unit">
          <h2 class="flex items-center">
            <svg-icon :iconName="qrcode.icon" />
            <span class="ml-1">{{ qrcode.title }}</span>
          </h2>
          <hr />
          <el-image hide-on-click-modal :preview-src-list="qrcode.qrcodeList" :src="qrcode.qrcodeList[0]" />
        </section>

        <!-- 技能证书 -->
        <section class="info-unit">
          <h2 class="flex items-center">
            <svg-icon :iconName="skillsCertificate.icon" />
            <span class="ml-1">{{ skillsCertificate.title }}</span>
          </h2>
          <hr />
          <el-carousel :interval="2000" type="card" height="200px" indicator-position="none">
            <el-carousel-item v-for="item in skillsCertificate.data">
              <el-image class="h-full w-full" :src="item" />
            </el-carousel-item>
          </el-carousel>
        </section>

        <!-- 专业能力 -->
        <section class="info-unit">
          <MySkills />
        </section>

        <!-- 研究领域 -->
        <section class="info-unit">
          <MyRadarEchart />
        </section>

        <!-- 个性标签 -->
        <section class="info-unit">
          <MyPersonalTag />
        </section>
      </section>

      <!-- 简历主题区域 -->
      <section class="main">
        <!-- 教育经历 -->
        <section class="edu info-unit">
          <MyEdu />
        </section>

        <!-- 工作经历 -->
        <section class="info-unit">
          <MyWork />
        </section>

        <!-- 科研项目 -->
        <section class="info-unit">
          <MyProjects />
        </section>

        <!-- 比赛经历 -->
        <section class="work info-unit">
          <MyCompetitions />
        </section>
        
        <!-- 校园经历 -->
        <section>
          <MyCampus />
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
          <a href="https://github.com/hexiang10/hexiang10" target="_blank">源码地址</a>
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
  // 'https://img.picgo.net/2024/08/23/IMG_20230715_171133c1d820d488ebe7a3.jpg',
  // 'https://img.picgo.net/2024/08/23/IMG_20240211_220800a1f55363c5b9c352.jpg',
  // 'https://img.picgo.net/2024/08/23/IMG_20240118_135710b9acdb7249699125.jpg',
])

// 座右铭
const post = 'He Xiang'

// 二维码
const qrcode = reactive({
  title: '加我好友',
  icon: 'icon-erweima',
  qrcodeList: [
    'https://img.picgo.net/2025/01/23/5442c766cb537d0840e1964799cb9439013c5ab226ade019.png',
  ],
})

// 技能证书
const skillsCertificate = reactive({
  title: '职业证书',
  icon: 'icon-jinengzhengshu',
  data: [
    'https://s21.ax1x.com/2024/08/19/pAPw6rF.jpg',
    'https://s21.ax1x.com/2024/08/19/pAPwyKU.jpg',
    'https://s21.ax1x.com/2025/01/24/pEEesXT.png',
    'https://s21.ax1x.com/2025/01/24/pEEe6nU.png',
    'https://s21.ax1x.com/2024/08/19/pAPwD2V.jpg',
    'https://s21.ax1x.com/2024/08/19/pAPwB80.jpg',
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
