<template>
  <div
    ref="chartRef"
    :style="{ width: '100%', height: '230px',  }"></div>
</template>

<script setup>
import * as echarts from 'echarts/core'
import { TitleComponent, LegendComponent } from 'echarts/components'
import { RadarChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'
import { onMounted, ref } from 'vue'

// 初始化 ECharts
echarts.use([TitleComponent, LegendComponent, RadarChart, CanvasRenderer])

const chartRef = ref(null)

const initChart = () => {
  const myChart = echarts.init(chartRef.value)
  const option = {
    radar: {
      indicator: [
        { name: '思政教育', max: 16000 },
        { name: '深度学习', max: 16000 },
        { name: '软件开发', max: 30000 },
        { name: '云服务', max: 30000 },
        { name: 'AIGC', max: 32000 },
        { name: '人工智能', max: 25000 },
      ],
    },
    series: [
      {
        name: 'Budget vs spending',
        type: 'radar',
        data: [
          // {
          //   value: [4200, 3000, 20000, 35000, 50000, 18000],
          //   name: 'Allocated Budget',
          // },
          {
            value: [14000, 12000, 28000, 23000, 25000, 21000],
            name: 'Areas of interest',
          },
        ],
      },
    ],
  }

  // 设置图表选项
  myChart.setOption(option)

  // 当窗口大小改变时更新图表
  window.addEventListener('resize', () => {
    myChart.resize()
  })
}

onMounted(() => {
  initChart()
})
</script>
