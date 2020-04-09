<template>
  <div class="card">
    <v-card color="grey lighten-4">
      <v-container>
        <v-row>
          <v-col>
            <v-img
              src="https://images.dog.ceo/breeds/terrier-bedlington/n02093647_3594.jpg"
            ></v-img>
          </v-col>

          <v-col>
            <h1>Name: Sofía{{ dog.name }}</h1>
            <h2>Age: 23{{ dog.name }}</h2>
            <h2>Email: hola@mail.com{{ dog.name }}</h2>
            <h2>Password: ······{{ dog.name }}</h2>
            <h2>Location: Las Palmas{{ dog.name }}</h2>
            <v-btn
              depressed
              rounded
              small
              color="blue-grey darken-4"
              class="mr-5 d-block mt-5"
              width="200px"
              d-block
            >
              <router-link :to="'#'">Modify</router-link>
            </v-btn>
            <v-btn
              depressed
              rounded
              small
              color="blue-grey darken-4"
              class="mr-5 d-block mt-2"
              width="200px"
            >
              <router-link :to="'#'">Delete</router-link>
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
* {
  font-size: 16px;
  font-weight: 400;
}
.card {
  margin-top: 48px;
  display: flex;
  justify-content: center;
}
span {
  display: block;
  margin-top: 12px;
}
</style>
