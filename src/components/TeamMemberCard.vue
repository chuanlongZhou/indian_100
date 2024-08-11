<template>
  <v-hover>
    <template v-slot:default="{ isHovering, props }">
      <v-card
        class="mx-auto my-4 pa-5"
        max-width="600"
        outlined
        hover
        v-bind="props"
        :rounded="isHovering? 'xl' : 'lg'"
        :color="isHovering ? 'light' : 'white'"
      >
        <v-row>
          <v-col cols="4" class="px-5 mb-3">
            <v-avatar 
            :size="isHovering ? '150' : '100'" 
            :image="'src/assets/people_avtar/'+photo"></v-avatar>
          </v-col>
          <v-col cols="7">
            <v-card-title 
            class="font-weight-bold"
            :class="isHovering ? 'text-h5' : 'text-h6'"
            >{{ name }}</v-card-title>
            <v-card-subtitle 
            :class="isHovering ? 'text-h6' : ''"
            
            >{{ title }}</v-card-subtitle>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn icon :href="homeUrl" target="_blank">
                <v-icon>mdi-home</v-icon>
              </v-btn>
              <v-btn icon :href="scholarUrl" target="_blank">
                <v-icon>mdi-school</v-icon>
              </v-btn>
              <v-btn icon :href="githubUrl" target="_blank">
                <v-icon>mdi-github</v-icon>
              </v-btn>
            </v-card-actions>
          </v-col>
        </v-row>

        <v-divider></v-divider>
        <v-card-text 
        :class="isHovering ? 'text-body-1' : 'text-body-2'"
        >
          {{ description }}
        </v-card-text>
      </v-card>
    </template>
  </v-hover>
</template>
  
  <script setup>
import { defineProps } from "vue";

const props = defineProps({
  name: String,
  title: String,
  description: String,
  photo: String,
  homeUrl: String,
  scholarUrl: String,
  githubUrl: String,
});
var panel = ref([0]);
</script>
  
  <style scoped>
.font-weight-bold {
  font-size: 1.25rem;
}

.subtitle-1 {
  font-size: 0.875rem;
}

.v-card-actions {
  justify-content: center;
}

.v-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.v-card:hover {
  transform: scale(1.05);
}
</style>
  