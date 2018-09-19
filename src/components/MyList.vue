<template>
<v-container fluid grid-list-xl class="lateral">
  <v-layout row wrap>
    <v-flex v-for="game in games" :key="game.id" xs12 sm3>
      <GameCard :gameProp="game"></GameCard>
    </v-flex>
  </v-layout>
  <v-dialog v-model="dialog" persistent max-width="500px">
    <v-btn
      color="deep-purple lighten-2"
      dark
      fab
      fixed
      bottom
      right
      slot="activator"
    >
      <v-icon>add</v-icon>
    </v-btn>
    <AddGame @onCloseModal="onCloseModal()"/>
  </v-dialog>
</v-container>
</template>

<script>
import AddGame from "./AddGame";
import GameCard from "./GameCard";
export default {
  name: "MyList",
  components: {
    AddGame,
    GameCard
  },
  data() {
    return {
      dialog: false
    }
  },
  methods: {
    onCloseModal(){
      this.dialog = false
    }
  },
  computed: {
    games(){
      return this.$store.getters.getGameList
    }
  }
};
</script>

<style scoped>
.lateral .v-speed-dial,
.lateral .v-btn--floating {
  position: fixed;
}
.lateral .v-btn--floating {
  margin: 16px 16px 30px 16px;
}
</style>