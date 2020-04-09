<template>
  <div>
    <Navigationbar />
    <v-container>
      <v-row>
        <v-col>
          <Verticalsearchbar />
        </v-col>
        <v-col>
          <ul>
            <Listcard v-for="dog in dogs" :key="dog.id" :dog="dog" />
          </ul>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Verticalsearchbar from "../components/Verticalsearchbar.vue";
import Navigationbar from "../components/Navigationbar.vue";
import Listcard from "../components/Listcard.vue";
import api from "../services/Api.js";

export default {
  name: "App",
  data() {
    return {
      dogs: []
    };
  },
  components: {
    Verticalsearchbar,
    Navigationbar,
    Listcard
  },
  methods: {
    async getAllDogs() {
      const perros = await api.getAllDogs();
      this.dogs = perros;
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
