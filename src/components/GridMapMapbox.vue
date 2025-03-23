<template>
    <div ref="mapContainer" style="width: 100%; height: 400px;"></div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import mapboxgl from 'mapbox-gl';
import { loadMapData } from '@/utils/fetch_data';


const props = defineProps({
    csvUrl: { type: String, default: "https://raw.githubusercontent.com/chuanlongZhou/indian_100_data/refs/heads/main/data/summary_time_series/total.csv" },
    heigth: { type: Number, default: 400 },
    city_name: { type: String, default: "Whole India" },
    columnName: { type: String, default: "total_co2" }
});

const mapContainer = ref(null);
// const city = props.city_name;
// const columnName = props.columnName;

const city = 'Mumbai';
const columnName = 'total_co2';
// Set your Mapbox access token
mapboxgl.accessToken = 'pk.eyJ1IjoiZGVmdmUxOTg4IiwiYSI6ImNtNm9lcnlscjB6OTYya3M3OWZ0ZnpqbnoifQ.POIJTiHCraKkHLUGMaWnyg';

onMounted(async () => {
    console.log('Loading map data for', city, columnName);
    const { geojson, data } = await loadMapData(city, columnName);

    // Merge your data values into the GeoJSON
    const valueMap = Object.fromEntries(data.map(d => [d.name, d.value]));
    geojson.features.forEach(feature => {
        const name = feature.properties.name;
        feature.properties.value = valueMap[name] ?? null;
    });

    // Compute color stops
    const values = data.map(d => d.value);
    const maxVal = Math.max(...values);
    const minVal = Math.min(...values);
    const getColor = val => {
        if (val === null || isNaN(val)) return 'rgba(0,0,0,0)';
        const scale = (val - minVal) / (maxVal - minVal);
        const colors = [
            '#e0f3f8',
            '#abd9e9',
            '#74add1',
            '#4575b4',
            '#2c4880',
            '#162343'
        ];
        const idx = Math.min(colors.length - 1, Math.floor(scale * colors.length));
        return colors[idx];
    };

    const map = new mapboxgl.Map({
        container: mapContainer.value,
        style: 'mapbox://styles/mapbox/dark-v10',
        center: [72.8777, 19.0760], // Mumbai center
        zoom: 9
    });

    map.on('load', () => {
        map.addSource('grid', {
            type: 'geojson',
            data: geojson
        });

        map.addLayer({
            id: 'grid-layer',
            type: 'fill',
            source: 'grid',
            paint: {
                'fill-color': [
                    'case',
                    ['has', 'value'],
                    ['to-color', ['get', 'color']],
                    'rgba(0,0,0,0)'
                ],
                'fill-opacity': 0.7,
                'fill-outline-color': 'rgba(11, 51, 117, 0.1)',
            }
        });

        // Add tooltip on hover
        const popup = new mapboxgl.Popup({
            closeButton: false,
            closeOnClick: false
        });

        map.on('mousemove', 'grid-layer', e => {
            const val = e.features[0].properties.value;
            const coords = e.lngLat;
            popup.setLngLat(coords)
                .setHTML(`<strong>${val?.toFixed(1) ?? ''}</strong>`)
                .addTo(map);
        });

        map.on('mouseleave', 'grid-layer', () => {
            popup.remove();
        });

        // Add color values directly to GeoJSON for rendering
        map.setPaintProperty('grid-layer', 'fill-color', [
            'case',
            ['has', 'value'],
            [
                'step',
                ['get', 'value'],
                '#e0f3f8', // min
                minVal + (maxVal - minVal) * 0.2, '#abd9e9',
                minVal + (maxVal - minVal) * 0.4, '#74add1',
                minVal + (maxVal - minVal) * 0.6, '#4575b4',
                minVal + (maxVal - minVal) * 0.8, '#2c4880',
                maxVal, '#162343'
            ],
            'rgba(0,0,0,0)' // fallback
        ]);

    });
});
</script>

<style scoped>
.mapboxgl-popup {
    font-size: 14px;
    font-weight: 500;
    padding: 10px;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    white-space: nowrap;
}
</style>