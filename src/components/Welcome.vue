<template>
  <div class="welcome-page">
    <h1 class="text-center">Welcome to the Cocktail App!</h1>
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
    </div>
    <div class="welcome-text">
      <p class="text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum esse
        sapiente ut? Impedit similique consequuntur ea? Similique commodi ullam
        aliquid non consequuntur magni, laudantium deleniti architecto tenetur
        odit, quae numquam?
      </p>
    </div>
    <random></random>
  </div>
</template>

<style lang="scss"></style>

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
