<template>
  <div class="mb-2">
    <h2 class="flex items-center">
      <svg-icon :iconName="edu.icon" />
      <span class="ml-1">{{ edu.title }}</span>
    </h2>
  </div>
  <!-- <hr /> -->
  <el-tabs type="border-card" class="demo-tabs">
    <el-tab-pane>
      <template #label>
        <span class="flex items-center">
          <el-image class="w-5 h-5 mr-1" src="https://img.picgo.net/2024/08/22/jluzh337ddc31a09d0b73.png" />
          <span>吉林大学珠海学院</span>
        </span>
      </template>
      <ul>
        <li>
          <h3>
            <span class="stress">软件工程专业（本科）</span>
            <time>2019.09 — 2023.07</time>
          </h3>
          <p style="margin-top: 0.2rem">
            🥇 专业排名<mark style="font-weight: bold">1/380</mark>，综合排名<mark style="font-weight: bold">前1%</mark>，GPA<mark
              style="font-weight: bold">3.78/4</mark>，成绩加权平均分<mark style="font-weight: bold">91.73</mark>，
            在校期间曾获 <span class="award"> 国家奖学金、</span>
            <span class="award"> 十佳大学生提名奖、</span>
            <span class="award"> 优秀共产党员</span>等荣誉， 多次荣获
            <span class="award"> 一等奖学金、</span>
            <span class="award"> 优秀学生、</span>
            <span class="award"> 学术和科技创新奖、</span>
            <span class="award"> 社会实践奖、</span>
            <span class="award"> 优秀学生干部</span>等奖项。
          </p>
        </li>
      </ul>
    </el-tab-pane>
    <!-- <el-tab-pane label="Config">Config</el-tab-pane>
    <el-tab-pane label="Role">Role</el-tab-pane>
    <el-tab-pane label="Task">Task</el-tab-pane> -->
    <div class="text-center">
      <h3 class="mb-2">南京信息工程大学硕士学位研究生笔试成绩</h3>
      <div style="font-size: 13px;">085404（专业学位）计算机科学与技术</div>
    </div>
    <div class="ml-10 mt-2 text-center">
      <el-row>
        <el-col :span="4">
          <el-statistic title="政治" :value="60" />
        </el-col>
        <el-col :span="4">
          <el-statistic :value="69" title="英语二">
          </el-statistic>
        </el-col>
        <el-col :span="4">
          <el-statistic title="数学二" :value="121" />
        </el-col>
        <el-col :span="5">
          <el-statistic title="数据结构" :value="122">
          </el-statistic>
        </el-col>
        <el-col :span="4">
          <el-statistic title="总分" :value="372">
          </el-statistic>
        </el-col>
      </el-row>
    </div>

  </el-tabs>

</template>

<!-- <template>
  <ul>
    <li>
      <h3>
        <span class="stress">吉林大学珠海学院 — 软件工程专业（本科）</span>
        <time>2019.09 — 2023.07</time>
      </h3>
      <p style="margin-top: 0.2rem">
        🥇 专业排名<mark style="font-weight: bold">1/380</mark>，综合排名<mark
          style="font-weight: bold"
          >前2%</mark
        >，GPA<mark style="font-weight: bold">3.78/4</mark>，成绩加权平均分<mark
          style="font-weight: bold"
          >91.73</mark
        >， 在校期间曾获 <span class="award"> 国家奖学金、</span>
        <span class="award"> 十佳大学生提名奖、</span>
        <span class="award"> 优秀共产党员</span>等荣誉， 多次荣获
        <span class="award"> 一等奖学金、</span>
        <span class="award"> 优秀学生、</span>
        <span class="award"> 学术和科技创新奖、</span>
        <span class="award"> 社会实践奖、</span>
        <span class="award"> 优秀学生干部</span>等奖项。
      </p>
    </li>
  </ul> 
</template> -->

<script setup>
// 教育经历
const edu = reactive({
  title: '教育经历',
  icon: 'icon-jiaoyujingli',
  data: [],
})
</script>
