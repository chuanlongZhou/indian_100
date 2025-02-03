<script setup>
import { ref, onMounted } from "vue";
import { use } from "echarts/core";
import VChart from "vue-echarts";
import { BarChart, LineChart } from "echarts/charts";
import { GridComponent, TooltipComponent, LegendComponent, TitleComponent } from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";
import * as d3 from "d3";
import { VContainer, VRow, VCol, VCard, VCardTitle, VCardText } from "vuetify/components";

use([BarChart, LineChart, GridComponent, TooltipComponent, LegendComponent, TitleComponent, CanvasRenderer]);

const csvUrl =
  "https://raw.githubusercontent.com/chuanlongZhou/indian_100_data/refs/heads/main/data/city/city_share.csv";

// Define color theme
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

const chartOptions = ref({});

async function fetchData() {
  const response = await fetch(csvUrl);
  const text = await response.text();
  const data = d3.csvParse(text);

  // Limit to the first 50 rows
  const row_num = 50;
  const cities = data.slice(0, row_num).map((d) => d.city);

  // Convert to Mt and round to 2 decimal places
  const convertToMt = (value) => (parseFloat(value) / 1_000_000).toFixed(2);

  const power = data.slice(0, row_num).map((d) => parseFloat(convertToMt(d.power)));
  const traffic = data.slice(0, row_num).map((d) => parseFloat(convertToMt(d.traffic)));
  const residential_scope1 = data.slice(0, row_num).map((d) => parseFloat(convertToMt(d.residential_scope1)));
  const industrial = data.slice(0, row_num).map((d) => parseFloat(convertToMt(d.industrial)));
  const avation = data.slice(0, row_num).map((d) => parseFloat(convertToMt(d.avation)));

  // Per Capita Emissions Calculation (remains as original unit)
  const perCapita = data.slice(0, row_num).map((d) => (parseFloat(d.total) / parseFloat(d.population_2020) / 5).toFixed(2));

  chartOptions.value = {
    title: {
      text: "City-wise and Per Capita Emissions",
      left: "center",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: { type: "shadow" },
    },
    legend: {
      bottom: -2,
    },
    grid: {
      left: "8%",
      right: "8%",
      bottom: "30%",
      top: "15%",
    },
    xAxis: {
      type: "category",
      data: cities,
      name: "Cities",
      axisLabel: { rotate: 45 },
    },
    yAxis: [
      {
        type: "value",
        name: "CO₂ Emission (Mt/yr)", // ✅ Updated unit to Mt
      },
      {
        type: "value",
        name: "Per Capita Emission",
        position: "right",
        axisLabel: { formatter: "{value}" },
      },
    ],
    series: [
      {
        name: "Power",
        type: "bar",
        stack: "total",
        itemStyle: { color: columnColors.power },
        data: power,
      },
      {
        name: "Traffic",
        type: "bar",
        stack: "total",
        itemStyle: { color: columnColors.traffic },
        data: traffic,
      },
      {
        name: "Residential Scope 1",
        type: "bar",
        stack: "total",
        itemStyle: { color: columnColors.residential_scope1 },
        data: residential_scope1,
      },
      {
        name: "Industrial",
        type: "bar",
        stack: "total",
        itemStyle: { color: columnColors.industrial },
        data: industrial,
      },
      {
        name: "Aviation",
        type: "bar",
        stack: "total",
        itemStyle: { color: columnColors.avation },
        data: avation,
      },
      {
        name: "Per Capita Emission",
        type: "line",
        yAxisIndex: 1,
        itemStyle: { color: "black" },
        lineStyle: { color: "black" },
        symbol: "circle",
        symbolSize: 6,
        data: perCapita,
      },
    ],
  };
}


onMounted(fetchData);
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title class="text-h6 text-primary">City-wise Emissions</v-card-title>
          <v-card-text>
            <v-chart :option="chartOptions" style="height: 400px; width: 100%"></v-chart>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
