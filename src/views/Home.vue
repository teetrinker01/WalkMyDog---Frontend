<template>
  <div>
    <v-app-bar dense flat>
      <v-spacer></v-spacer>
      <v-toolbar-title><h1>My Dog Walker</h1></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-img
      :src="require('../assets/titledogs2.jpg')"
      class="my-3"
      contain
      height="600"
    />
    <h1>Share the love dogs</h1>
    <div class="buttons">
      <v-btn color="info" @click="gotosignup()" class="ma-3">
        <span>Sign up</span>
      </v-btn>
      <v-btn color="info" @click="gotologin()" class="ma-3">
        <span>Login</span>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    gotosignup() {
      this.$router.push(`/signup`);
    },
    gotologin() {
      this.$router.push(`/login`);
    },
  },
};
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
