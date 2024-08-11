<template>
    <v-card
      class="mx-16 text-center pl-15 pr-15 mt-10"
      elevation="0"
      width="100%"
    >
      <template v-slot:title>
        <span class="text-h4 text-primary">How</span>
      </template>
      <div class="text-h6 text-text2 font-weight-light">Big data + Machine learning</div>
    </v-card>

    <v-row class="mb-15">
      <v-col cols="4.5" style="height: 700px" class="pl-10">
        <v-hover v-slot="{ isHovering, props }">
          <transition name="slide-fade2">
            <v-card
              class="ml-15 text-center  mt-10"
              width="110%"
              height="600px"
              v-if="show"
              style="left: 100px"
              v-bind="props"
              :elevation="isHovering ? 5 : 2"
              :style="isHovering ? 'z-index: 1000' : ''"
              rounded="lg"
              
            >
              <v-card-title
              style="background-color: #d0f7b0;"
              >Open-source Data</v-card-title>
              <img 
              src="@/assets/concept/home_page/concept_1.png" 
              alt="Machine Learning" 
              style="height: 550px" 
              />
            </v-card>
          </transition>
        </v-hover>
      </v-col>

      <v-col cols="2" style="height: 700px" class="pt-15">
        <v-hover v-slot="{ isHovering, props }">
          <transition name="slide-fade3">
            <v-card
              class="ml-0 text-center mt-15"
              height="450px"
              width="200%"
              style="z-index: 999; left: -100px; top: 150px"
              v-if="show"
              v-bind="props"
              :elevation="isHovering ? 5 : 2"
              rounded="lg"

            >
              <v-card-title
              style="background-color: #dca8ed;"
              
              >Machine Learning</v-card-title>
              <img 
              src="@/assets/concept/home_page/concept_3.png" 
              alt="Machine Learning" 
              style="height: 350px" 
              class="mt-5"
              />
            </v-card>
          </transition>
        </v-hover>
      </v-col>

      <v-col cols="5.5" style="height: 700px" class="mr-10 pr-15">
        <v-hover v-slot="{ isHovering, props }">
          <transition name="slide-fade">
            <v-card
              class="mr-15 ml-0 text-center  mt-10"
              width="100%"
              height="600px"
              v-if="show"
              style="left: -100px"
              v-bind="props"
              :elevation="isHovering ? 5 : 2"
              :style="isHovering ? 'z-index: 999' : ''"
              rounded="lg"

            >
              <v-card-title
              style="background-color: #fcdd9f;"
              
              >Satellite Image</v-card-title>
              <img 
              src="@/assets/concept/home_page/concept_2.png" 
              alt="Machine Learning" 
              style="height: 550px" 
              />
            </v-card>
          </transition>
        </v-hover>
      </v-col>
    </v-row>
</template>

<script setup>
const checkScrollTop = () => {
  // console.log(window.scrollY);
  if (window.scrollY > 2075) {
    show.value = true;
  } else {
    show.value = false;
  }
};

window.addEventListener("scroll", checkScrollTop);
var show = ref(false);
</script>


<style scoped>
.slide-fade3-enter-active {
  transition: all 0.75s ease-out;
}

.slide-fade3-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade3-enter-from,
.slide-fade3-leave-to {
  transform: translateY(-50px);
  opacity: 0;
}

.slide-fade2-enter-active {
  transition: all 0.75s ease-out;
}

.slide-fade2-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade2-enter-from,
.slide-fade2-leave-to {
  transform: translateX(-50px);
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all 0.75s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(50px);
  opacity: 0;
}
</style>
    