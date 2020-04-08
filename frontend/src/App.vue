<template>
  <v-app>
    <Home />
    <SignUp />
    <router-link></router-link>
  </v-app>
</template>

<script>
import Home from "./views/Home";
import SignUp from "./views/SignUp";

export default {
  name: "App",
  components: {
    Home,
    SignUp
  },

  data: () => ({
    //
  })
};
</script>
