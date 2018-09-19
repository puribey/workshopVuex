<template>
<v-container fluid grid-list-xl class="lateral">
  <v-layout row wrap>
    <v-flex v-for="game in games" :key="game.id" xs12 sm3>
      <GameCard :gameProp="game" :isInFav="isInFav"></GameCard>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
import GameCard from "./GameCard";

export default {

  name: 'Favourites',
  components: {
    GameCard
  },
  data(){
    return{
    
    }
  },
  computed: {
    games(){
      return this.$store.getters.getFavourites
    }
  }
}
</script>

<style scoped>

</style>