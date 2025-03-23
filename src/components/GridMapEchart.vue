<template>
    <div ref="chart" 
    :style="{ height: `${heigth}px`, width: '100%' }"></div>
</template>

<script setup>
import * as echarts from 'echarts';
import { onMounted, ref } from 'vue';
import { loadMapData } from '@/utils/fetch_data';

const chart = ref(null);

const props = defineProps({
    csvUrl: { type: String, default: "https://raw.githubusercontent.com/chuanlongZhou/indian_100_data/refs/heads/main/data/summary_time_series/total.csv" },
    heigth: { type: Number, default: 400 },
    city_name: { type: String, default: "Whole India" },
    columnName: { type: String, default: "total_co2" },
    heigth: { type: Number, default: 400 }
});


// Choose the city and column
// const city = 'Mumbai'; // replace with actual city name
// const columnName = 'total_co2'; // replace with actual column name from CSV

const city = ref(props.city_name);
const columnName = ref(props.columnName);

onMounted(async () => {
    const mapChart = echarts.init(chart.value);
    
    // Load data
    const { geojson, data } = await loadMapData(city.value, columnName.value);

    // Register the GeoJSON as map
    echarts.registerMap(`${city}Grid`, geojson);

    // Set chart options
    const option = {
        // title: {
        //     text: `${city} Grid - ${columnName}`,
        //     left: 'center'
        // },
        tooltip: {
            trigger: 'item',
            formatter: params => isNaN(params.value) ? '' : params.value.toFixed(1)
        },
        visualMap: {
            min: 0,
            max: Math.max(...data.map(d => d.value)),
            left: 'left',
            bottom: '0%',
            text: ['High', 'Low'],
            inRange: {
                color: ['#e0f3f8',
                    '#abd9e9',
                    '#74add1',
                    '#4575b4',
                    '#2c4880', // darker
                    '#162343'  // darkest
                ]
            },
            calculable: true
        },
        series: [
            {
                name: `${city} Grid`,
                type: 'map',
                map: `${city}Grid`,
                roam: true, // disable zooming and panning
                itemStyle: {
                    borderColor: 'rgba(50, 50, 50, 0.1)',
                    borderWidth: 0.2
                },
                emphasis: {
                    label: {
                        show: false
                    }
                },
                data
            }
        ]
    };
    mapChart.setOption(option);
});
</script>