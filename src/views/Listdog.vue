<template>
  <div>
    <Navigationbar />
    <v-container>
      <v-row>
        <v-col :cols="3">
          <Verticalsearchbar
            v-on:filterBySize="filterBySize"
            v-on:filterByGood="filterByGood"
            v-on:filterByCharacter="filterByCharacter"
          />
        </v-col>
        <v-col :cols="9" class="d-flex flex-wrap mx-auto">
          <v-card
            v-for="dog in todosfiltrados"
            :key="dog.id"
            :dog="dog"
            class="mx-auto"
            max-width="250"
            max-height="350"
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
              <v-btn color="info"
                @click="walkMe(dog._id)"
                :style="{ left: '50%', transform: 'translateX(-50%)' }"
              >
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
      size: "",
      good: "",
      character: "",
    };
  },
  components: {
    Verticalsearchbar,
    Navigationbar,
  },
  computed: {
    todosfiltrados() {
      let filterdogs = this.dogs;
      if (this.size !== "") {
        filterdogs = filterdogs.filter((p) => p.size.includes(this.size));
      }
      if (this.good !== "") {
        filterdogs = filterdogs.filter((x) => x.goodwith.includes(this.good));
      }
      if (this.character !== "") {
        filterdogs = filterdogs.filter((x) =>
          x.character.includes(this.character)
        );
      }
      return filterdogs;
    },
  },
  methods: {
    async getAllDogs() {
      const perros = await api.getAllDogs();
      this.dogs = perros;
    },
    filterBySize(value) {
      this.size = value;
    },
    filterByGood(type) {
      this.good = type;
    },
    filterByCharacter(feel) {
      this.character = feel;
    },
    walkMe(id) {
      this.$router.push(`/dogprofile/${id}`);
    }
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
