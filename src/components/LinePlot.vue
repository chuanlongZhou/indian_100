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
  emphasizedSeriesName: {
    type: String,
    default: "",
  },
});

// Chart container reference
const chartContainer = ref(null);
let chartInstance = null;
var colors = [
  "#EE6666",
  "#91CC75",
  "#546570",
  "#5470C6",
  "#7262FD",
  "#FAC858",
  "#C4CCD3",
];
// Initialize the chart
const initChart = () => {
  // console.log(props.emphasizedSeriesName);
  console.log(chartContainer.value);
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
      series: props.seriesData.map((series, index) => ({
        ...series,
        type: "line",
        // symbol: "circle",

      })),
    };

    chartInstance.setOption(options);
  }
};

// Watch for changes in seriesData and xAxisData to update the chart
watch(
  () => [props.seriesData, props.xAxisData],
  () => {
    // console.log(
    //   props.seriesData.map((series) => ({
    //     ...series,
    //     type: "line",
    //   }))
    // );

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
          series: props.seriesData.map((series, index) => ({
            ...series,
            type: "line",
            symbolSize:
              series.name === props.emphasizedSeriesName &&
              props.emphasizedSeriesName !== ""
                ? 15
                : 8,
            itemStyle: {
              color: colors[index],
              // color:
              //   series.name === props.emphasizedSeriesName &&
              //   props.emphasizedSeriesName !== ""
              //     ? "black"
              //     : colors[index],
              // borderColor: echarts.color.list[index],
              borderWidth: 2,
            },
            lineStyle: {
              opacity:
                series.name === props.emphasizedSeriesName &&
                props.emphasizedSeriesName !== ""
                  ? 1
                  : 0.5,
              width:
                series.name === props.emphasizedSeriesName &&
                props.emphasizedSeriesName !== ""
                  ? 12
                  : 5,
            },
            emphasis: {
              focus: "series",
              lineStyle: {
                opacity: 1,
              },
              itemStyle: {
                borderColor: "black",
                borderWidth: 2,
              },
            },
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
