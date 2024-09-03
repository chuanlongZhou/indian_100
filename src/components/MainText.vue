<template>
  <v-row>
    <v-card
      class="mx-16 text-center px-15 pr-15 mt-10"
      elevation="0"
    >
      <template v-slot:title>
        <span class="text-h4 text-primary">Why India</span>
      </template>
      <div class="text-h6 text-text2 font-weight-light">Largest population in the world</div>


      <v-card-text class="text-subtitle-1 font-weight-light text-start">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
        ratione debitis quis est labore voluptatibus! Eaque cupiditate minima,
        at placeat totam, magni doloremque veniam neque porro libero rerum unde
        voluptatem! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate
        minima, at placeat totam, magni doloremque veniam neque porro libero
        rerum unde voluptatem! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus!
        Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque
        porro libero rerum unde voluptatem!
      </v-card-text>
      <MainLine />
    </v-card>

    <v-card
      class="mx-16 text-center pl-15 pr-15 mt-10"
      elevation="0"
    >
      <template v-slot:title>
        <span class="text-h4 text-primary">Why Carbon Monitor 2.0</span>
      </template>
      <div class="text-h6 text-text2 font-weight-light">Best understanding of the NRT spatial and temporal variations</div>

      <v-card-text class="text-subtitle-1 font-weight-light text-start">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
        ratione debitis quis est labore voluptatibus! Eaque cupiditate minima,
        at placeat totam, magni doloremque veniam neque porro libero rerum unde
        voluptatem! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate
        minima, at placeat totam, magni doloremque veniam neque porro libero
        rerum unde voluptatem! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus!
        Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque
        porro libero rerum unde voluptatem!
      </v-card-text>
      <!-- <MainMap /> -->
      <MapboxScatter />
    </v-card>

    <MainMethodology />
    <MainReport />

  </v-row>
</template>



    <style scoped>
.banner {
  background-color: #f5f5f5;
}
.team-logo {
  max-height: 60px;
}

</style>
    