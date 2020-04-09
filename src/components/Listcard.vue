<template>
  <v-card class="mx-auto" max-width="250">
    <v-flex justify-center>
      <v-img
        class="white--text align-end"
        height="250px"
        src="https://images.dog.ceo/breeds/terrier-bedlington/n02093647_3594.jpg"
      >
        <v-card-title>Paquito</v-card-title>
      </v-img>

      <v-card-subtitle class="pb-0">Funloving Terrier</v-card-subtitle>

      <v-card-actions>
        <v-btn :style="{ left: '50%', transform: 'translateX(-50%)' }">
          <span>Walk Me</span>
        </v-btn>
      </v-card-actions>
    </v-flex>
  </v-card>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
