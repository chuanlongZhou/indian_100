<template>
  <v-container fluid>
    <!-- Hero Section -->
    <Hero :main="'CHETNA Emission Dataset'" :sub="'Data Summary'" />

    <!-- Time Series Section -->
    <v-row class="px-10">
      <v-col cols="12">
        <DataVizTotalTS />
      </v-col>
    </v-row>
    <v-divider class="mx-10 py-5"></v-divider>

    <!-- Two Column Layout -->
    <v-row class="pl-15">
      <!-- Left Column -->
      <v-col class="pl-10" cols="12" md="6">
        <v-row>

          <v-col cols="12">
            <!-- Pie Chart and Text -->
            <DataVizCO2Share />
          </v-col>
          <v-col cols="4">
          </v-col>

        </v-row>
        <v-row>
          <v-col cols="6" class="mt-15">
            <DataVizMapPie />

          </v-col>

          <v-col cols="6">
            <v-row>
              <DataVizTextReport />

            </v-row>

            <v-row>
              <DataVizPollutantShare />
            </v-row>

          </v-col>

        </v-row>
      </v-col>

      <!-- Right Column - Map -->
      <v-col cols="12" md="6">
        <v-card-title class="text-h4 font-weight-light text-primary mt-10">Gridded Emissions</v-card-title>

        <DataVizMap3DBarHeatMap />

      </v-col>
    </v-row>

    <v-divider class="mx-10 py-5 mt-10"></v-divider>

    <v-row class="pl-10">
      <!-- Bar Plot -->
      <DataVizTotaBar />
    </v-row>

    <v-divider class="mx-10 py-5"></v-divider>

    <v-row class="pl-10">
      <GetData />
    </v-row>
  </v-container>
</template>

<script setup>


// Import your placeholder components
// Example:
// import Hero from '@/components/Hero.vue';
// import TimeSeriesPlaceholder from '@/components/TimeSeriesPlaceholder.vue';
// import PieChartPlaceholder from '@/components/PieChartPlaceholder.vue';
// import TextPlaceholder from '@/components/TextPlaceholder.vue';
// import BarPlotPlaceholder from '@/components/BarPlotPlaceholder.vue';
// import MapPlaceholder from '@/components/MapPlaceholder.vue';
</script>