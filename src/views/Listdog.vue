<template>
  <div>
    <Navigationbar />
    <v-container>
      <v-row>
        <v-col :cols="3">
          <Verticalsearchbar v-on:filterBySize="filterBySize" />
        </v-col>
        <v-col :cols="9" class="d-flex flex-wrap mx-auto">
          <v-card
            v-for="dog in filtrado"
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
              <router-link :to="`dogprofile/${encodeURIComponent(dog._id)}`">
                <v-btn :style="{ left: '50%', transform: 'translateX(-50%)' }">
                  <span>Walk Me</span>
                </v-btn>
              </router-link>
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
      size: ""
    };
  },
  components: {
    Verticalsearchbar,
    Navigationbar
  },
  computed: {
    filtrado() {
      return this.dogs.filter(p => p.size.includes(this.size));
    }
  },
  methods: {
    async getAllDogs() {
      const perros = await api.getAllDogs();
      this.dogs = perros;
    },
    filterBySize(value) {
      this.size = value;
    }
  },
  mounted() {
    this.getAllDogs();
  }
};
</script>

<style>
ul {
  list-style-type: none;
}
</style>
