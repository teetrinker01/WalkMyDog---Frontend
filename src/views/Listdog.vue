<template>
  <div>
    <Navigationbar />
    <v-container >
      <v-row>
        <v-col :cols="3">
          <Verticalsearchbar />
        </v-col>
        <v-col :cols="9" class="d-flex flex-wrap mx-auto">
          <v-card
            v-for="dog in dogs"
            :key="dog.id"
            :dog="dog"
            class="mx-auto"
            max-width="250"
          >
            <v-img
              class="white--text align-end"
              height="250px"
              :src="dog.img[0]"
            >
              <v-card-title>{{ dog.name }}</v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0">{{ dog.breed }}</v-card-subtitle>

            <v-card-actions>
              <v-btn :style="{ left: '50%', transform: 'translateX(-50%)' }">
                <span>Walk Me</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Verticalsearchbar from "../components/Verticalsearchbar.vue";
import Navigationbar from "../components/Navigationbar.vue";
import api from "../services/Api.js";

export default {
  name: "App",
  data() {
    return {
      dogs: [],
    };
  },
  components: {
    Verticalsearchbar,
    Navigationbar,
  },
  methods: {
    async getAllDogs() {
      const perros = await api.getAllDogs();
      this.dogs = perros;
    },
  },
  mounted() {
    this.getAllDogs();
  },
};
</script>

<style>
ul {
  list-style-type: none;
}
</style>
