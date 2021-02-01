<template>
  <div>
    <h1 class="mt-5">{{ message }}</h1>
  </div>
</template>

<script>
export default {
  name: "RandomMessage",

  data() {
    return {
      aNewMessage: ""
    };
  },

  created() {
    this.aNewMessage =
      "A random message from another component! And ten random drinks!";
    this.$emit("message-added", this.aNewMessage);
  },

  props: {
    message: {
      type: String
    }
  }
};
</script>
