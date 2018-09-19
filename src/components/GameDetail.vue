<template>
  <v-container grid-list-xl text-xs-center> <!-- add fluid -->
    <v-layout row wrap>
      <v-flex xs12>
        <v-img :src="game.src" max-height="400"> <!-- src -->
        </v-img>
      </v-flex>
      <v-flex xs12 sm6>
        <h3 class="display-3 deep-purple--text lighten-2 mb-3" >{{ game.title }}</h3> <!-- title -->
        <p
        class="subheading text-md-left"
        >{{ game.description }}</p> <!-- description -->
      </v-flex>
      <v-flex xs12 sm6>
        <v-rating
          :value="game.value"
          color="deep-purple lighten-2"
          dense
          half-increments
          readonly
          class="mb-4 mt-3"
          size="40"
        ></v-rating> <!-- :value="value -->"
        <v-expansion-panel>
          <v-expansion-panel-content
            v-for="(detail,i) in game.details"
            :key="i"
          >
            <div slot="header">{{i}}</div>
            <v-card>
              <v-card-text>{{detail}}</v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'GameDetail',
  data(){
    return{
      
    }
  },
  computed: {
    game(){
      return this.$store.getters.getGame(this.$route.params.id) // gameIDRouter
    }
  }
}
</script>

<style scoped>
</style>
