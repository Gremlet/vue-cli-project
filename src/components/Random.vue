<template>
  <div>
    <b-button variant="info" @click="onClick">Randomise!</b-button>
    <h1>{{ message }}</h1>
    <ul>
      <li v-for="drink in drinks" :key="drink.strDrink">
        {{ drink.strDrink }}
      </li>
    </ul>
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
