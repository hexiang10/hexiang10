<template>
  <div>
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
  </div>
</template>

<script setup>
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
    { style: 'icon-zhengzhimianmao', name: '政治面貌', value: '中共党员🇨🇳' },
    { style: 'icon-juzhudizhi', name: '现居地址', value: '广东省 • 珠海市' },
    {
      style: 'icon-shouji',
      name: '联系电话',
      value: '(+86) 13232252220',
    },
    {
      style: 'icon-youxiang',
      name: '邮箱地址',
      value: 'hexiangjobs@qq.com',
    },
  ],
})
</script>
