<template>
  <div class="drink-desc w-75 ml-auto mr-auto text-left">
    <b-button variant="warning" to="/drinks" class="mt-3">
      <b-icon icon="arrow-left"></b-icon> Go back</b-button
    >
    <h1 class="text-center text-capitalize mt-5">
      {{ $route.params.ingredient }}
    </h1>
    <p v-if="!readMoreActivated && drinkIngredient.length>0">
      {{ drinkIngredient.slice(0, 500) }} ...
    </p>
    <b-button
      class="float-right"
      variant="info"
      v-if="!readMoreActivated && drinkIngredient.length > 0"
      @click="activateReadMore"
    >
      Read more...
    </b-button>
    <p v-if="readMoreActivated">
      {{ drinkIngredient }}
    </p>
    <p
      class="text-center w-75 ml-auto mr-auto"
      v-if="drinkIngredient.length < 1"
    >
      <b-icon icon="emoji-neutral"></b-icon> {{ message }}
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
      message: "Sorry, we couldn't find that. Please go back and try again",
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
