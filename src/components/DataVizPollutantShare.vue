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

const smallPieOptions = ref({});

async function fetchData() {
  const response = await fetch(jsonUrl);
  const data = await response.json();


  // Small Pie Data (Pollutant Breakdown)
  const smallPieData = [
    { name: "Traffic NOx", value: data.traffic_NOx, itemStyle: { color: columnColors.traffic_NOx } },
    { name: "Traffic PM2.5", value: data.traffic_pm25, itemStyle: { color: columnColors.traffic_pm25 } },
    { name: "Power PM2.5", value: data.power_pm25, itemStyle: { color: columnColors.power_pm25 } },
  ];


  // Small Pie Chart Configuration
  smallPieOptions.value = {
    title: { text: "Pollutant Co-emission", left: "center" },
    tooltip: { trigger: "item" },
    legend: { bottom: 0 },
    series: [
      {
        name: "Pollutants",
        type: "pie",
        radius: "50%",
        data: smallPieData,
      },
    ],
  };
}

onMounted(fetchData);
</script>

<template>
  <v-container>
    <v-card>
      <v-card-title class="text-h6 text-primary">Pollutant</v-card-title>
      <v-card-text>
        <v-chart :option="smallPieOptions" style="height: 300px; width: 100%"></v-chart>
      </v-card-text>
    </v-card>
  </v-container>
</template>
