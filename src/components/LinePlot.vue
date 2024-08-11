<template>
  <div ref="chartContainer" :style="{ width: '100%', height: '600px' }"></div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import * as echarts from "echarts";

// Props
const props = defineProps({
  title: {
    type: String,
    default: "Line Chart",
  },
  xAxisData: {
    type: Array,
    required: true,
  },
  seriesData: {
    type: Array,
    required: true,
  },
});

// Chart container reference
const chartContainer = ref(null);
let chartInstance = null;

// Initialize the chart
const initChart = () => {
  if (chartContainer.value) {
    chartInstance = echarts.init(chartContainer.value);
    const options = {
      title: {
        text: props.title,
      },
      tooltip: {
        trigger: "axis",
      },
      legend: {
        data: props.seriesData.map((series) => series.name),
        top: "bottom",
      },
      xAxis: {
        type: "category",
        data: props.xAxisData,
      },
      yAxis: {
        type: "value",
      },
      series: props.seriesData.map((series) => ({
        ...series,
        type: "line",
        symbolSize: 10,
      })),
    };

    chartInstance.setOption(options);
  }
};

// Watch for changes in seriesData and xAxisData to update the chart
watch(
  () => [props.seriesData, props.xAxisData],
  () => {
    console.log(
      props.seriesData.map((series) => ({
        ...series,
        type: "line",
      }))
    );

    if (chartInstance) {
      chartInstance.setOption(
        {
          xAxis: {
            data: props.xAxisData,
          },
          legend: {
            data: props.seriesData.map((series) => series.name),
            top: "bottom",
          },
          series: props.seriesData.map((series) => ({
            ...series,
            type: "line",
            symbolSize: 10,
          })),
        },
        { replaceMerge: ["series"] }
      );
    }
  },
  { deep: true }
);

// Initialize the chart on mount
onMounted(() => {
  initChart();
});
</script>

<style scoped>
/* You can add additional styles here if needed */
</style>
