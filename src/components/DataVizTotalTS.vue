<script setup>
import { ref, onMounted, watch } from "vue";
import { use } from "echarts/core";
import VChart from "vue-echarts";
import { LineChart } from "echarts/charts";
import { GridComponent, TooltipComponent, LegendComponent } from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";
import * as d3 from "d3";
import { VCombobox, VContainer, VRow, VCol, VCard, VCardTitle, VCardText } from "vuetify/components";

use([LineChart, GridComponent, TooltipComponent, LegendComponent, CanvasRenderer]);

const csvUrl =
    "https://raw.githubusercontent.com/chuanlongZhou/indian_100_data/refs/heads/main/data/summary_time_series/total.csv";

const chartData = ref([]);
const selectedColumns = ref(["total", "power", "traffic", "residential_scope1", "industrial", "avation"]);
const availableColumns = ref([]);
const chartOptions = ref({});

// Define custom colors for specific columns
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

// Default color fallback if column is not in the dictionary
const defaultColors = ["#e6194b", "#3cb44b", "#ffe119", "#4363d8", "#f58231", "#911eb4", "#42d4f4", "#f032e6", "#a9a9a9"];

async function fetchData() {
    const response = await fetch(csvUrl);
    const text = await response.text();
    const data = d3.csvParse(text);

    availableColumns.value = Object.keys(data[0]).filter((key) => key !== "date");

    // Remove unnecessary columns
    availableColumns.value = availableColumns.value.filter(
        (key) => !["traffic_NOx", "traffic_pm25", "power_pm25"].includes(key)
    );

    // Convert values from tonnes to megatonnes (Mt) and round to 2 decimals
    const convertToMt = (value) => (parseFloat(value) / 1_000_000).toFixed(2);

    chartData.value = data.map((row) => ({
        date: row.date,
        ...Object.fromEntries(
            availableColumns.value.map((key) => [key, parseFloat(convertToMt(row[key]))])
        ),
    }));

    updateChart();
}

function updateChart() {
    const series = selectedColumns.value.map((col, index) => ({
        name: col,
        type: "line",
        symbol: "circle",
        symbolSize: 6,
        itemStyle: { color: columnColors[col] || defaultColors[index % defaultColors.length] },
        lineStyle: { color: columnColors[col] || defaultColors[index % defaultColors.length] },
        data: chartData.value.map((d) => [d.date, d[col]]),
    }));

    chartOptions.value = {
        tooltip: { trigger: "axis" },
        legend: { data: selectedColumns.value },
        xAxis: {
            type: "category",
            data: chartData.value.map((d) => d.date),
            name: "Date",
        },
        yAxis: {
            type: "value",
            name: "CO₂ Emission (Mt)",
        },
        series,
    };
}

watch(selectedColumns, updateChart);

onMounted(fetchData);
</script>

<template>
    <v-container>
        <v-col cols="12">
            <v-card>
                <v-card-title class="text-h4 font-weight-light text-primary">
                    100 Cities Daily CO₂ Emission

                    <v-combobox v-model="selectedColumns" :items="availableColumns" label="Select categories"
                        style="justify-content: center; align-items: center; width: 50%; " multiple></v-combobox>
                </v-card-title>
                <v-chart :option="chartOptions" style="height: 400px; width: 100%"></v-chart>
                <!-- <v-card-text
                    style="display: flex; justify-content: center; align-items: center; width: 40%; margin-left: 5%;">
                </v-card-text> -->
            </v-card>
        </v-col>
    </v-container>
</template>
