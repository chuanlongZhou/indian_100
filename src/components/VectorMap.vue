<template>
  <v-hover v-slot="{ isHovering, props }">
    <v-card
      v-bind="props"
      :elevation="isHovering ? 5 : 0"
      class="mb-10 py-10 chart-container"
    >
      <div class="chart" id="main_mapchart"></div>
    </v-card>
  </v-hover>
</template>

<script>
import * as echarts from "echarts";
import "echarts-gl";
import IndianState from "@/assets/map/Indian_States.json"; // Replace with the actual path
import { ref, onMounted } from "vue";

export default {
  setup() {
    const option = ref({});
    const myChart = ref(null);
    const indianCity = ref(null);

    onMounted(async () => {
      try {
        // Fetch city data from GitHub
        const response = await fetch(
          "https://raw.githubusercontent.com/chuanlongZhou/indian_100_data/refs/heads/main/data/city/city_index.geojson"
        );
        if (!response.ok) throw new Error("Failed to load GeoJSON");

        indianCity.value = await response.json();

        // Register India state map
        echarts.registerMap("india", IndianState);

        // Initialize the chart
        myChart.value = echarts.init(document.getElementById("main_mapchart"));

        // Configure chart with dynamic data
        option.value = {
          backgroundColor: "#2a3645",
          geo: {
            map: "india",
            roam: false,
            label: {
              emphasis: { show: true },
            },
            silent: false,
            itemStyle: {
              normal: { areaColor: "#d9d9d9", borderColor: "#111" },
              emphasis: { areaColor: "#697d96" },
            },
          },
          series: [
            {
              name: "City Data",
              type: "scatter",
              coordinateSystem: "geo",
              data: indianCity.value.features.map((city) => ({
                name: city.properties.city_name,
                value: [
                  city.geometry.coordinates[0], // Longitude
                  city.geometry.coordinates[1], // Latitude
                  // if population is exisitng in the data then use it otherwise use 100
                  city.properties.population_2020/50000 ? city.properties.population_2020/50000 : 50, // Scaled value
                ],
              })),
              symbolSize: (val) => Math.max(val[2] / 10, 3), // Ensure min size 3
              label: { formatter: "{b}", position: "right", show: false },
              itemStyle: { color: "#e89968" },
              emphasis: { label: { show: true } },
            },
            {
              name: "Top 5",
              type: "effectScatter",
              coordinateSystem: "geo",
              data: indianCity.value.features
                .map((city) => ({
                  name: city.properties.city_name,
                  value: [
                    city.geometry.coordinates[0], // Longitude
                    city.geometry.coordinates[1], // Latitude
                    city.properties.population_2020 / 50000, // Scaled value
                  ],
                }))
                .sort((a, b) => b.value[2] - a.value[2]) // Sort by population
                .slice(0, 5), // Top 5 cities
              symbolSize: (val) => val[2] / 10,
              encode: { value: 2 },
              showEffectOn: "render",
              rippleEffect: { brushType: "stroke" },
              label: { formatter: "{b}", position: "right", show: true },
              itemStyle: {
                color: "#de5637",
                shadowBlur: 10,
                shadowColor: "#333",
              },
              emphasis: { scale: true },
              zlevel: 1,
            },
          ],
        };

        // Apply the chart configuration
        myChart.value.setOption(option.value);
      } catch (error) {
        console.error("Error loading city data:", error);
      }
    });

    return { option, myChart, indianCity };
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
