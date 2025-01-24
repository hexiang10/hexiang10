<template>
  <div>
    <h2 class="flex items-center">
      <svg-icon :iconName="individuality.icon" />
      <span class="ml-1">{{ individuality.title }}</span>
    </h2>
    <hr />
    <div class="mt-4">
      <el-tag v-for="(item, index) in individuality.lable" :key="index"
        :type="individuality.style[Math.floor(Math.random() * 5)]" class="mb-2 ml-2">
        {{ item }}
      </el-tag>
    </div>
  </div>
</template>

<script setup>
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
</script>