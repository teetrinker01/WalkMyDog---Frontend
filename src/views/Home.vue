<template>
  <div>
    <v-app-bar dense flat>
      <v-spacer></v-spacer>
      <v-toolbar-title> My Dog Walker</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-img
      :src="require('../assets/logo.svg')"
      class="my-3"
      contain
      height="200"
    />
    <h1>Share the love dogs</h1>
    <div class="buttons">
      <v-btn
        depressed
        rounded
        small
        color="blue-grey darken-4"
        class="mr-5"
        width="200px"
      >
        <router-link :to="'signup'">SignUp</router-link>
      </v-btn>

      <v-btn
        depressed
        rounded
        small
        color="blue-grey darken-4"
        class="mr-5"
        width="200px"
      >
        <router-link :to="'login'">LogIn</router-link>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="css" scoped>
h1 {
  text-align: center;
  font-weight: 400;
}
.buttons {
  display: flex;
  justify-content: center;
}
</style>
