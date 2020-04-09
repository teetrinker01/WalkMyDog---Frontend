<template>
  <div>

    <Navigationbar />
    <row>
      <column>
          <Verticalsearchbar />
      </column>
  </row>
  </div>

</template>

<script>
import Verticalsearchbar from "../components/Verticalsearchbar.vue";
import Navigationbar from "../components/Navigationbar.vue";

export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    Verticalsearchbar,
    Navigationbar,
  },
};
</script>

<style lang="scss" scoped></style>
