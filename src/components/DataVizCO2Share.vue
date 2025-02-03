<script setup>
import { ref, onMounted } from "vue";
import { use } from "echarts/core";
import VChart from "vue-echarts";
import { PieChart } from "echarts/charts";
import { TooltipComponent, LegendComponent, TitleComponent } from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";
import { VContainer, VRow, VCol, VCard, VCardTitle, VCardText } from "vuetify/components";

use([PieChart, TooltipComponent, LegendComponent, TitleComponent, CanvasRenderer]);

const jsonUrl =
  "https://raw.githubusercontent.com/chuanlongZhou/indian_100_data/refs/heads/main/data/city/total_share.json";

// Define the color theme
const columnColors = {
  total: "#e6194b",
  power: "#3cb44b",
  traffic: "#ffe119",
  residential_scope1: "#4363d8",
  residential_scope2: "#f58231",
  industrial: "#911eb4",
  avation: "#42d4f4",
  traffic_NOx: "#f032e6",
  traffic_pm25: "#a9a9a9",
  power_pm25: "#f58231",
};

const bigPieOptions = ref({});
async function fetchData() {
  const response = await fetch(jsonUrl);
  const data = await response.json();

  // Function to convert tonnes to megatonnes (Mt) and round to 2 decimals
  const convertToMt = (value) => (parseFloat(value) / 1_000_000).toFixed(2);

  // Extract power-related values
  const totalPower = parseFloat(convertToMt(data.power));
  const residentialScope2 = parseFloat(convertToMt(data.residential_scope2));
  const remainingPower = (totalPower - residentialScope2).toFixed(2);

  // Main Pie Data (Major Sources)
  const bigPieData = [
    { name: "Power", value: totalPower, itemStyle: { color: columnColors.power } },
    { name: "Traffic", value: parseFloat(convertToMt(data.traffic)), itemStyle: { color: columnColors.traffic } },
    { name: "Residential Scope 1", value: parseFloat(convertToMt(data.residential_scope1)), itemStyle: { color: columnColors.residential_scope1 } },
    { name: "Industrial", value: parseFloat(convertToMt(data.industrial)), itemStyle: { color: columnColors.industrial } },
    { name: "Aviation", value: parseFloat(convertToMt(data.avation)), itemStyle: { color: columnColors.avation } },
  ];

  // Callout Pie (Power Breakdown)
  const powerBreakdownData = [
    { name: "Residential Scope 2", value: residentialScope2, itemStyle: { color: columnColors.residential_scope2 } },
    { name: "Remaining Power", value: parseFloat(remainingPower), itemStyle: { color: "#6c757d" } }, // Gray color for remaining
  ];

  // Combined Pie Chart Configuration
  bigPieOptions.value = {
    title: { text: "CO₂ Emission (Mt/yr)", left: "center" },
    tooltip: {
      trigger: "item",
      formatter: (params) => `<b>${params.name}</b>: ${params.value} Mt/yr (${params.percent}%)`,
    },
    legend: { bottom: 0 },
    series: [
      {
        name: "Emissions",
        type: "pie",
        radius: "60%",
        center: ["40%", "50%"], // Positioned as a callout

        data: bigPieData,
        label: { show: true },
      },
      {
        name: "Power Breakdown", // Callout pie
        type: "pie",
        radius: ["20%", "35%"], // Smaller size
        center: ["75%", "40%"], // Positioned as a callout
        data: powerBreakdownData,
        label: {
          show: true,
          // formatter: (params) => `${params.name}\n${params.value} Mt/yr`,
        },
        tooltip: {
          trigger: "item",
          formatter: (params) => `<b>${params.name}</b>: ${params.value} Mt/yr (${params.percent}%)`,
        },
      },
    ],
  };
}


onMounted(fetchData);
</script>

<template>
  <v-container>
    <v-card>
      <v-card-title class="text-h4 font-weight-light text-primary">CO₂</v-card-title>
      <v-card-text>
        <v-chart :option="bigPieOptions" style="height: 400px; width: 100%"></v-chart>
      </v-card-text>
    </v-card>

  </v-container>
</template>
