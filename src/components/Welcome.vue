<template>
  <div class="welcome-page">
    <h1 class="text-center">Welcome to the Cocktail App!</h1>
    <!-- Welcome, name maybe? -->
    <div class="image-grid">
      <b-container fluid class="p-4 bg-light">
        <b-row>
          <b-col sm>
            <b-img thumbnail :src="require('../assets/cocktail1.jpg')"></b-img>
          </b-col>
          <b-col sm>
            <b-img thumbnail :src="require('../assets/cocktail2.jpg')"></b-img>
          </b-col>
          <b-col sm>
            <b-img thumbnail :src="require('../assets/cocktail3.jpg')"></b-img>
          </b-col>
        </b-row>
      </b-container>
      <div class="welcome-text mt-5">
        <p class="text-center">
          Welcome to The Cocktail App! Navigate using the dropdown menu above or
          hit the "Randomise" button to get some cocktail inspiration!
        </p>
      </div>
    </div>

    <random></random>
  </div>
</template>

<script>
import Random from "@/components/Random.vue";
export default {
  name: "Welcome",
  components: {
    Random
  }
};
</script>

<style lang="scss">
@import "@/main.scss";

h1 {
  font-family: $lobster;
}

p {
  font-family: $roboto;
}
.image-grid {
  width: 50%;
  margin: auto;
}
</style>
