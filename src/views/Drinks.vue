<template>
  <div class="search-page text-center w-75 ml-auto mr-auto mt-5">
    <h1>Cocktail search</h1>
    <p>
      Looking to kick off the weekend? Having a party with friends? Or maybe you
      just want to curl up with a good book and a great drink. Whatever the
      situation, you'll find the perfect cocktail at The Cocktail App. Search by
      cocktail name (or part of a name) or look up some random cocktails on the
      <b-link to="/">home</b-link> page.
    </p>
    <about-ings class="mb-5"></about-ings>

    <div class="search-form">
      <b-form inline class="justify-content-center" @submit="onSubmit">
        <label for="input-cocktail-name">Search for a cocktail: </label>
        <b-form-input
          id="input-cocktail-name"
          v-model="searchTerm"
          placeholder='e.g. "margarita" or "martini" or "es"'
          class="mx-2 w-50"
        ></b-form-input>
        <b-button type="submit" variant="info">Search</b-button>
      </b-form>

      <div class="mt-5">
        <h1 v-if="resultsFound > 0">We found {{ resultsFound }} cocktails</h1>
        <b-container>
          <b-row>
            <b-col
              sm
              v-for="drink in drinks.slice(0, this.show)"
              :key="drink.strDrink"
            >
              <b-card
                :title="drink.strDrink"
                :img-src="drink.strDrinkThumb"
                img-top
                class="mb-2 mt-2 mr-5"
              >
              </b-card>
            </b-col>
          </b-row>
          <b-button
            class="mb-5 mt-5"
            variant="info"
            d-block
            v-if="resultsFound > 10"
            @click="showMore"
            >Show more</b-button
          >
        </b-container>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import AboutIngs from "@/components/AboutIngs.vue";

export default {
  components: {
    AboutIngs
  },
  name: "Drinks",

  data() {
    return {
      searchTerm: null,
      drinks: [],
      show: 10
    };
  },

  computed: {
    resultsFound() {
      return this.drinks.length;
    }
  },

  methods: {
    onSubmit(event) {
      event.preventDefault();
      this.fetchDrink();
    },

    async fetchDrink() {
      let result = await axios.get(
        `https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s=${this.searchTerm}`
      );
      let data = result.data.drinks;
      console.log(data);
      this.drinks = data;
    },
    showMore() {
      this.show = this.show + 10;
    }
  }
};
</script>

<style lang="scss"></style>
