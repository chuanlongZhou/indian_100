<template>
  <div class="intro-section">
    <video autoplay muted loop class="background-video">
      <source src="@/assets/hero_background.mp4" type="video/mp4" />
    </video>
    <div class="intro-text">
      <h1>
        <span style="font-size: 2em; color: #91e66a"> {{ props.main }} </span
        ><br />
        {{ props.sub }}
      </h1>

      <v-btn
        icon="mdi-chevron-double-down"
        size="large"
        variant="outlined"
        class="mt-12"
      ></v-btn>
    </div>
    # add an overlay to this div
    <div class="overlay"></div>
  </div>
</template>

<script setup>
// Props
const props = defineProps({
  main: {
    type: String,
    default: "Carbon Monitor 2.0 -100 Indian Cities",
  },
  sub: {
    type: String,
    default:
      "Near Real-time Carbon Emissions with High Spatial-temporal Resolutions",
  },
});
</script>

  <style scoped>
.intro-section {
  top: 0;
  left: 0;
  height: 600px;
  overflow: hidden;
}
.background-video {
  position: absolute;
  top: -100px;
  left: 0;
  width: 100%;
  height: 700px;
  object-fit: cover;
}
.intro-text {
  position: relative;
  z-index: 1;
  color: white;
  text-align: center;
  margin-top: 10%;
}
.overlay {
  position: absolute;
  top: -100px;
  left: 0;
  width: 100%;
  height: 700px;
  background-color: rgba(0, 0, 0, 0.6);
}
</style>
  