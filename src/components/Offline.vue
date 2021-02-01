<template>
  <div class="online-indicate">
    <v-offline
      online-class="online"
      offline-class="offline"
      @detected-condition="isOnline"
    >
      <template v-slot:[onlineSlot] :slot-name="onlineSlot">
        Online: {{ onLine }}
      </template>

      <template v-slot:[offlineSlot] :slot-name="offlineSlot">
         Online: {{ onLine }}
      </template>
    </v-offline>
  </div>
</template>

<script>
import VOffline from "v-offline";
export default {
  name: "Offline",

  components: {
    VOffline
  },

  data() {
    return {
      onLine: null,
      onlineSlot: "online",
      offlineSlot: "offline"
    };
  },

  methods: {
    isOnline(e) {
      this.onLine = e;
    }
  }
};
</script>

<style lang="scss">
@import "@/main.scss";

.online-indicate {
    width: 10%;
}

.offline {
  font-family: $roboto;
  background-color: #e32619;
}
.online {
  font-family: $roboto;
  background-color: #31bd56;
  
}
</style>
