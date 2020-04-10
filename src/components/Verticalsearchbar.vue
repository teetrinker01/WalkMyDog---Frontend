<template>
  <v-card class="mx-auto" width="300">
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
        <div class="weekDays-selector">
          <input type="checkbox" id="weekday-mon" class="weekday" />
          <label for="weekday-mon">M</label>
          <input type="checkbox" id="weekday-tue" class="weekday" />
          <label for="weekday-tue">T</label>
          <input type="checkbox" id="weekday-wed" class="weekday" />
          <label for="weekday-wed">W</label>
          <input type="checkbox" id="weekday-thu" class="weekday" />
          <label for="weekday-thu">T</label>
          <input type="checkbox" id="weekday-fri" class="weekday" />
          <label for="weekday-fri">F</label>
          <input type="checkbox" id="weekday-sat" class="weekday" />
          <label for="weekday-sat">S</label>
          <input type="checkbox" id="weekday-sun" class="weekday" />
          <label for="weekday-sun">S</label>
        </div>
      </v-card>

      <v-container fluid>
        <p>Dog Size:</p>
        <v-radio-group v-model="size" :mandatory="false">
          <v-radio
            label="Small"
            value="Small"
            @click="filterBySize('Small')"
          ></v-radio>
          <v-radio
            label="Medium"
            value="Medium"
            @click="filterBySize('Medium')"
          ></v-radio>
          <v-radio
            label="Large"
            value="Large"
            @click="filterBySize('Large')"
          ></v-radio>
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

<script>
export default {
  data: () => ({
    zipcode: "",
    days: "",
    size: "",
    goodwith: "",
    character: ""
  }),
  methods: {
    filterBySize(value) {
      this.$emit("filterBySize", value);
    }
  }
};
</script>

<style scooped>
.weekDays-selector input {
  display: none !important;
}

.weekDays-selector input[type="checkbox"] + label {
  display: inline-block;
  border-radius: 6px;
  background: #dddddd;
  height: 40px;
  width: 30px;
  margin-right: 3px;
  line-height: 40px;
  text-align: center;
  cursor: pointer;
}

.weekDays-selector input[type="checkbox"]:checked + label {
  background: #2ad705;
  color: #ffffff;
}
</style>
