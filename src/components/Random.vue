<template>
  <div class="cards-wrapper">
    <b-button variant="info" @click="onClick">Randomise!</b-button>
    <h1>{{ message }}</h1>
    <b-container>
      <b-row>
        <b-col sm v-for="drink in drinks" :key="drink.strDrink">
          <b-card
            :title="drink.strDrink"
            :img-src="drink.strDrinkThumb"
            img-top
            class="mb-5 mt-5 mr-5"
          >
            <!-- <b-card-text>{{ drink.strInstructions }}</b-card-text> -->
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Random",

  data() {
    return {
      message: null,
      drinks: null
    };
  },

  methods: {
    onClick() {
      console.log("Clicked!");
      this.message = "Here are ten random cocktails";
      this.fetchDrink();
    },
    async fetchDrink() {
      let result = await axios.get(
        "https://www.thecocktaildb.com/api/json/v2/9973533/randomselection.php"
      );
      let data = result.data.drinks;
      console.log(data);
      this.drinks = data;
    }
  }
};
</script>

<style lang="scss">
.card-title {
  font-size: 1rem;
}

.cards-wrapper {
  margin: auto;
  text-align: center;
}
</style>
