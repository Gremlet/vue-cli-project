<template>
  <div class="home mt-5">
    <welcome></welcome>
    <!-- Let's get to know each other v-model prop to Welcome and Random? -->
  </div>
</template>

<script>
import Welcome from "@/components/Welcome.vue";

export default {
  name: "Home",
  components: {
    Welcome
  }
};
</script>
