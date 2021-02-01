<template>
  <div>
    <h1 class="mt-5">{{ message }}</h1>
  </div>
</template>

<script>
export default {
  name: "RandomMessage",

  data() {
    return {};
  },

  props: {
    message: {
      type: String
    }
  }
};
</script>
