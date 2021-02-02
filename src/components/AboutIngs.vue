<template>
  <div>
    <p>
      Or search for an ingredient and learn more about what's in your drink. I
      mean, who really knows what grenadine is? :)
    </p>

    <div class="search-form">
      <b-form inline class="justify-content-center">
        <label for="input-ingredient-name">Search for an ingredient: </label>
        <b-form-input
          id="input-ingredient-name"
          placeholder='e.g "rum", "vodka", "water", "orange"'
          v-model="searchIngredient"
          class="mx-2 w-50"
        ></b-form-input>
        <b-button variant="info" :to="'/ingredients/' + searchIngredient"
          >Search</b-button
        >
      </b-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutIngs",

  data() {
    return {
      searchIngredient: null
    };
  }
};
</script>
