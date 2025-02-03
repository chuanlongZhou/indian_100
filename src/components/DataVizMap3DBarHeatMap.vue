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
import { HeatmapLayer, Scene } from '@antv/l7';
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
        fetch('https://raw.githubusercontent.com/chuanlongZhou/indian_100_data/refs/heads/main/data/summary_grid/total.csv')
          .then((res) => res.text())
          .then((data) => {
            // console.log(data);
            const layer = new HeatmapLayer({})
              .source(data, {
                parser: {
                  type: 'csv',
                  x: 'lon',
                  y: 'lat',
                },
                transforms: [
                  {
                    type: 'grid',
                    size: 1000,
                    field: 'total_co2',
                    method: 'sum',
                  },
                ],
              })
              .size('sum', (sum) => sum / 10)
              .shape('squareColumn')
              .style({
                coverage: 0.9,
                angle: 0,
              })
              .color('sum', [
                '#146968', '#50A078', '#FFBBBB', '#FF8888', '#FF5555', '#FF2222', '#CC0000', '#990000'
              ]);
            // console.log(layer);
            
            scene.addLayer(layer);

            // ✅ Add hover event to show tooltip
            layer.on('mousemove', (ev) => {
              if (ev.feature) {
                tooltipContent.value = `CO₂: ${(ev.feature.sum/1000).toFixed(1)} Kt/yr`;
                tooltipX.value = ev.x + 10;
                tooltipY.value = ev.y - 10;
                tooltipVisible.value = true;
                // console.log(tooltipContent);
              }
            });

            // Hide tooltip on mouseout
            layer.on('mouseout', () => {
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
  height: 1350px;
}

.tooltip {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 14px;
  pointer-events: none;
  z-index: 1000;
  white-space: nowrap;
}
</style>
