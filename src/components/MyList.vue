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
      dialog: false,
      games: [
      {
        id: 1,
        title: "Citadels",
        src:
          "https://cf.geekdo-images.com/opengraph/img/FJ13Z29rnnQTDBTG6UMv_X_IuJs=/fit-in/1200x630/pic3239104.jpg",
        description: "In Stefan Feld's new game The Oracle of Delphi, the player's ships travel across a large variable game board of hexagonal tiles showing islands and the surrounding waters. Each player aims to reach certain islands to perform the twelve tasks given by Zeus. Rolling the dice (at the start of the turn) is equivalent to consulting the oracle, whereas the results represent her answers. The answers determine which actions you will be able to take, but you will always have three actions per turn. However, a slight divergence from your fate is often possible. In addition to the oracle, you can request support from the gods and you can acquire favor tokens, companions, and other special abilities that will help you win the race against other competitors. Differently equipped ships and the variable set-up of the game board will offer new challenging and interesting strategic and tactical decisions with every new game of The Oracle of Delphi that you play.",
        value: 3,
        type: "Party",
        details: {"Edad":"+12", "Cantidad de jugadores":"2-4 jugadores", "Duración":"90-120min"}
      }
      ]
    }
  },
  methods: {
    onCloseModal(){
      this.dialog = false
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