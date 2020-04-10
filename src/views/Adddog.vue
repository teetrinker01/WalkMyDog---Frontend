<template>
  <div>
    <v-card outlined width="75%" class="ml-5 mt-5 mx-a">
      <v-card-title>
        <h1>Add Dog</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field label="Name" v-model="name"></v-text-field>
          <v-select
            label="Size"
            v-model="sizeselect"
            :items="size"
            :error-messages="errors"
            data-vv-name="select"
            required
          ></v-select>
          <v-text-field label="Breed" v-model="breed"></v-text-field>
          <v-select
            label="Good with:"
            v-model="goodwithselect"
            :items="goodwith"
            :error-messages="errors"
            data-vv-name="select"
            required
          ></v-select>
          <v-select
            label="Character"
            v-model="characterselect"
            :items="character"
            :error-messages="errors"
            data-vv-name="select"
            required
          ></v-select>
          <v-checkbox
            d-inline
            v-for="(day, index) in week"
            :key="index"
            v-model="day.value"
            :label="day.name"
            :value="day.value"
          ></v-checkbox>
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn color="info" @click="addDog">Add Dog</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
import APIServices from "../services/Api";

export default {
  data() {
    return {
      name: "",
      sizeselect: "",
      size: ["Small", "Medium", "Large"],
      breed: "",
      goodwithselect: "",
      goodwith: ["Children", "Cats", "Dogs"],
      characterselect: "",
      character: ["Active", "Laid Back", "Lazy", "Obedient", "Wild"],
      weekselect: "",
      week: [
        {
          name: "Monday",
          value: false
        },
        {
          name: "Tuesday",
          value: false
        },
        {
          name: "Wednesday",
          value: false
        },
        {
          name: "Thursday",
          value: false
        },
        {
          name: "Friday",
          value: false
        },
        {
          name: "Saturday",
          value: false
        },
        {
          name: "Sunday",
          value: false
        }
      ],
      checkbox: null
    };
  },
  methods: {
    addDog() {
      const newDog = {
        name: this.name,
        size: this.sizeselect,
        breed: this.breed,
        goodWith: this.goodwithselect,
        character: this.characterselect
      };
      APIServices.createDog(newDog)
        .then(response => {
          if (response.error) {
            console.log(response.error);
          } else {
            this.$router.push("/listdog");
          }
        })
        .catch(err => console.log(err));
    }
  }
};
</script>
