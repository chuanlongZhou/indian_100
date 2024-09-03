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
import IndianState from "@/assets/map/Indian_States.json"; // Replace with the actual path
import IndianCity from "@/assets/map/cities_center.json"; // Replace with the actual path
// import HK from "@/assets/map/HK.json"; // Replace with the actual path
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
      myChart,
    };
  },
  mounted() {
    echarts.registerMap("india", IndianState);
    echarts.registerMap("city", IndianCity);
    this.myChart = echarts.init(document.getElementById("main_mapchart"));

    this.option = {
      //   tooltip: {
      //     trigger: "item",
      //     formatter: function (params) {
      //       return `${params.name}<br/>Value: ${params.value[2]}`;
      //     },
      //   },
      backgroundColor: "#2a3645",
      // title: {
      //   text: "10000000 GPS Points",
      //   left: "center",
      //   textStyle: {
      //     color: "#fff",
      //   },
      // },
      geo: {
        map: "india",
        // center: [ 78.13801567998249, 20.603927956140748,],
        // zoom: 2,
        roam: true,
        label: {
          emphasis: {
            show: true,
          },
        },
        silent: false,
        itemStyle: {
          normal: {
            areaColor: "#323c48",
            borderColor: "#111",
          },
          emphasis: {
            areaColor: "#697d96",
          },
        },
      },
      series: [
        {
          name: "City Data",
          type: "scatter",
          coordinateSystem: "geo",
          data: IndianCity.features.map((city) => ({
            name: city.properties.cityname,
            value: [
              city.geometry.coordinates[0], // Longitude
              city.geometry.coordinates[1], // Latitude
              city.properties.population / 50000, // Value
            ],
          })),
          symbolSize: function (val) {
            // min 10, max 100
            return val[2] / 10 < 3 ? 3 : val[2] / 10; // Adjust the symbol size based on the value
          },
          label: {
            formatter: "{b}",
            position: "right",
            show: false,
          },
          itemStyle: {
            color: "#e89968",
          },
          emphasis: {
            label: {
              show: true,
            },
          },
        },

        {
          name: "Top 5",
          type: "effectScatter",
          coordinateSystem: "geo",
          data: IndianCity.features
            .map((city) => ({
              name: city.properties.cityname,
              value: [
                city.geometry.coordinates[0], // Longitude
                city.geometry.coordinates[1], // Latitude
                city.properties.population / 50000, // Value
              ],
            }))
            .sort((a, b) => b.value[2] - a.value[2]) // Sort by population value (descending order)
            .slice(0, 5), // Take the top 5 cities
          symbolSize: function (val) {
            return val[2] / 10;
          },
          encode: {
            value: 2,
          },
          showEffectOn: "render",
          rippleEffect: {
            brushType: "stroke",
          },
          label: {
            formatter: "{b}",
            position: "right",
            show: true,
          },
          itemStyle: {
            color: "#de5637",
            shadowBlur: 10,
            shadowColor: "#333",
          },
          emphasis: {
            scale: true,
          },
          zlevel: 1,
        },
      ],
    };
    console.log(this.option);
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
      