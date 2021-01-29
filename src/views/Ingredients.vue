<template>
  <div class="drink-desc">
    <b-button variant="warning" to="/drinks" class="mt-3">
      <b-icon icon="arrow-left"></b-icon> Go back</b-button
    >
    <h1 class="text-center text-capitalize mt-5">
      {{ $route.params.ingredient }}
    </h1>
    <p v-if="!readMoreActivated" class="w-75 ml-auto mr-auto">
      {{ drinkIngredient.slice(0, 500) }}
    </p>
    <b-button
      variant="info"
      v-if="!readMoreActivated"
      @click="activateReadMore"
    >
      Read more...
    </b-button>
    <p class="w-75 ml-auto mr-auto" v-if="readMoreActivated">
      {{ drinkIngredient }}
    </p>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Ingredients",

  data() {
    return {
      drinkIngredient: "",
      readMoreActivated: false
    };
  },
  created() {
    axios
      .get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${this.$route.params.ingredient}`
      )
      .then(
        result =>
          (this.drinkIngredient = result.data.ingredients[0].strDescription)
      );
  },
  methods: {
    activateReadMore() {
      this.readMoreActivated = true;
    }
  }
};
</script>
