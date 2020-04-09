<template>
  <div class="card">
    <v-card class="d-flex justify-start">
      <v-container>
        <v-row>
          <v-col>
            <v-img
              width="100%"
              src="https://cdn.vuetifyjs.com/images/cards/store.jpg"
            ></v-img>
          </v-col>
          <v-col>
            {{ dog.name }} Edad: Raza: Good with: Rating:
            <v-btn
              depressed
              rounded
              small
              color="blue-grey darken-4"
              class="mr-5"
              width="200px"
            >
              <router-link :to="'#'">Choose a Date</router-link>
            </v-btn>

            <v-btn
              depressed
              rounded
              small
              color="blue-grey darken-4"
              class="mr-5"
              width="200px"
            >
              <router-link :to="'#'">Apply</router-link>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>
<script>
import api from "../services/Api";
export default {
  data() {
    return {
      dog: []
    };
  },
  methods: {
    async getDogById() {
      const dogid = await api.getDogById(this.$route.params.dogid);
      return (this.dog = dogid);
    }
  },
  mounted() {
    this.getDogById();
  }
};
</script>
<style lang="css" scoped>
.card {
  width: 100%;
  margin-top: 24px;
  display: flex;
  justify-content: center;
}
</style>
