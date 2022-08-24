<template>
  <div class="dashboard">
    <div ref="divRef"></div>
  </div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts'
import { ref, onMounted } from 'vue'

const divRef = ref<HTMLElement>()
onMounted(() => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const echartInstance = echarts.init(divRef.value!, 'light', { renderer: 'svg' })
  const option = {
    title: {
      text: 'ECharts 入门示例'
    },
    tooltip: {},
    legend: {
      data: ['销量']
    },
    xAxis: {
      data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    },
    yAxis: {},
    series: [
      {
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }
    ]
  }
  echartInstance.setOption(option)
})
</script>

<style scoped></style>
