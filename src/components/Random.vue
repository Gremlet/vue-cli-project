<template>
  <div class="cards-wrapper">
    <b-button variant="info" @click="onClick">Randomise!</b-button>

    <random-message
      :message="toggleMessage"
      @message-added="onMessageAdded"
    ></random-message>

    <b-container>
      <b-row>
        <b-col sm v-for="drink in drinks" :key="drink.strDrink">
          <b-card
            :title="drink.strDrink"
            :img-src="drink.strDrinkThumb"
            img-top
            class="mb-5 mt-5 mr-5"
          >
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";
import RandomMessage from "@/components/RandomMessage.vue";
export default {
  name: "Random",

  components: {
    RandomMessage
  },

  data() {
    return {
      message: [],
      drinks: null,
      newMessage: null
    };
  },

  computed: {
    toggleMessage: function() {
      return this.message[Math.floor(Math.random() * this.message.length)];
    }
  },

  methods: {
    onClick() {
      console.log("Clicked!");
      this.message = [
        "Here are ten random cocktails",
        "Delicious! Ten cocktails for you",
        "Yum! Ten refreshing cocktails!",
        "Is it Friday yet? Ten drinks for you",
        "Cheers! Ten random cocktails"
      ];
      this.message.push(this.newMessage);
      this.fetchDrink();
    },
    async fetchDrink() {
      let result = await axios.get(
        "https://www.thecocktaildb.com/api/json/v2/9973533/randomselection.php"
      );
      let data = result.data.drinks;
      console.log(data);
      this.drinks = data;
    },
    onMessageAdded(aNewMessage) {
      console.log(aNewMessage);
      this.newMessage = aNewMessage;
    }
  }
};
</script>

<style lang="scss">
.card-title {
  font-size: 1rem;
}

.cards-wrapper {
  margin: auto;
  text-align: center;
}
</style>
