<template>
  <Hero :main="'Team Introduction text'" :sub="'other introduction text'" />

  <v-container class="my-10">
    <v-row>
      <v-col cols="12" class="text-left text-h6 text-primary">
          <a href="https://www.lsce.ipsl.fr/" target="_blank">
            <img
              src="@/assets/team_logo/lsce.png"
              alt="Team Logo"
              class="team-logo"
            ></img>
          </a>
        <p class="text-body-1"> The LSCE team is ... </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        class="px-4"
        cols="12"
        md="4"
        v-for="member in LSCE_team"
        :key="member.name"
      >
        <TeamMemberCard
          :name="member.name"
          :title="member.title"
          :description="member.description"
          :photo="member.photo"
          :homeUrl="member.homeUrl"
          :scholarUrl="member.scholarUrl"
          :githubUrl="member.githubUrl"
        />
      </v-col>
    </v-row>
  <v-divider class="my-10"></v-divider>
  </v-container>

  <v-container class="my-10">
    <v-row>
      <v-col cols="12" class="text-left text-h6 text-primary">
        <a href="https://www.iitb.ac.in/" target="_blank">
        <img
          src="@/assets/team_logo/iit.png"
          alt="Team Logo"
          class="team-logo"
        />
        </a>
        <p class="text-body-1"> The IIT Bombay team is ... </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        class="px-4"
        cols="12"
        md="4"
        v-for="member in IIT_team"
        :key="member.name"
      >
        <TeamMemberCard
          :name="member.name"
          :title="member.title"
          :description="member.description"
          :photo="member.photo"
          :homeUrl="member.homeUrl"
          :scholarUrl="member.scholarUrl"
          :githubUrl="member.githubUrl"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import team from "@/assets/people_avtar/team.json"; // Import the JSON data

const LSCE_team = ref(team.filter((member) => member.institute === "LSCE"));
const IIT_team = ref(team.filter((member) => member.institute === "IIT Bombay"));

</script>

<style scoped>
.team-logo {
  max-height: 50px;
}
</style>
  