
<template>
  <v-hover v-slot="{ isHovering, props }" open-delay="150" close-delay="100">
    <v-app-bar
      app
      height="100"
      v-bind="props"
      :color="isHovering || not_top ? 'rgba(223, 223, 223, 1)' : 'rgba(0, 0, 0, 0)'"
      elevation="2"
    >
      <v-avatar
        image="@/assets/logo.png"
        size="75"
        class="mr-4 ml-5"
        :class="isHovering || not_top ? '' : 'grayscale-image'"
      ></v-avatar>

      <span
        class="text-h4 font-weight-light"
        :class="isHovering || not_top ? 'text-grey-darken-4' : 'text-grey-lighten-4'"
        justify-center
      >
      CHETNA100+
      </span>
      <v-spacer></v-spacer>
      <v-btn text to="/"
      tile
      class="btn_appbar"
      :class="isHovering || not_top ? 'text-grey-darken-4' : 'text-grey-lighten-4'"
      variant="plain"
      >Home</v-btn>
      <v-btn text to="/whoweare"
      tile
      class="btn_appbar"
      :class="isHovering || not_top ? 'text-grey-darken-4' : 'text-grey-lighten-4'"
      variant="plain"
      >Who we are</v-btn>
      <v-btn text to="/methodology"
      tile
      class="btn_appbar"
      :class="isHovering || not_top ? 'text-grey-darken-4' : 'text-grey-lighten-4'"
      variant="plain"
      >Methodology</v-btn>
      <v-btn text to="/data"
      tile
      class="btn_appbar"
      :class="isHovering || not_top ? 'text-grey-darken-4' : 'text-grey-lighten-4'"
      variant="plain"
      >Data</v-btn>
    </v-app-bar>

  </v-hover>
</template>
  
  <script setup>
  const checkScrollTop = () => {
  if (window.scrollY > 700) {
    not_top.value = true;
  } else {
    not_top.value = false;
  }
};

window.addEventListener("scroll", checkScrollTop);
var not_top = ref(false);

</script>
  
<style scoped>
.logo {
  height: 100px;
}

.app_bar {
  transition: 0.3s ease;
}

.btn_appbar {
  border-top: 2px solid transparent; /* Default top border color */
  transition: border-top-color 0.3s ease;
}

.btn_appbar:hover {
  border-top-color: #00C853; /* Change top border color on hover */
}
.grayscale-image{
  filter: grayscale(100%);
}
</style>
  