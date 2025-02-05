<template>
  <div>
    <h2 class="flex items-center">
      <svg-icon :iconName="contactWay.icon" />
      <span class="ml-1">{{ contactWay.title }}</span>
    </h2>
    <hr />
    <!-- <div class="flex justify-between">
            <img src="https://img.shields.io/badge/-Github-000?style=flat&logo=Github&logoColor=white" />
            <img src="https://img.shields.io/badge/-Bilibili-blue?style=flat&logo=Bilibili&logoColor=pink" />
            <img src="https://img.shields.io/badge/-CSDN-c14438?style=flat&logo=Coil&logoColor=white" />
            <img src="https://img.shields.io/badge/-Tiktok-000?style=flat&logo=Tiktok&logoColor=white" />
          </div> -->
    <ul>
      <template v-for="item in contactWay.caontactList">
        <li class="mt-2 flex items-center">
          <svg-icon :icon-name="item.style" />
          <label class="ml-1">{{ item.name }}</label>
          <a :href="item.url" target="_blank">{{ item.value }}</a>
        </li>
      </template>
    </ul>
  </div>
</template>

<script setup>
// 联系方式
const contactWay = reactive({
  title: '我的频道',
  icon: 'icon-shipin',
  caontactList: [
    {
      name: '哔哩哔哩',
      style: 'icon-bilibilizhanghao',
      url: 'https://space.bilibili.com/495642569',
      value: 'bilibili.com/小何导儿',
    },
    {
      name: '我的博客',
      style: 'icon-csdn1-copy',
      url: 'https://blog.csdn.net/HXBest',
      value: 'blog.csdn/HackerYoung',
    },
    {
      name: 'GitHub🌐',
      style: 'icon-github',
      url: 'https://github.com/hexiang10',
      value: 'github.com/hexiang10',
    },
  ],
})
</script>
