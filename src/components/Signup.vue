<template>
  <v-card outlined width="75%" class="ml-5 mt-5 mx-a">
    <v-card-title>
      <h1>Signup</h1>
    </v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field
          label="Name"
          v-model="name"
          prepend-icon="mdi-account-circle"
          :rules="userRules"
        ></v-text-field>

        <v-text-field
          label="E-mail"
          v-model="email"
          :rules="emailRules"
          prepend-icon="mdi-email"
        ></v-text-field>

        <v-text-field
          label="Password"
          v-model="password"
          :type="showPassword ? 'text' : 'password'"
          prepend-icon="mdi-lock"
          :rules="passwordRule"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"
        ></v-text-field>

        <v-text-field
          label="Phone"
          v-model="phone"
          prepend-icon="mdi-account-circle"
          :rules="userRules"
        ></v-text-field>

        <v-text-field
          label="DNI"
          v-model="dni"
          prepend-icon="mdi-account-circle"
          :rules="userRules"
        ></v-text-field>

        <v-text-field
          label="Address"
          v-model="address"
          prepend-icon="mdi-account-circle"
          :rules="userRules"
        ></v-text-field>

        <v-text-field
          label="Zip Code"
          v-model="zipcode"
          prepend-icon="mdi-account-circle"
          :rules="userRules"
        ></v-text-field>

        <v-text-field
          label="City"
          v-model="city"
          prepend-icon="mdi-account-circle"
          :rules="userRules"
        ></v-text-field>
      </v-form>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <v-btn color="info" @click="signup">Signup</v-btn>
      <v-btn color="info" @click="signup">Add Dog</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import APIServices from "../services/Api";

export default {
  data() {
    return {
      showPassword: false,
      password: "benta12345",
      passwordRule: [
        v => !!v || "Password is required",
        v => v.length >= 10 || "Password must be more than 10 characters"
      ],
      name: "Benta",
      userRules: [v => !!v || "Username is required"],
      email: "benta@walk.com",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      phone: "632541875",
      dni: "78541254E",
      address: "Calle Mesa y Lopez",
      zipcode: "35000",
      city: "Las Palmas"
    };
  },
  methods: {
    signup() {
      const newUser = {
        name: this.name,
        email: this.email,
        password: this.password,
        city: this.city,
        zipcode: this.zipcode,
        address: this.address,
        dni: this.dni,
        phone: this.phone
      };

      APIServices.signup(newUser)
        .then(response => {
          if (response.error) {
            console.log(response.error);
          } else {
            localStorage.setItem("token", response.token);
            this.$router.push("/listdog");
          }
        })
        .catch(err => console.log(err));
    },
    addDog() {
      const newDogOwner = {
        name: this.name,
        email: this.email,
        password: this.password,
        city: this.city,
        zipcode: this.zipcode,
        address: this.address,
        dni: this.dni,
        phone: this.phone
      };

      APIServices.signup(newDogOwner)
        .then(response => {
          if (response.error) {
            console.log(response.error);
          } else {
            localStorage.setItem("token", response.token);
            this.$router.push("/adddog");
          }
        })
        .catch(err => console.log(err));
    }
  }
};
</script>

<style lang="css" scoped>
* {
  font-size: 16px;
}
</style>
