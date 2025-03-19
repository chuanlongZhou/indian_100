<script setup>
import { ref, onMounted, watch, computed } from "vue";
import { use } from "echarts/core";
import VChart from "vue-echarts";
import { LineChart, BarChart } from "echarts/charts";
import { GridComponent, TooltipComponent, LegendComponent, DataZoomComponent } from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";
import * as d3 from "d3";
import { VCombobox, VContainer, VRow, VCol, VCard, VCardTitle, VCardText, VBtn, VSelect, VTextField } from "vuetify/components";
import { it } from "vuetify/locale";


// echarts.use([CustomChart]);

use([LineChart, GridComponent, TooltipComponent, LegendComponent, DataZoomComponent, CanvasRenderer, BarChart]);

const props = defineProps({
    csvUrl: { type: String, default: "https://raw.githubusercontent.com/chuanlongZhou/indian_100_data/refs/heads/main/data/summary_time_series/total.csv" },
    mode: { type: String, default: "trend" }, // trend, variation, evolution
    enableSelection: { type: Boolean, default: true },
    showEnableSelection: { type: Boolean, default: false },
    selectedColumns: { type: Array, default: () => ["total", "power", "traffic", "residential_scope1", "industrial", "avation"] },
    unit: { type: String, default: "Mt" },
    comparisonYears: { type: Array, default: () => [] },
    // TODO: the aggregation mode is not developed yet
    aggregationMode: { type: String, default: "daily" }, // daily, 10-day, 15-day 
    heigth: { type: Number, default: 400 },
    max_width : { type: Number, default: 800 }
});

const csvUrl = ref(props.csvUrl);
const chartData = ref([]);
const selectedColumns = ref(props.selectedColumns);
const selectedIndex = ref([]);
const availableColumns = ref(["total", "power", "traffic", "residential_scope1", "residential_scope2", "industrial", "avation", "power_pm25"]);

const chartOptions = ref({});
const mode = ref(props.mode);
const enableSelection = ref(props.enableSelection);
const showEnableSelection = ref(props.showEnableSelection);
const unit = ref(props.unit);
const comparisonYears = ref(props.comparisonYears);
const yearAvailable = ref([]);
const aggregationMode = ref(props.aggregationMode);
const showOption = ref(true);

const max_width = ref(props.max_width);

const modeIcons = {
    "trend": "mdi-trending-up",
    "evolution": "mdi-chart-multiple",
    "variation": "mdi-chart-waterfall",
}
const sector_mapping = {
    "total": {
        "Text": "Total",
        "Icon": "mdi-chart-bar",
        "Color": "#3252F2",
    },
    "power": {
        "Text": "Power",
        "Icon": "mdi-flash",
        "Color": "#E6BA3D",
    },
    "traffic": {
        "Text": "Traffic",
        "Icon": "mdi-car",
        "Color": "#89B32B",
    },
    "residential_scope1": {
        "Text": "Residential Scope 1",
        "Icon": "mdi-home",
        "Color": "#CD93BF",
    },
    "residential_scope2": {
        "Text": "Residential Scope 2",
        "Icon": "mdi-home",
        "Color": "#9C4788",
    },
    "industrial": {
        "Text": "Industrial",
        "Icon": "mdi-factory",
        "Color": "#F2731D",
    },
    "avation": {
        "Text": "Avation",
        "Icon": "mdi-airplane",
        "Color": "#1D8553",
    },
    "traffic_NOx": {
        "Text": "Traffic NOx",
        "Icon": "mdi-car",
        "Color": "#e6194b",
    },
    "traffic_pm25": {
        "Text": "Traffic PM2.5",
        "Icon": "mdi-car",
        "Color": "#a9a9a9",
    },
    "power_pm25": {
        "Text": "Power PM2.5",
        "Icon": "mdi-flash",
        "Color": "#38372C",
    },
}

// function toggleCategory(category) {
//     const index = selectedColumns.value.indexOf(category);
//     if (index === -1) {
//         selectedColumns.value.push(category);
//     } else {
//         selectedColumns.value.splice(index, 1);
//     }
// }

async function fetchData() {
    const response = await fetch(csvUrl.value);
    const text = await response.text();
    const data = d3.csvParse(text);
    // TODO: availableColumns is hard coded for now
    // availableColumns.value = Object.keys(data[0]).filter((key) => key !== "date");

    yearAvailable.value = [...new Set(data.map(d => d.date.substring(0, 4)))];
    // convert to integer
    yearAvailable.value = yearAvailable.value.map(y => parseInt(y));

    // Convert values from tonnes to megatonnes (Mt) and round to 2 decimals
    const convertToUnit = (value) => {
        if (unit.value === "Mt") return (parseFloat(value) / 1_000_000).toFixed(2);
        if (unit.value === "t") return (parseFloat(value) * 1_000).toFixed(2);
        return parseFloat(value).toFixed(2);
    };
    let rawData = data.map((row) => ({
        date: row.date,
        year: row.date.substring(0, 4),
        ...Object.fromEntries(
            availableColumns.value.map((key) => [key, parseFloat(convertToUnit(row[key]))])
        ),
    }));

    chartData.value = rawData;
    updateChart();
}

