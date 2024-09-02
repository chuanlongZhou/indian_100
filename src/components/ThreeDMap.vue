<template>
  <v-hover v-slot="{ isHovering, props }">
    <v-card v-bind="props" :elevation="isHovering ? 5 : 0" class="mb-10 pt-10">
      <!-- <v-chart class="chart" :option="option" autoresize /> -->
      <div class="chart" style="height: 700px" id="three_d_mapchart"></div>
    </v-card>
  </v-hover>
</template>
    
    <script>
import * as echarts from "echarts";
import "echarts-gl";
// import { use } from "echarts/core";
// import { CanvasRenderer } from "echarts/renderers";
// import { PieChart } from "echarts/charts";
// import {
//   TitleComponent,
//   TooltipComponent,
//   LegendComponent,
// } from "echarts/components";
// import VChart, { THEME_KEY } from "vue-echarts";
import { ref, provide } from "vue";

export default {
  methods: {
    async fetchPopulationData() {
      try {
        const response = await fetch("/3dmap/population.json"); // Path relative to the public folder
        if (!response.ok) {
          throw new Error("Failed to load the JSON file");
        }
        this.populationData = await response.json();
        this.dataLoaded = true;

        this.data = this.populationData
          .filter(function (dataItem) {
            return dataItem[2] > 0;
          })
          .map(function (dataItem) {
            return [dataItem[0], dataItem[1], Math.sqrt(dataItem[2])];
          });
      } catch (error) {
        console.error("Error loading JSON data:", error);
      }
    },
  },
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
    this.fetchPopulationData().then(() => {
      // this.initChart();

      console.log("Population data:", this.data);

      this.myChart = echarts.init(document.getElementById("three_d_mapchart"));
    });

    this.option = {
      title: {
        text: "Indian Population",
        left: "5%",
        top: "0%",
      },
      legend: {
        right: "10%",
        top: "3%",
        data: [
          "CO2 Emission per Capita - China",
          "CO2 Emission per Capita - India",
        ],
      },
      grid: {
        left: "8%",
        top: "10%",
      },
      xAxis: {
        type: "value",
        min: 1990,
        max: 2020,
        splitLine: {
          lineStyle: {
            type: "dashed",
          },
        },
      },
      yAxis: {
        splitLine: {
          lineStyle: {
            type: "dashed",
          },
        },
        scale: true,
      },
      series: [
        {
          name: "CO2 Emission per Capita - China",
          data: data[1],
          type: "scatter",
          symbolSize: function (data) {
            return Math.sqrt(data[2]) * 15;
          },
          emphasis: {
            focus: "series",
            label: {
              show: true,
              formatter: function (param) {
                return param.data[2];
              },
              position: "top",
            },
          },
          itemStyle: {
            shadowBlur: 10,
            shadowColor: "rgba(25, 100, 150, 0.5)",
            shadowOffsetY: 5,
            color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
              {
                offset: 0,
                color: "rgb(129, 227, 238)",
              },
              {
                offset: 1,
                color: "rgb(25, 183, 207)",
              },
            ]),
          },
        },
        {
          name: "CO2 Emission per Capita - India",
          data: data[0],
          type: "scatter",
          symbolSize: function (data) {
            return Math.sqrt(data[2]) * 15;
          },
          emphasis: {
            focus: "series",
            label: {
              show: true,
              formatter: function (param) {
                return param.data[2];
              },
              position: "top",
            },
          },
          itemStyle: {
            shadowBlur: 10,
            shadowColor: "rgba(120, 36, 50, 0.5)",
            shadowOffsetY: 5,
            color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
              {
                offset: 0,
                color: "rgb(251, 118, 123)",
              },
              {
                offset: 1,
                color: "rgb(204, 46, 72)",
              },
            ]),
          },
        },
      ],
    };

    this.myChart.setOption(this.option);
  },
};

// use([
//   CanvasRenderer,
//   PieChart,
//   TitleComponent,
//   TooltipComponent,
//   LegendComponent,
// ]);
</script>
    
    <style scoped>
.chart {
  height: 450px;
}
</style>
    