<template>
  <v-container class="outlined-container">
    <v-row>
      <v-col v-for="(sector, index) in sectors" :key="index" class="my-1 pt-1 pb-0">
        <v-hover v-slot="{ isHovering, props }">
          <v-card v-bind="props" class="pl-4 d-flex align-center" :elevation="isHovering ? 5 : 0">
            <img :src="`/sector_icons/${sector.icon}.png`" :alt="`${sector.label} Icon`" class="sector-icon"
              height="40px" width="40px" />
            <v-card-text class="ml-1">
              <div class="text-h6 font-weight-medium">{{ formatNumber(sectorData[sector.key]) }}</div>
              <div class="text-caption text-grey text-left">{{ sector.label }} (Gt)</div>
              <v-chip color="red" variant="outlined" size="small" class="mt-3"
                v-if="sectorData[sector.key + '_change'] > 0">
                +{{ sectorData[sector.key + '_change'] }}%
              </v-chip>
              <v-chip color="green" variant="outlined" size="small" class="mt-3"
                v-else-if="sectorData[sector.key + '_change'] <= 0">
                -{{ sectorData[sector.key + '_change'] }}%
              </v-chip>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>

      <v-col>
        <v-hover v-slot="{ isHovering, props }">
          <v-card v-bind="props" class="pl-4 d-flex align-center" :elevation="isHovering ? 5 : 0">
            <img src="/sector_icons/pollutant.png" alt="Power Icon" class="sector-icon" height="40px" width="40px" />
            <v-card-text class="ml-1">
              <div class="text-h6 font-weight-medium">{{ sectorData.total_pm25 }}</div>
              <div class="text-caption text-grey text-left">PM 2.5 (t)</div>
              <v-chip color="red" variant="outlined" size="small" class="mt-3"
                v-if="sectorData.total_pm25_change > 0">+{{ sectorData.total_pm25_change }}%</v-chip>
              <v-chip color="green" variant="outlined" size="small" class="mt-3"
                v-else-if="sectorData.total_pm25_change <= 0">-{{ sectorData.total_pm25_change }}%</v-chip>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      sectorData: {},
      sectors: [
        { key: "total", label: "Total", icon: "total" },
        { key: "total", label: "Trend", icon: "trend" },
        { key: "power", label: "Power", icon: "power" },
        { key: "traffic", label: "Traffic", icon: "traffic" },
        { key: "residential_scope1", label: "Residential Scope 1", icon: "residential_scope1" },
        { key: "residential_scope2", label: "Residential Scope 2", icon: "residential_scope2" },
        { key: "industrial", label: "Industrial", icon: "industrial" },
      ],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/chuanlongZhou/indian_100_data/refs/heads/main/data/city/total_share.json"
        );
        this.sectorData = await response.json();
        console.log("Fetched data:", this.sectorData);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    },
    formatNumber(value) {
      return (value / 1_000_000).toFixed(1);
    },
    formatNumber2(value) {
      return value.toFixed(1);
    },
  },
};
</script>

<style scoped>
.sector-icon {
  width: 40px;
  height: 40px;
}

.outlined-container{
  border: 1px solid #e0e0e0;
  background-color: rgb(225, 225, 225);
  border-radius: 5px;
}
</style>
