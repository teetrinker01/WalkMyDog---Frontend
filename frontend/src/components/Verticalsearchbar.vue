<template>
  <v-card
    class="mx-auto"
    width="300"
  >
    <v-list>
      <v-list-item>
        <v-list-item-title>SEARCH FOR A DOG</v-list-item-title>
      </v-list-item>

<v-form>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="zipcode"
            label="Zipcode"
            outlined
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>

<v-card>
    <v-card-title>
<v-list-item-title>Day available on:</v-list-item-title>
    </v-card-title>
      <v-chip-group
        v-model="selection" mandatory>
        <v-chip small>M</v-chip>
        <v-chip small>T</v-chip>
        <v-chip small>W</v-chip>
        <v-chip small>T</v-chip>
        <v-chip small>F</v-chip>
        <v-chip small>S</v-chip>
        <v-chip small>S</v-chip>
      </v-chip-group>
  </v-card>

  <v-container fluid>
    <p>Dog Size:</p>
    <v-radio-group v-model="size" :mandatory="false">
      <v-radio label="Small" value="Small"></v-radio>
      <v-radio label="Medium" value="Medium"></v-radio>
      <v-radio label="Large" value="Large"></v-radio>
    </v-radio-group>
  </v-container>

  <v-container fluid>
    <p>Good with:</p>
    <v-radio-group v-model="goodwith" :mandatory="false">
      <v-radio label="Children" value="Children"></v-radio>
      <v-radio label="Cats" value="Cats"></v-radio>
      <v-radio label="Dogs" value="Dogs"></v-radio>
    </v-radio-group>
  </v-container>

  <v-container fluid>
    <p>Character:</p>
    <v-radio-group v-model="character" :mandatory="false">
      <v-radio label="Active" value="Active"></v-radio>
      <v-radio label="Laid back" value="Laid back"></v-radio>
      <v-radio label="Lazy" value="Lazy"></v-radio>
      <v-radio label="Obedient" value="Obedient"></v-radio>
      <v-radio label="Wild" value="Wild"></v-radio>
    </v-radio-group>
  </v-container>

    </v-list>
  </v-card>

</template>
Home

<script>
  export default {
    data: () => ({
      zipcode: '',
      days: '',
      size: '',
      goodwith: '',
      character: ''
    }),
  }
