<template>
  <div class="welcome">
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
  </div>
</template>

<style lang="scss"></style>

<script>
export default {
  name: "Welcome"
};
</script>

<style lang="scss">
@import "@/main.scss";

.welcome {
  font-family: $lobster;
}
.image-grid {
  width: 50%;
  margin: auto;
}
</style>
