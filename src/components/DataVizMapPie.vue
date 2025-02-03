<script setup>
import { ref, onMounted } from "vue";
import { use } from "echarts/core";
import VChart from "vue-echarts"; // 🔹 Import Vue-ECharts wrapper
import { PieChart } from "echarts/charts";
import * as echarts from "echarts";

import { TooltipComponent, LegendComponent, TitleComponent, GeoComponent } from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";
import * as d3 from "d3";
import IndianState from "@/assets/map/Indian_States.json"; // Replace with actual path

use([PieChart, TooltipComponent, LegendComponent, TitleComponent, GeoComponent, CanvasRenderer]);

// Register VChart
const components = { VChart };

const cityDataUrl =
    "https://raw.githubusercontent.com/chuanlongZhou/indian_100_data/refs/heads/main/data/city/city_share.csv";

const cityGeoUrl =
    "https://raw.githubusercontent.com/chuanlongZhou/indian_100_data/refs/heads/main/data/city/city_index.geojson";

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
    const cityResponse = await fetch(cityDataUrl);
    const cityText = await cityResponse.text();
    const cityData = d3.csvParse(cityText);

    const geoResponse = await fetch(cityGeoUrl);
    const geoJson = await geoResponse.json();

    // Extract city locations
    const cityCoords = geoJson.features.reduce((acc, feature) => {
        acc[feature.properties.city_name] = feature.geometry.coordinates;
        return acc;
    }, {});

    // Function to convert tonnes to megatonnes (Mt) and round to 2 decimals
    const convertToMt = (value) => (parseFloat(value) / 1_000_000).toFixed(2);

    // Prepare pie chart data for each city
    const pieSeries = cityData
        .map((city) => {
            const cityName = city.city;
            const coords = cityCoords[cityName];
            if (!coords) return null; // Skip if no coordinates

            const pieData = [
                { name: "Power", value: parseFloat(convertToMt(city.power)), itemStyle: { color: columnColors.power } },
                { name: "Traffic", value: parseFloat(convertToMt(city.traffic)), itemStyle: { color: columnColors.traffic } },
                { name: "Residential Scope 1", value: parseFloat(convertToMt(city.residential_scope1)), itemStyle: { color: columnColors.residential_scope1 } },
                { name: "Industrial", value: parseFloat(convertToMt(city.industrial)), itemStyle: { color: columnColors.industrial } },
                { name: "Aviation", value: parseFloat(convertToMt(city.avation)), itemStyle: { color: columnColors.avation } },
            ];

            return {
                type: "pie",
                name: cityName,
                coordinateSystem: "geo",
                geoIndex: 0,
                center: coords,
                radius: Math.sqrt(parseFloat(convertToMt(city.total))) * 1.5, // Adjusted scaling
                data: pieData,
                itemStyle: {
                    opacity: 0.8,
                    shadowBlur: 5,
                    shadowColor: "#333",
                },
                label: { show: false },
            };
        })
        .filter(Boolean);

    // Configure ECharts options
    chartOptions.value = {
        tooltip: {
            trigger: "item",
            formatter: (params) => {
                const { seriesName, name, value } = params;
                return `<b>${seriesName}</b><br>${name}: ${value} Mt/yr`;
            },
        },
        geo: {
            map: "india",
            roam: false,
            zoom: 1.2,
            backgroundColor: "#2a3645",
            itemStyle: { borderColor: "#111", areaColor: "#d9d9d9" },
            emphasis: { itemStyle: { areaColor: "#697d96" } },
        },
        series: pieSeries.map(series => ({
            ...series,
            // label: {
            //   show: true,  // ✅ Enable labels on the pie charts
            //   formatter: (params) => `${params.name}\n${params.value} Mt/yr`,  // ✅ Display value with Mt/yr
            //   position: "outside",
            //   fontSize: 10,
            //   color: "#000",
            // },
            tooltip: {
                trigger: "item",
                formatter: (params) => `<b>${params.seriesName}</b><br>${params.name}: ${params.value} Mt/yr`,
            },
        })),
    };


    // Register the Indian States GeoJSON as a custom map
    echarts.registerMap("india", IndianState);
}

onMounted(fetchData);
</script>

<template>
    <v-container>

        <v-card-title class="text-h6 text-primary">City-wise Emission Shares</v-card-title>
        <div class="chart-container">
            <v-chart 
            :option="chartOptions" 
            style="height: 750px; width: 100%"
            :autoresize="true"></v-chart>
        </div>
        <!-- <v-container>
            <v-row>
                <v-col cols="12">
                    <v-card>
                        <v-card-text>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container> -->
    </v-container>
</template>
