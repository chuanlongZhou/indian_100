<template>
  <v-footer height="300" app color="#F2FADC">
    <v-container>
      <v-row justify="center">
        <div class="text-h5 text-primary">PROJECT PARTNERS</div>
      </v-row>
      <v-row justify="center" class="py-4">
        <v-col cols="3" class="text-center">
          <a href="https://www.lsce.ipsl.fr/" target="_blank">
            <v-img
              src="@/assets/team_logo/lsce.png"
              alt="Team Logo"
              class="team-logo"
            ></v-img>
          </a>
        </v-col>
        <v-col cols="3" class="text-center">
          <a href="https://www.iitb.ac.in/" target="_blank">
            <img
              src="@/assets/team_logo/iit.png"
              alt="Team Logo"
              class="team-logo"
            />
          </a>
        </v-col>
        <v-col class="text-center">
        <a href="https://www.nexqt.com/" target="_blank">
        <img
          src="@/assets/team_logo/nexqt.png"
          alt="Team Logo"
          class="team-logo"
        />
        </a>
      </v-col>
      <v-col class="text-center">
        <a href="https://www.uni-muenster.de/en/" target="_blank">
        <img
          src="@/assets/team_logo/Munster.png"
          alt="Team Logo"
          class="team-logo"
        />
        </a>
      </v-col>      
        <v-col cols="3" class="text-center">
          <a href="https://www.granthamfoundation.org/" target="_blank">
            <v-img
              src="@/assets/team_logo/grantham-foundation-h-ko.png"
              alt="Team Logo"
              class="team-logo align-self-center"
            ></v-img>
          </a>
        </v-col>
        <v-col cols="3" class="text-center">
          <a href="https://www.tsinghua.edu.cn/en/" target="_blank">
            <v-img
              src="@/assets/team_logo/th.png"
              alt="Team Logo"
              class="team-logo"
            ></v-img>
          </a>
        </v-col>
        <v-col cols="3" class="text-center">
          <a href="https://www.worldbank.org/en/home" target="_blank">
            <v-img
              src="@/assets/team_logo/worldbank.jpg"
              alt="Team Logo"
              class="team-logo"
            ></v-img>
          </a>
        </v-col>
      </v-row>
      <v-row justify="right">
        <v-spacer></v-spacer>
        <a
          v-for="item in items"
          :key="item.title"
          :href="item.href"
          :title="item.title"
          class="d-inline-block mx-2 social-link"
          rel="noopener noreferrer"
          target="_blank"
        >
          <v-icon :icon="item.icon" size="24" />
        </a>
        <div class="text-text ml-15 social-link">
          DESIGNED BY DEFVE@LSCE
          <v-icon class="social-link">mdi-jellyfish</v-icon>
        </div>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup>
// You may need to import the logos if you're storing them locally
// Example:
// import TsinghuaLogo from '@/assets/tsinghua-logo.png';
// import LsceLogo from '@/assets/lsce-logo.png';
// import UciLogo from '@/assets/uci-logo.png';
// import OtherLogo from '@/assets/other-logo.png';

const items = [
  {
    title: "X",
    icon: [
      "M2.04875 3.00002L9.77052 13.3248L1.99998 21.7192H3.74882L10.5519 14.3697L16.0486 21.7192H22L13.8437 10.8137L21.0765 3.00002H19.3277L13.0624 9.76874L8.0001 3.00002H2.04875ZM4.62054 4.28821H7.35461L19.4278 20.4308H16.6937L4.62054 4.28821Z",
    ],
    href: "",
  },
  {
    title: "GitHub",
    icon: `mdi-github`,
    href: "",
  },
];
</script>


<style scoped lang="sass">
.team-logo
  max-height: 60px

.social-link :deep(.v-icon)
  color: rgba(var(--v-theme-on-background), var(--v-disabled-opacity))
  text-decoration: none
  transition: .2s ease-in-out

  &:hover
    color: #035732
</style>
