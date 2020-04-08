<template>
  <div>
    <Navbar />
    <Verticalsearchbar />
  </div>
</template>

<script>
import Verticalsearchbar from "../components/Verticalsearchbar.vue";
import Navbar from "../components/Navbar.vue";

export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    Verticalsearchbar,
    Navbar
  }
};
</script>

<style lang="scss" scoped></style>
