<template>
  <div class="login-form w-50 mx-auto mt-5">
    <b-form @submit="onSubmitLogin">
      <p class="text-center">Sign in</p>
      <b-form-group id="input-group-1" label="Username" label-for="input-1">
        <b-form-input
          id="input-1"
          size="sm"
          v-model="username"
          placeholder="Let's pretend this is a login page :)"
          required
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="info">Submit</b-button>
    </b-form>
    <p v-if="yourName">Hello, {{ yourName }}! Enjoy your stay!</p>
  </div>
</template>

<script>
export default {
  name: "Login",

  computed: {
    username: {
      get() {
        return this.$store.state.username;
      },
      set(username) {
        this.$store.commit("setUsername", username);
      }
    }
  },

  data() {
    return {
      yourName: null
    };
  },
  methods: {
    onSubmitLogin(e) {
      e.preventDefault();
      this.handleLogin();
    },

    handleLogin() {
      this.yourName = this.$store.state.username;
    }
  },
  watch: {
    yourName: function(newName, oldName) {
      console.log(
        `I didn't know where else to put a watcher. In any case, yourName has changed from ${oldName} to ${newName}`
      );
    }
  }
};
</script>

<style lang="scss"></style>
