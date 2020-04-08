<template>
  <div>
    <v-app-bar dense flat>
      <v-toolbar-title>
        My Dog Walker</v-toolbar-title>
    </v-app-bar>
    <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
        <h1>Share the love dogs</h1>
    <v-btn color="green" dark v-on="on">
      <a href="./views.SignUp.vue">Sign Up</a>
    </v-btn>
    <v-btn color="green" dark v-on="on">
      LogIn
    </v-btn>

  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="css" scoped>


</style>