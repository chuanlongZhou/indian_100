<template>
  <v-card class="mx-auto my-5 pa-10" max-width="1300">
    <v-card-title>{{ title }}</v-card-title>
    <v-row justify="center" align="center">
      <img :src="`/method/${imageSrc}`" alt="Method flowchart" class="team-logo" />
    </v-row>
    <v-card-text>
      <h3>Objective</h3>
      <p>{{ objective }}</p>

      <h3>Methodology</h3>
      <p>{{ methodology }}</p>

      <h3>References</h3>
      <!-- <ul>
        <li v-for="(reference, index) in references" :key="index">
          <a :href="reference" target="_blank" rel="noopener">{{
            reference
          }}</a>
        </li>
      </ul> -->
    </v-card-text>

    <v-card-actions>
      <v-btn text color="primary" @click="viewMore"> View More </v-btn>
    </v-card-actions>
  </v-card>
</template>
  
  <script>
export default {
  name: "WorkPackage",
  props: {
    title: {
      type: String,
      required: true,
    },
    objective: {
      type: String,
      required: true,
    },
    methodology: {
      type: String,
      required: true,
    },
    imageSrc: {
      type: String,
      required: true,
    },
    references: {
      type: Array,
      required: true,
    },
  },
  methods: {
    viewMore() {
      alert("Coming soon!");
    },
  },
};
</script>
  
  <style scoped>
.v-card-title {
  font-size: 1.5em;
  font-weight: bold;
}

.v-card-text h3 {
  font-size: 1.2em;
  margin-top: 16px;
}

.v-card-text p {
  font-size: 1em;
  line-height: 1.5;
  margin-bottom: 16px;
}

.v-card-text ul {
  list-style-type: disc;
  padding-left: 20px;
}

.v-card-text ul li {
  margin-bottom: 8px;
}

.v-btn {
  margin-left: auto;
}
</style>
  