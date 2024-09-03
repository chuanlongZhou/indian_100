<template>
  <v-hover v-slot="{ isHovering, props }">
    <v-card
      v-bind="props"
      :elevation="isHovering ? 5 : 0"
      class="mb-10 py-10 chart-container"
    >
      <!-- <v-chart class="chart" :option="option" autoresize /> -->
      <div class="chart" ref="chartContainer"></div>
    </v-card>
  </v-hover>
</template>
      
<script setup>
import "mapbox-gl";
import "mapbox-echarts";
import * as echarts from "echarts";

import "echarts-gl";
import worldMapData from "@/assets/map/world.json"; // Replace with the actual path
// import gps from '@/assets/map/gps_0.bin'; // Replace with the actual path

// import VChart, { THEME_KEY } from "vue-echarts";
import { ref, provide } from "vue";

var style = ref({
  version: 8,
  sprite: "http://localhost:8080/static/sprite/sprite",
  glyphs: "mapbox://font/{fontstack}/{range}.pbf",
  sources: {
    "osm-tiles": {
      type: "raster",
      tiles: [
        "http://t{s}.tianditu.gov.cn/DataServer?T=img_w&x={x}&y={y}&l={z}",
      ],
      tileSize: 256,
    },
  },
  layers: [
    {
      id: "tdt-tiles",
      type: "raster",
      source: "osm-tiles",
      minzoom: 0,
      maxzoom: 20,
    },
  ],
});

const chartContainer = ref(null);
let chartInstance = null;

onMounted(() => {
  if (chartContainer.value) {
    chartInstance = echarts.init(chartContainer.value);
    var options = {
      // map option
      tmap: {
        center: [120.13066322374, 30.240018034923],
        zoom: 2,
        roam: true,
        style: style,
        transformRequest: (url, resourceType) => {
          if (resourceType === "Tile" && url.indexOf("DataServer") > -1) {
            var random = parseInt(Math.random() * 7);
            return {
              url: url.replace("{s}", random),
            };
          }
        },
      },
      series: [
        {
          coordinateSystem: "tmap",
        },
      ],
    };
    chartInstance.setOption(options);
  }
});

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
      