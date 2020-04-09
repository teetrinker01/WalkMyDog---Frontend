<template>
  <div class="card">
    <v-card color="grey lighten-4">
      <v-container>
        <v-row>
          <v-col>
            <v-img :src="dog.img[0]"></v-img>
          </v-col>
          <v-col>
            <h1>Name: {{ dog.name }}</h1>
            <h2>Size: {{ dog.size }}</h2>
            <h2>Breed: {{ dog.breed }}</h2>
            <h2>Good with: {{ dog.goodwith }}</h2>
            <h2>Character: {{ dog.character }}</h2>
            <v-btn
              depressed
              rounded
              small
              color="blue-grey darken-4"
              class="mr-5 d-block mt-5"
              width="200px"
              d-block
            >
              <router-link :to="'#'">Choose a Date</router-link>
            </v-btn>
            <v-btn
              depressed
              rounded
              small
              color="blue-grey darken-4"
              class="mr-5 d-block mt-2"
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
      dog: {}
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
* {
  font-size: 16px;
  font-weight: 400;
}
.card {
  margin-top: 12px;
  display: flex;
  justify-content: center;
}
span {
  display: block;
  margin-top: 12px;
}
</style>