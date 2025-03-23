<template>
  <v-hover v-slot="{ isHovering, props }">

    <v-card v-bind="props" :elevation="isHovering ? 5 : 0" class="mb-10 pt-10 pa-10">
      <v-tabs v-model="tab" grow color="primary">
        <v-tab v-for="item in tabs" :key="item.key">{{ item.label }}</v-tab>
      </v-tabs>

      <v-window v-model="tab" class="mt-4">
        <v-window-item v-for="(item, index) in tabs" :key="item.key" :value="index">
          <v-sheet height="600px">
            <v-progress-circular v-if="loading" indeterminate color="primary" />
            <v-chart v-else :option="chartOptions" autoresize style="width: 100%; height: 100%" />
          </v-sheet>
        </v-window-item>
      </v-window>
    </v-card>
  </v-hover>

</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import { use } from 'echarts/core'
import VChart from 'vue-echarts'
import {
  CanvasRenderer
} from 'echarts/renderers'
import {
  LineChart,
  BarChart
} from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent
} from 'echarts/components'

import { generatePopulationPlot } from '@/mainPlotGenerators/population.js'
import { generateEmissionPlot } from '@/mainPlotGenerators/emission.js'
import { generateEmissionFactorPlot } from '@/mainPlotGenerators/emissionFactor.js'
import { generateFactsPlot } from '@/mainPlotGenerators/facts.js'
import { generateGlobalGrowthPlot } from '@/mainPlotGenerators/globalGrowth.js'

use([
  CanvasRenderer,
  LineChart,
  BarChart,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent
])

defineComponent({ components: { VChart } })

const tab = ref(0)
const chartOptions = ref({})
const loading = ref(true)

const tabs = [
  { key: 'population', label: 'Indian Population', generator: generatePopulationPlot },
  { key: 'emission', label: 'Kaya Identity', generator: generateEmissionPlot },
  { key: 'emissionFactor', label: 'Emission Factor', generator: generateEmissionFactorPlot },
  { key: 'globalGrowth', label: 'Global Emission Growth', generator: generateGlobalGrowthPlot },
  { key: 'facts', label: 'Indian Facts', generator: generateFactsPlot },
]

const loadChart = async () => {
  loading.value = true
  const generator = tabs[tab.value].generator
  chartOptions.value = await generator()
  loading.value = false
}

watch(tab, loadChart)
onMounted(loadChart)
</script>