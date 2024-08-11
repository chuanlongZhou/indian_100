<template>
  <v-hover v-slot="{ isHovering, props }">
    <v-card v-bind="props" :elevation="isHovering ? 5 : 0" class="mb-10 pt-10">
      <!-- <v-chart class="chart" :option="option" autoresize /> -->
      <div class="chart" style="height: 450px" id="main_linechart"></div>
    </v-card>
  </v-hover>
</template>
  
  <script>
import * as echarts from "echarts";
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
    this.myChart = echarts.init(document.getElementById('main_linechart'));
    const data = [
      [
        [1990, 870452165, 0.647451316],
        [1991, 888941756, 0.683086373],
        [1992, 907574049, 0.69007405],
        [1993, 926351297, 0.703136167],
        [1994, 945261958, 0.725622135],
        [1995, 964279129, 0.76518964],
        [1996, 983281218, 0.787231756],
        [1997, 1002335230, 0.817360076],
        [1998, 1021434576, 0.818720963],
        [1999, 1040500054, 0.866242339],
        [2000, 1059633675, 0.885077949],
        [2001, 1078970907, 0.883746998],
        [2002, 1098313039, 0.897242649],
        [2003, 1117415123, 0.905456602],
        [2004, 1136264583, 0.955470157],
        [2005, 1154638713, 0.984261473],
        [2006, 1172373788, 1.036533922],
        [2007, 1189691809, 1.123599482],
        [2008, 1206734806, 1.180361247],
        [2009, 1223640160, 1.278873603],
        [2010, 1240613620, 1.338033835],
        [2011, 1257621191, 1.396878498],
        [2012, 1274487215, 1.498204123],
        [2013, 1291132063, 1.5276744],
        [2014, 1307246509, 1.642465277],
        [2015, 1322866505, 1.631323487],
        [2016, 1338636340, 1.639914019],
        [2017, 1354195680, 1.704926721],
        [2018, 1369003306, 1.795595299],
        [2019, 1383112050, 1.752534366],
        [2020, 1396387127, 1.576093232],
      ],
      [
        [1990, 1135185000, 1.914546263],
        [1991, 1150780000, 2.000543284],
        [1992, 1164970000, 2.075740405],
        [1993, 1178440000, 2.244842079],
        [1994, 1191835000, 2.322189229],
        [1995, 1204855000, 2.563478759],
        [1996, 1217550000, 2.521871874],
        [1997, 1230075000, 2.547903664],
        [1998, 1241935000, 2.605835732],
        [1999, 1252735000, 2.517420763],
        [2000, 1262645000, 2.650409102],
        [2001, 1271850000, 2.774762197],
        [2002, 1280400000, 2.964821228],
        [2003, 1288400000, 3.434036479],
        [2004, 1296075000, 3.945154871],
        [2005, 1303720000, 4.467696361],
        [2006, 1311020000, 4.910276197],
        [2007, 1317885000, 5.306368006],
        [2008, 1324655000, 5.435079096],
        [2009, 1331260000, 5.798319938],
        [2010, 1337705000, 6.335419767],
        [2011, 1345035000, 6.901347326],
        [2012, 1354190000, 7.04520023],
        [2013, 1363240000, 7.320154925],
        [2014, 1371860000, 7.304712872],
        [2015, 1379860000, 7.145131535],
        [2016, 1387790000, 7.105479936],
        [2017, 1396215000, 7.226160154],
        [2018, 1402760000, 7.533193134],
        [2019, 1407745000, 7.645435786],
        [2020, 1411100000, 7.756137907],
      ],
    ];
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

    this.myChart.setOption(this.option)
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
  