<template>
  <v-container>
    <Hero :main="'CHETNA Emission Dataset'" :sub="'Data Summary'" />
    <!-- Hero Section -->

    <v-row class="px-0">
      <v-col cols="12">
        <DataVizTS :comparisonYears="[2020, 2021, 2022]"/>
      </v-col>
    </v-row>

    <v-row>
      <v-col v-for="city in cityNames" cols="6">
        {{ city }}
        <DataVizTS
        :csv-url="`${baseUrl}/summary_time_series/${city}.csv`"
        :mode="'evolution'"
        :selected-columns="['total']"
        :unit="'kt'"
        :comparisonYears="[2020, 2021, 2022]"
        />
        </v-col>
    </v-row>

  </v-container>
</template>

<script setup>

import { ref } from "vue";

const baseUrl = "https://raw.githubusercontent.com/chuanlongZhou/indian_100_data/main/data/";

// Dataset type selection
const datasetTypes = ["Time Series Data", "Gridded Map Data"]

const cityNames = [
  'Delhi', 'Mumbai', 'Bengaluru', 
  'Kolkata', 'Hyderabad', 'Chennai', 'Ahmedabad',  'Jaipur'
];


</script>