function aggregateToXDays(data, X) {
    let aggregatedData = [];
    let sumObj = {}; // Object to accumulate sums

    data.forEach((d, index) => {
        // Iterate over keys, excluding 'date', 'dayOfYear', and 'year'
        Object.keys(d).forEach(key => {
            if (!["date", "dayOfYear", "year"].includes(key)) {
                sumObj[key] = (sumObj[key] || 0) + (isNaN(d[key]) ? 0 : d[key]);
            }
        });

        // Keep only the Xth, 2Xth, ... timestamps
        if ((index + 1) % X === 0 || index === data.length - 1) {
            aggregatedData.push({
                date: d.date,  // Keep the Xth timestamp
                dayOfYear: d.dayOfYear,
                year: d.year,
                ...sumObj      // Spread accumulated sums
            });
            sumObj = {}; // Reset sum accumulator
        }
    });

    return aggregatedData;
}

function updateChart() {
    if (!chartData.value.length || !selectedColumns.value.length) return;

    if (selectedIndex.value.length === 0) {
        selectedIndex.value = selectedColumns.value.map((col) => availableColumns.value.indexOf(col));
    }
    else {
        selectedColumns.value = availableColumns.value.filter((col) => selectedIndex.value.includes(availableColumns.value.indexOf(col)));
    }

    let series = [];
    const y_unit = unit.value;
    let processedData = chartData.value.map(d => ({ ...d }))

    // Filter out only the selected comparison years for variation and evolution modes
    if (mode.value !== "trend") {
        // if comparisonYears is empty, use all years
        if (comparisonYears.value.length === 0) {
            comparisonYears.value = [...new Set(processedData.map(d => parseInt(d.year)))];
        }
        processedData = processedData.filter(d => comparisonYears.value.includes(parseInt(d.year)));
        processedData.forEach(d => d.dayOfYear = d3.timeFormat("%m-%d")(new Date(d.date))); // Extract month-day format only when needed
        // remvoe feb 29th for leap year
        processedData = processedData.filter(d => d.dayOfYear !== "02-29");
    }
    else {
        // still need update the dayOfYear for trend mode with year month day
        processedData.forEach(d => d.dayOfYear = d3.timeFormat("%Y-%m-%d")(new Date(d.date))); // Extract month-day format only when needed
    }

    // TODO: aggregation is not developed yet
    // console.log("processedData", processedData);
    // processedData = aggregateToXDays(processedData, 10);

    // console.log(selectedColumns.value);
    let legendData
    if (mode.value === "trend") {
        series = selectedColumns.value.map(col => ({
            name: col,
            type: "line",
            data: processedData.map(d => [d.date, d[col]]),
            emphasis: {
                focus: "series"
            },
            itemStyle: { color: sector_mapping[col].Color || "#000" }
        }));
        legendData = selectedColumns.value;
    } else if (mode.value === "evolution") {
        // we select last three years for comparison if more than 3 years are selected
        if (comparisonYears.value.length > 3) {
            comparisonYears.value = comparisonYears.value.slice(-3);
        }
        const sortedYears = [...comparisonYears.value].sort((a, b) => a - b);
        series = sortedYears.map((year, idx) => ({
            name: year,
            type: "line",
            data: processedData.filter(d => d.year === String(year)).map(d => [d.dayOfYear, d[selectedColumns.value[0]]]),
            lineStyle: {
                width: idx === sortedYears.length - 1 ? 5 : idx === sortedYears.length - 2 ? 3 : 1,
                opacity: idx === sortedYears.length - 1 ? 1 : 0.8,
            },
            // make the last year more visible
            symbolSize: idx === sortedYears.length - 1 ? 6 : 3,
            itemStyle: { color: (sector_mapping[selectedColumns.value[0]].Color || "#000") + (idx === sortedYears.length - 1 ? "80" : "59") }
        }));
        // convert year to string
        legendData = sortedYears.map(y => y.toString());
    } else if (mode.value === "variation") {
        // we select last three years for comparison if more than 3 years are selected
        if (comparisonYears.value.length > 2) {
            comparisonYears.value = comparisonYears.value.slice(-2);
        }
        const [olderYear, recentYear] = comparisonYears.value.sort((a, b) => a - b);
        const column = selectedColumns.value[0];

        const olderData = processedData.filter(d => d.year === String(olderYear));
        const recentData = processedData.filter(d => d.year === String(recentYear));

        const baseValues = recentData.map((d, i) =>
            Math.min(d[column], olderData[i][column])
        );
        const olderValues = olderData.map(d => d[column]);
        const recentValues = recentData.map(d => d[column]);
        const diffValues = olderData.map((d, i) => {
            const recentValue = recentData[i] ? recentData[i][column] : d[column];
            return recentValue - d[column];
        });

        series = [
            {
                name: recentYear,
                type: 'line',
                step: 'middle',
                data: recentValues,
                symbol: 'none',

                itemStyle: {
                    width: 0.25,
                    color: (sector_mapping[selectedColumns.value[0]].Color || "#000")
                }
            },
            {
                name: olderYear,
                type: 'line',
                step: 'middle',
                data: olderValues,
                symbol: 'none',
                itemStyle: {
                    width: 0.1,
                    color: (sector_mapping[selectedColumns.value[0]].Color || "#000") + ("80")
                }
            },

            {
                name: "Base",
                type: "bar",
                stack: "Total",
                silent: true,
                itemStyle: {
                    borderColor: "transparent",
                    color: "transparent"
                },
                emphasis: {
                    itemStyle: {
                        borderColor: "transparent",
                        color: "transparent"
                    }
                },
                data: baseValues
            },
            {
                name: "Increase",
                type: "bar",
                stack: "Total",
                label: { show: false, position: "top" },
                data: diffValues.map(value => value >= 0 ? value.toFixed(2) : "-"),
                itemStyle: { color: "rgba(230, 25, 75, 0.4)" },
                barWidth: "100%",
            },
            {
                name: "Decrease",
                type: "bar",
                stack: "Total",
                label: { show: false, position: "bottom" },
                data: diffValues.map(value => value < 0 ? -value.toFixed(2) : "-"),
                itemStyle: { color: "rgba(0, 0, 200, 0.4)" },
                barWidth: "100%",
            }
        ]
        legendData = [recentYear.toString(), olderYear.toString(), "Placeholder", "Increase", "Decrease"];
        // console.log(series);
        // console.log(recentData);
        // console.log(olderData);
    }
    chartOptions.value = {
        tooltip: { trigger: "axis" },
        legend: {
            data: legendData,
            // selected: {
            //     ["Placeholder"]: false // Hides this specific series from the legend
            // }
        },
        xAxis: { type: "category", data: [...new Set(processedData.map(d => d.dayOfYear))] },
        yAxis: { type: "value", name: `CO₂ Emission (${y_unit})` },
        series,
        dataZoom: [{ type: "inside" }, { type: "slider" }]
    };
}

