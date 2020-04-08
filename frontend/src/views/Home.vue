<template>
  <div>
    <v-app-bar dense flat>
      <v-toolbar-title> My Dog Walker</v-toolbar-title>
    </v-app-bar>
    <v-img
      :src="require('../assets/logo.svg')"
      class="my-3"
      contain
      height="200"
    />
    <h1>Share the love dogs</h1>

    <v-btn color="green" dark>
      <router-link :to="'signup'">SignUp</router-link>

    </v-btn>
    <v-btn color="green" dark>
      LogIn
    </v-btn>
  </div>
</template>

<script>
export default {};
</script>
