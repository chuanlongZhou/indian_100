<template>
  <v-row class="full_row mt-10 py-10">
    <v-container>
      <!-- First Row: Title -->
      <v-row>
        <v-col class="text-center">
          <h1 class="text-h3 font-weight-light text-primary">
            Sectoral Report
          </h1>
        </v-col>
      </v-row>

      <!-- Second Row: Caption -->
      <v-row>
        <v-col class="text-center">
          <p class="text-subtitle-1">Last update: Dec 0, 2023</p>
          <p class="text-subtitle-1">Last 30 days - Previous year</p>
        </v-col>
      </v-row>

      <!-- Third Row: Metrics -->
      <v-row justify="center" align="center" style="width: 100%">
        <v-item-group mandatory multiple v-model="selection" style="width: 100%">
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="2"
                class="my-2 box"
                v-for="item in data"
                :key="item.title"
                ref="downloadSection2"
              >
                <v-item v-slot="{ isSelected, toggle }">
                  <v-card
                    class="blue lighten-2 white--text text-center py-4"
                    hover
                    rounded="lg"
                    :color="isSelected ? 'primary' : 'secondary'"
                    @click="customToggle(toggle)"
                  >
                    <v-card-title class="text-h5 font-weight-light text-white"
                      >{{ item.title }}
                    </v-card-title>

                    <div
                      class="text-h4 font-weight-bold my-3 text-grey-darken-4"
                    >
                      {{ item.value }}
                    </div>
                    <div class="text-h5 font-weight-light text-white">
                      {{ item.change }}
                    </div>
                  </v-card>
                </v-item>
              </v-col>
            </v-row>
          </v-container>
        </v-item-group>
      </v-row>

      <v-row ref="downloadSection3" height="100px" class="box my-5">
        <LinePlot
          :title="'CO2 Emissions by Sector (2021-2023)'"
          :xAxisData="xAxisData"
          :seriesData="seriesData"
        />
      </v-row>
      <!-- Fifth Row: Download Section -->

      <v-row ref="downloadSection" height="100px" class="box">
        <v-col class="text-center">
          <v-card
            class="blue lighten-2 white--text text-center py-4 fade-slide"
            rounded="lg"
            color="primary"
          >
            <span class="text-h5 font-weight-bold text-white mr-15">
              Download our dataset
            </span>
            <v-btn class="ma-2" color="green" large to="/data">
              <v-icon left>mdi-download</v-icon> Download Now
            </v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-row>
</template>
  
  <script setup>
import { ref, onMounted } from "vue";
import time_series from "@/assets/data/time_series.json"; // Import the JSON data

const isVisible = ref(true);
const downloadSection = ref(null);
const downloadSection2 = ref(null);
const downloadSection3 = ref(null);

const isSelected = ref(null);
const selection = ref([5]);

// Reactive references for x-axis data and series data
const xAxisData = ref([]);
var seriesData = ref([]);

// Function to process the data
const processData = (data, selected) => {
  // Extract xAxisData (timestamps) from the first sector's data
  xAxisData.value = data[0].data.map((d) => d.timestamp);

  // Create series data for each sector
  seriesData.value = data.map((sector) => ({
    name: sector.sector,
    data: sector.data.map((d) => d.value),
  }));
  console.log(selected.value);
  seriesData.value = selected.value.map(index => seriesData.value[index]);
  console.log(seriesData.value);
};

function customToggle(originalToggle) {
  //   console.log('Custom logic before toggling');
  // Perform any custom logic here...

  // Then call the original toggle function
  originalToggle();
//   console.log(selection.value);
  //   console.log('Custom logic after toggling');
  // Perform any additional custom logic here...
  processData(time_series, selection);

}

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    },
    {
      threshold: 0.7,
    }
  );
  observer.observe(downloadSection.value.$el);
  observer.observe(downloadSection3.value.$el);
  for (let i = 0; i < downloadSection2.value.length; i++) {
    observer.observe(downloadSection2.value[i].$el);
  }
  processData(time_series, selection);
});

var data = ref([
  {
    title: "Power",
    value: "0 Mt",
    change: "-0.21%",
  },
  {
    title: "Industry",
    value: "-0.05 Mt",
    change: "-3.77%",
  },
  {
    title: "Ground transport",
    value: "0 Mt",
    change: "0%",
  },
  {
    title: "Residential",
    value: "-0.06 Mt",
    change: "-1.76%",
  },
  {
    title: "Co-emissions",
    value: "-0.01 Mt",
    change: "-5.09%",
  },
  {
    title: "Total CO2 Emissions",
    value: "0 Mt",
    change: "0%",
  },
]);
</script>
  
  <style scoped>
.full_row {
  width: 100%;
  background-color: #f6f6f6;
}

.text-center {
  text-align: center;
}
.py-4 {
  padding-top: 16px;
  padding-bottom: 16px;
}
.ma-2 {
  margin: 8px;
}

.box {
  opacity: 0;
  transform: translateY(50px); /* Start 50px below its normal position */
  transition: opacity 1s ease, transform 1s ease;
}

.box.visible {
  opacity: 1;
  transform: translateY(0); /* Slide up to its normal position */
}
</style>
