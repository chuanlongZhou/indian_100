<template>
  <v-card>
    <div ref="mapContainer" class="map-container"></div>
    <div ref="tooltip" class="tooltip" v-show="tooltipVisible" 
     :style="{ top: tooltipY + 'px', left: tooltipX + 'px' }" 
     v-html="tooltipContent">
</div>
  </v-card>
</template>

<script>
import { ref, onMounted } from 'vue';
import { PolygonLayer, Scene, Source } from '@antv/l7';
import { Mapbox } from '@antv/l7-maps';

export default {
  setup() {
    const mapContainer = ref(null);
    const tooltipVisible = ref(false);
    const tooltipContent = ref('');
    const tooltipX = ref(0);
    const tooltipY = ref(0);
    const mapboxToken = 'pk.eyJ1IjoiZGVmdmUxOTg4IiwiYSI6ImNtNm9lcnlscjB6OTYya3M3OWZ0ZnpqbnoifQ.POIJTiHCraKkHLUGMaWnyg'; // Replace with your actual Mapbox token

    onMounted(() => {
      const scene = new Scene({
        id: mapContainer.value,
        logoVisible: false,
        map: new Mapbox({
          style: 'mapbox://styles/mapbox/light-v10',
          pitch: 43,
          center: [79.0193, 22.3511],
          zoom: 5,
          token: mapboxToken,
        }),
      });

      scene.on('loaded', () => {
        fetch('https://raw.githubusercontent.com/chuanlongZhou/indian_100_data/refs/heads/main/data/gidded_data/brick_kiln/grid_output.geojson')
          .then((res) => res.json())
          .then((data) => {
            const source = new Source(data, {
              parser: { type: 'geojson' }, // ✅ Use standard GeoJSON parsing instead of geojsonvt
            });

            const polygonLayer = new PolygonLayer({ featureId: 'CO2' })
              .source(source)
              .color('CO2',['#FFDDDD', '#FFBBBB', '#FF8888', '#FF5555', '#FF2222', '#CC0000', '#990000', '#660000'])
              .size('CO2', (val) => Math.sqrt(val) * 500) // Adjust height scale
              .shape('extrude') // Enables 3D extrusion
              .style({
                opacity: 0.9,
                strokeWidth: 1,
                stroke: '#fff',
                pickLight: true, // Enables better 3D lighting
              });

            scene.addLayer(polygonLayer);

            // ✅ Fix Hover Event - Now feature data should be available
            polygonLayer.on('mousemove', (ev) => {
              if (ev.feature && ev.feature.properties) {
                // add pm25 and CO data
                tooltipContent.value = `CO₂: ${ev.feature.properties.CO2.toFixed(2)} tons/yr<br>
PM₂.₅: ${ev.feature.properties.PM25.toFixed(2)} tons/yr<br>
CO: ${ev.feature.properties.CO.toFixed(2)} tons/yr`;
                tooltipX.value = ev.x + 10;
                tooltipY.value = ev.y - 10;
                tooltipVisible.value = true;
              }
            });

            // Hide tooltip on mouseout
            polygonLayer.on('mouseout', () => {
              tooltipVisible.value = false;
            });
          });
      });
    });

    return { mapContainer, tooltipVisible, tooltipContent, tooltipX, tooltipY };
  },
};
</script>

<style>
.map-container {
  width: 100%;
  height: 500px;
}

.tooltip {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 14px;
  pointer-events: none;
  z-index: 1000;
  white-space: nowrap;
}
</style>
