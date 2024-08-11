<template>
  <v-hover v-slot="{ isHovering, props }">
    <v-card
      v-bind="props"
      :elevation="isHovering ? 5 : 0"
      class="mb-10 py-10 chart-container"
    >
      <!-- <v-chart class="chart" :option="option" autoresize /> -->
      <div class="chart" id="main_mapchart"></div>
    </v-card>
  </v-hover>
</template>
    
    <script>
import * as echarts from "echarts";
import "echarts-gl";
import worldMapData from "@/assets/map/world.json"; // Replace with the actual path
// import gps from '@/assets/map/gps_0.bin'; // Replace with the actual path

// import VChart, { THEME_KEY } from "vue-echarts";
import { ref, provide } from "vue";

export default {
  setup() {
    const option = ref({});
    var myChart = ref(null);
    // var chartDom = ref(document.getElementById('main_linechart'));

    // expose to template and other options API hooks
    return {
      option,
      myChart
    };
  },
  mounted() {
    echarts.registerMap("world", worldMapData);
    this.myChart = echarts.init(document.getElementById("main_mapchart"));

    this.option = {
      backgroundColor: "#000",
      // title: {
      //   text: "10000000 GPS Points",
      //   left: "center",
      //   textStyle: {
      //     color: "#fff",
      //   },
      // },
      geo: {
        map: "world",
        // center: [ 78.13801567998249, 20.603927956140748,],
        // zoom: 5,
        roam: true,
        label: {
          emphasis: {
            show: false,
          },
        },
        silent: true,
        itemStyle: {
          normal: {
            areaColor: "#323c48",
            borderColor: "#111",
          },
          emphasis: {
            areaColor: "#2a333d",
          },
        },
      },
      series: [
        {
          name: "弱",
          type: "scatterGL",
          progressive: 1e6,
          coordinateSystem: "geo",
          symbolSize: 1,
          zoomScale: 0.002,
          blendMode: "lighter",
          large: true,
          itemStyle: {
            color: "rgb(20, 15, 2)",
          },
          postEffect: {
            enable: true,
          },
          silent: true,
          dimensions: ["lng", "lat"],
          data: new Float32Array(),
        },
      ],
    };
    this.myChart.setOption(this.option);
  },
};
</script>
    
<style scoped>
.chart-container {
  display: flex;
  justify-content: center;
}
.chart {
  align-self: center;
  height: 800px;
  width: 75%;
}
</style>
    