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

export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    Verticalsearchbar,
    Navigationbar,
    Listcard
  }
};
</script>

<style>
ul {
  list-style-type: none;
}
</style>
