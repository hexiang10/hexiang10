<template>
  <h2 class="flex items-center">
    <svg-icon :iconName="majorSkill.icon" />
    <span class="ml-1">{{ majorSkill.title }}</span>
  </h2>
  <hr />
  <div class="scroll" style="--t: 40s">
    <template v-for="item in 2">
      <div>
        <span v-for="ability in ability_1">{{ ability }}</span>
      </div>
    </template>
  </div>

  <div class="scroll" style="--t: 50s">
    <template v-for="item in 2">
      <div>
        <span v-for="ability in ability_2">{{ ability }}</span>
      </div>
    </template>
  </div>
</template>

<script setup>
// 专业技能
const majorSkill = reactive({
  title: '专业技能',
  icon: 'icon-zhuanyejineng',
  data: [],
})
const ability_1 = ref([
  'Java',
  'C++',
  'Python',
  'Mysql',
  'Redis',
  'MongoDB',
  'RabbitMQ',
  'Minio',
  'ElasticSearch',
  'Linux',
])
const ability_2 = ref([
  'HTML',
  'CSS',
  'Javascripts',
  'Vue',
  'Git',
  'Nginx',
  'Docker',
  'Office',
])
</script>

<style scoped>
*::after,
*::before {
  box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

.scroll {
  position: relative;
  display: flex;
  /* width: 700px; */
  overflow: hidden;
  -webkit-mask-image: linear-gradient(
    90deg,
    transparent,
    #fff 20%,
    #fff 80%,
    transparent
  );
}

.scroll div {
  white-space: nowrap;
  animation: animate var(--t) linear infinite;
  animation-delay: calc(var(--t) / -1);
}

@keyframes animate {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.scroll div span {
  display: inline-flex;
  margin: 10px;
  background: #333;
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  transition: 0.5s;
  letter-spacing: 0.2em;
}

.scroll div span:hover {
  background: #4caf50;
  cursor: pointer;
}

.scroll div:nth-child(2) {
  animation: animate2 var(--t) linear infinite;
  animation-delay: calc(var(--t) / -2);
}

@keyframes animate2 {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-200%);
  }
}
</style>
