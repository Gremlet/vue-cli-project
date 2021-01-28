<template>
  <div class="search-page text-center w-75 ml-auto mr-auto mt-5">
    <h1>Cocktail search</h1>
    <p>
      Looking to kick off the weekend? Having a party with friends? Or maybe you
      just want to curl up with a good book and a great drink. Whatever the
      situation, you'll find the perfect cocktail at The Cocktail App. Search by
      cocktail name, or look up some random cocktails on the
      <b-link to="/">home</b-link> page.
    </p>
    <div class="search-form">
      <b-form inline @submit="onSubmit">
        <label for="input-cocktail-name">Search for a cocktail: </label>
        <b-form-input
          id="input-cocktail-name"
          v-model="searchTerm"
          class="mx-2 w-75"
        ></b-form-input>
        <b-button type="submit" variant="info">Search</b-button>
      </b-form>

      <!-- TODO make this a nice list with cards and such -->

      <div class="mt-5" v-if="resultsFound > 0">
        <h1>We found {{ resultsFound }} cocktails</h1>
        <ul>
          <li v-for="drink in drinks" :key="drink.strDrink">
            {{ drink.strDrink }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Drinks",

  data() {
    return {
      searchTerm: null,
      drinks: []
    };
  },

  computed: {
    resultsFound: function() {
      return this.drinks.length;
    }
  },

  methods: {
    onSubmit(event) {
      event.preventDefault();
      axios
        .get(
          `https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s=${this.searchTerm}`
        )
        .then(result => (this.drinks = result.data.drinks));
      //maybe do some error handling here
    }
  }
};
</script>

<style lang="scss"></style>
