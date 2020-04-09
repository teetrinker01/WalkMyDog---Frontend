<template>
  <div>
    <Navigationbar />
    <row>
      <column>
        <Verticalsearchbar />
      </column>
      <Listcard />
      <column> </column>
    </row>
  </div>
</template>

<script>
import Verticalsearchbar from "../components/Verticalsearchbar.vue";
import Navigationbar from "../components/Navigationbar.vue";
import Listcard from "../components/Listcard.vue";

export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    Verticalsearchbar,
    Navigationbar,
    Listcard
  }
};
</script>

<style lang="scss" scoped></style>
