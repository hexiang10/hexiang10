<template>
  <el-scrollbar>
    <div class="scrollbar-flex-content">
      <p v-for="item in projectList" class="scrollbar-demo-item">
        <el-link :underline="false" :href="item.url" target="_blank">{{
          item.name
        }}</el-link>
      </p>
    </div>
  </el-scrollbar>
</template>

<script setup>
const projectList = [
  {
    url: 'https://github.com/hexiang10/recruitment-data-analysis',
    name: '基于Python对招聘信息的数据分析',
  },
  {
    url: 'https://github.com/hexiang10/nuggets-blog',
    name: '仿掘金博客系统',
  },
  {
    url: 'https://github.com/hexiang10/performance-appraisal',
    name: '企业绩效管理系统',
  },
  {
    url: 'https://github.com/hexiang10/stock-management-system',
    name: '企业库存管理系统',
  },
]
</script>

<style scoped>
.scrollbar-flex-content {
  display: flex;
}
.scrollbar-demo-item {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  /* width: 100px; */
  height: 50px;
  margin: 10px;
  padding: 10px;
  text-align: center;
  border-radius: 4px;
  background: var(--el-color-danger-light-9);
  color: var(--el-color-danger);
}
</style>
