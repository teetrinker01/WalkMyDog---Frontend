<template>
  <div>
    <div class="d-flex justify-center">
      <Signup />
    </div>
    <div class="createDogSection d-flex justify-center align-center" paddless>
      <v-btn
        depressed
        rounded
        small
        color="blue-grey darken-4"
        class="mr-5 mt-2"
        width="200px"
      >
        <router-link :to="'#'">Continue</router-link>
      </v-btn>
      <v-btn
        depressed
        rounded
        small
        color="blue-grey darken-4"
        class="mr-5 mt-2"
        width="200px"
      >
        <router-link :to="'#'">Add Dog</router-link>
      </v-btn>
    </div>
  </div>
</template>

<script>
import Signup from "../components/Signup";
export default {
  components: {
    Signup
  }
};
</script>
<style lang="css" scoped>
.createDogSection {
  background-color: lightgray;
  height: 200px;
  position: fixed;
  width: 100%;
  bottom: 0;
}
</style>
