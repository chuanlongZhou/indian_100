<template>
  <!-- Sticky Navigation -->
  <nav
    ref="navbar"
    :class="{ 'sticky-nav': isSticky }"
    class="side-nav"
  >
    <ul>
      <li
        v-for="(section, index) in sections"
        :key="index"
        :class="{ 'active': activeSection === section.id }"
        @click="scrollToSection(section.id)"
      >
        {{ section.title }}
      </li>
    </ul>
  </nav>

  <v-row clss="row_class" id="why-india">
    <v-card
      class="mx-16 text-center px-15 pr-15 mt-10 row_class"
      elevation="0"
    >
      <template v-slot:title>
        <span class="text-h4 text-primary">Why India</span>
      </template>
      <div class="text-h6 text-text2 font-weight-light">Largest population in the world</div>


      <v-card-text class="text-subtitle-1 font-weight-light text-start">
        <p>
        India is the third-largest energy consumer globally, contributing about <b><b>7%</b></b> of global greenhouse gas (GHG) emissions.
         With a projected 90% increase in its urban population by 2050, energy consumption and GHG emissions are expected 
         to surge in urban areas. In 2018, India's per capita GHG emissions were 2 metric tons, ranking 74th globally, 
         with a 6% annual increase over the last decade. Today, approximately <b><b>75%</b></b> of the power production in India is met by coal, 
         with new capacity being added. Renewables represent <b><b>19%</b></b> of the power generation and show an increasing trend 
         of installed capacity.
        </p>
        <br>
        <p>
          India will shift from a low-income-based economy to a middle-income economy, 
          80% of households will be middle-income, 
          increasing ownership of electrical appliances and vehicles by <b><b>15%-20%</b></b> by 2030.
          India is a hot country and has been affected by an increase in the duration and frequency of heat waves affecting the urban population. 
          Increased heat exposure and higher population income lead to a fast surge in the use of air conditioning devices with 
          annual growth rate of around <b><b>15%</b></b> projected to continue until 2028,  
          which is expected to boost the electricity demand. 
          <RefCard
            number="1"
            sourceName="india.mongabay"
            title="With intense and recurring heat waves, AC market grows"
            link="https://india.mongabay.com/2024/07/with-intense-and-recurring-heat-waves-ac-market-grows/"
            />
        </p>
        <br>
        <p>
          India has the opportunity to curb energy demand and emissions through low-carbon urban planning, crucial for meeting its Paris Agreement commitments. 
          Reliable data on urban energy use and emissions is needed to track progress. India has pledged to reduce GHG emissions per unit of 
          GDP by <b><b>33%-35%</b></b> by 2030, based on 2005 levels, but lacks specific targets for urban emissions due to insufficient data.
        </p>
      </v-card-text>
      <!-- todo: add scrolling effect for Mainline -->
      <MainLine />
    </v-card>

    <v-card
      class="mx-16 text-center pl-15 pr-15 mt-10 row_class"
      elevation="0"
      id="why-chetna"
    >
      <template v-slot:title>
        <span class="text-h4 text-primary">Why CHETNA - Carbon Monitor 2.0</span>
      </template>
      <div class="text-h6 text-text2 font-weight-light">Best understanding of the NRT spatial and temporal variations</div>

      <v-card-text class="text-subtitle-1 font-weight-light text-start">
        <p>
          CHETNA, a succeed project of Carbon Monitor 2.0, aims to leverage artificial intelligence and new datasets to deliver high resolution daily CO₂ and pollutants emission from power, traffic, 
          residential, industrial and aviation sectors down to street and building block level,s for 100+ Indian cities. 
          Near real-time and high spatial resolution data is essential for accurately quantifying urban carbon and pollutants 
          emissions because it captures the dynamic and complex nature of urban energy use and emissions.
          These data are complementary to existing aggregated information only available at state or country level. 
        </p>

        <br>
        
        <p>
          The urban emissions maps from CHETNA will be updated monthly, offering a consistent  view of recent trends across sectors and cities.
          CHETNA will also generate high spatial-temporal resolution emissions of air pollutants co-emitted with 
          the combustion of carbon fuels, to investigate the air quality co-benefits or urban low carbon pathways
        </p>
        <br>

        <p>
          <b><b>How CHETNA select cities…</b></b>
        </p>
      </v-card-text>
      <!-- <MainMap /> -->
      <!-- <MapboxScatter /> -->
      <VectorMap />
    </v-card>

    <MainMethodology class="row_class"/>
    <MainReport class="row_class"/>

  </v-row>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const sections = ref([
  { id: "why-india", title: "Why India" },
  { id: "why-chetna", title: "Why CHETNA" },
  { id: "methodology", title: "Methodology" },
  { id: "report", title: "Report" },
]);

const activeSection = ref("why-india");
const isSticky = ref(false);
const navbar = ref(null);

const scrollToSection = (id) => {
  document.getElementById(id).scrollIntoView({ behavior: "smooth", block: "start" });
};

const handleScroll = () => {
  const navbarEl = navbar.value;
  if (!navbarEl) return;

  const navbarOffset = navbarEl.offsetTop;
  const scrollY = window.scrollY;

  // Sticky navbar logic: sticks when it reaches 75px from the top
  if (window.scrollY > 600) {
    isSticky.value = true;
  } else {
    isSticky.value = false;
  }

  // Update active section based on scroll position
  let found = false;
  sections.value.forEach((section) => {
    const sectionEl = document.getElementById(section.id);
    if (sectionEl) {
      const rect = sectionEl.getBoundingClientRect();
      if (rect.top <= 120 && rect.bottom >= 120 && !found) {
        activeSection.value = section.id;
        found = true;
      }
    }
  });
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});


</script>

    <style scoped>
.banner {
  background-color: #f5f5f5;
}
.team-logo {
  max-height: 60px;
}

.row_class{
  left: 15%;
  width: 80%;
}

/* Left-Side Navigation */
.side-nav {
  position: relative;
  left: 0px;
  width: 15%;
  height: 100vh;
  background: #ffffff;
  padding: 15px;
  border-radius: 0px;
  /* box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1); */
  transition: all 0.3s ease;
  z-index: 999;
}

.sticky-nav{
  position: fixed;
  top: 75px;
}

/* Navigation List */
.side-nav ul {
  list-style: none;
  padding: 10px 16px;
  font-size: 22px;
}

.side-nav ul li {
  cursor: pointer;
  padding: 10px 12px;
  font-size: 22px;
  transition: all 0.3s ease;
}

.side-nav ul li:hover,
.active {
  cursor: pointer;
  font-weight: bold;
  color: #046e19;
  /* border-bottom: 2px solid #046e19; */
}

/* Section Styling */
.content-section {
  margin: 40px auto;
  padding: 20px;
  max-width: 900px;
}

</style>
    