watch([selectedIndex, mode, comparisonYears], updateChart);
onMounted(fetchData);
</script>

<template>
    <v-container>
        <!-- Enable Selection Toggle -->
        <v-row>
            <v-col cols="6">
                <v-checkbox v-if="showEnableSelection" v-model="enableSelection" label="Enable Category Selection">
                </v-checkbox>
            </v-col>
        </v-row>

        <v-row>
            <div :style="{ maxWidth: max_width + 'px', margin: '0 auto' }">
                <v-chart :option="chartOptions" style="height: 400px; width: 100%"></v-chart>
            </div>
        </v-row>

        <!-- <v-row>
            <v-btn v-model="showOption" @click="showOption = !showOption">
                <v-icon>mdi-cog</v-icon>
                Options
            </v-btn>
        </v-row> -->
        <v-row justify="center" class="mt-10" v-if="showOption">
            <!-- Category Selection -->
            <v-chip-group v-model="selectedIndex" multiple v-if="enableSelection" filter>
                <v-chip v-for="category in availableColumns" size="x-small"
                    :variant="selectedIndex.includes(availableColumns.indexOf(category)) ? 'prmary' : 'outlined'"
                    :key="category" :prepend-icon="sector_mapping[category].Icon"
                    :color="sector_mapping[category].Color">
                    {{ sector_mapping[category].Text }}
                </v-chip>
            </v-chip-group>
        </v-row>

        <v-row justify="center" v-if="showOption">
            <v-col cols="6" align="center">
                <!-- Mode Selection (Button Toggle) -->
                <v-btn-toggle v-model="mode" divided density="compact">
                    <v-btn v-for="option in ['trend', 'evolution', 'variation']" :key="option"
                        :prepend-icon="modeIcons[option]" @click="mode = option"
                        :variant="mode === option ? 'tonal' : 'outlined'" size="x-small">
                        <template v-slot:prepend>
                            <v-icon :color="mode === option ? '#0f3e8a' : 'grey'"></v-icon>
                        </template>
                        <!-- Change text color and font weight -->
                        <span :style="{
                            color: mode === option ? '#0f3e8a' : 'grey',
                            fontWeight: mode === option ? 'bold' : 'normal'
                        }">
                            {{ option.charAt(0).toUpperCase() + option.slice(1) }}
                        </span>
                    </v-btn>
                </v-btn-toggle>
            </v-col>

            <v-col cols="6" align="center">
                <!-- Year Selection -->
                <v-select v-model="comparisonYears" :items="yearAvailable" label="Year for Comparison" multiple
                    variant="underlined" density="compact" chips color="#0f3e8a">
                </v-select>
            </v-col>
        </v-row>

    </v-container>
</template>
