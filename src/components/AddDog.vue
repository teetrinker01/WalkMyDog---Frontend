<template>
  <v-card outlined width="75%" class="ml-5 mt-5 mx-a">
    <v-card-title>
      <h1>Add Dog</h1>
    </v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field
          label="Name"
          v-model="name"
          :rules="userRules"
        ></v-text-field>
        <v-text-field
          label="Age"
          v-model="age"
          :rules="userRules"
        ></v-text-field>
        <v-select
          label="Size"
          v-model="select"
          :items="size"
          :error-messages="errors"
          data-vv-name="select"
          required
        ></v-select>
        <v-text-field
          label="Breed"
          v-model="name"
          :rules="userRules"
        ></v-text-field>
        <v-select
          label="Good with:"
          v-model="select"
          :items="goodWith"
          :error-messages="errors"
          data-vv-name="select"
          required
        ></v-select>
        <v-select
          label="Character"
          v-model="select"
          :items="character"
          :error-messages="errors"
          data-vv-name="select"
          required
        ></v-select>
        <v-text-field
          label="Available"
          v-model="age"
          :rules="userRules"
        ></v-text-field>
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
      <v-btn color="info" @click="signup">Signup</v-btn>
      <v-btn color="info" @click="addDog">Add Dog</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      age: "",
      select: null,
      size: ["Small", "Medium", "Large"],
      breed: "",
      goodWith: ["Children", "Cats", "Dogs"],
      character: ["Active", "Laid Back", "Lazy", "Obedient", "Wild"],
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
  }
};
</script>
