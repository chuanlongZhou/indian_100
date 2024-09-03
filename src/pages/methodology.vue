<template>
  <Hero />
  <v-container class="mt-10">
    <v-row
    v-for="item in display_data"
    :key="item.title"
    >
      <WorkPackageCard
        :title="item.title"
        :objective="item.objective"
        :methodology="item.methodology"
        :imageSrc="item.imageSrc"
        :references="item.references"
      />


    </v-row>
  </v-container>
</template>

<script setup>
 var display_data = ref(
  [{
    "title": "Power Generation Sector",
    "objective":"To estimate daily CO2 emissions from power generation within Indian cities by creating high-resolution temporal profiles of power plant activities.",
    "methodology": "This work package will use a combination of satellite imagery, including daily Sentinel images, and data from the GID database, which contains information on over 5000 power plants globally. By analyzing plume activities from power plants using optical and infrared signatures, we will develop temporal profiles that represent the operational status of these plants. These profiles will then be linked with disaggregated state and district-level power generation data to estimate the emissions associated with electricity consumption in urban areas.",
    "imageSrc": "power.png",
    "references":[
          {
            number: 1,
            link: 'https://example.com',
            sourceName: 'Example Source',
            title: 'Example Title',
            description: 'Example Description',
            sourceIcon: 'mdi-link',
          },
        ]
  },
  {
    "title": "Residential Sector",
    "objective":"To estimate CO2 emissions from residential, commercial, and administrative buildings at a granular level within urban areas.",
    "methodology":"This work package utilizes AI-driven analysis of building morphology data, combined with datasets from OpenStreetMap, Microsoft building footprints, and remote sensing images from Sentinel-2. The methodology involves mapping building height, volume, and type to determine energy consumption patterns. These parameters, along with regional development indices, will be used to calculate building-level emission intensities. The resulting data will be integrated with near real-time temperature and energy consumption proxies to produce high-resolution emissions maps at the community level.",
    "imageSrc": "building.png",
    "references":[]
  },
  {
    "title": "Industrial Sector",
    "objective":"To quantify industrial emissions in Indian cities by localizing and assessing the activity of major industrial facilities and smaller manufacturing sites.",
    "methodology":"The approach involves leveraging the GID global database to identify the largest industrial facilities such as cement kilns and steel plants. Temporal activity profiles of these facilities will be created using high-resolution satellite data from Sentinel-2. For smaller industries, data from the Indian Census and Annual Surveys of Industries will be used to infer emissions based on workforce distribution and energy usage patterns. This mixed-method approach allows for the generation of detailed, near-real-time emissions estimates across industrial sectors.",
    "imageSrc": "industrial.png",
    "references":[]
  },
  {
    "title": "Ground Transportation",
    "objective":"To calculate daily emissions from ground transportation in Indian cities at the block level using advanced traffic and vehicle data.",
    "methodology":"This work package will involve acquiring traffic flow and speed data from commercial providers such as TomTom and mapBox, focusing on a cost-effective sampling of key streets. Machine learning models will be employed to upscale this data to city blocks, using district-level vehicle fleet information and emission factors from COPERT-5 and India-specific datasets from ARAI. The models will be validated using independent data sources like fuel sales and vehicle registrations to ensure accuracy in estimating transportation-related CO2 emissions.",
    "imageSrc": "transport.png",
    "references":[]
  },
  {
    "title": "Aviation",
    "objective":"To estimate daily CO2 emissions from aviation activities within the major cities.",
    "methodology":"Using data from Flightradar24, this work package will track all flights (both domestic and international) departing from and arriving at airports around the selected cities. Emissions will be calculated by multiplying the distance flown by emission factors specific to different types of aircraft. The focus will be on developing accurate daily emissions profiles that reflect the aviation sector's contribution to urban CO2 levels.",
    "imageSrc": "aviation.png",
    "references":[]
  },
  {
    "title": "Pollutant Co-Emissions",
    "objective":"To assess the emissions of air pollutants that are co-emitted with CO2 from key urban sectors, with a focus on improving air quality data.",
    "methodology":"The approach includes using technology-linked emission factors, sourced from national and regional inventories, to estimate the emissions of pollutants like NOx, SO2, and particulate matter from power plants, industries, and transportation. The data will be cross-referenced with existing urban pollution datasets, such as those from the ApNA City program, to ensure consistency and accuracy. This will help in identifying major sources of air pollution in conjunction with CO2 emissions.",
    "imageSrc": "co-emission.png",
    "references":[]
  }
  ]
)
</script>
