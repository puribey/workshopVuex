import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    gameList: [
      {
        id: 1,
        favourite: false,
        title: "Citadels",
        src:
          "https://cf.geekdo-images.com/opengraph/img/FJ13Z29rnnQTDBTG6UMv_X_IuJs=/fit-in/1200x630/pic3239104.jpg",
        description:
          "In Stefan Feld's new game The Oracle of Delphi, the player's ships travel across a large variable game board of hexagonal tiles showing islands and the surrounding waters. Each player aims to reach certain islands to perform the twelve tasks given by Zeus. Rolling the dice (at the start of the turn) is equivalent to consulting the oracle, whereas the results represent her answers. The answers determine which actions you will be able to take, but you will always have three actions per turn. However, a slight divergence from your fate is often possible. In addition to the oracle, you can request support from the gods and you can acquire favor tokens, companions, and other special abilities that will help you win the race against other competitors. Differently equipped ships and the variable set-up of the game board will offer new challenging and interesting strategic and tactical decisions with every new game of The Oracle of Delphi that you play.",
        value: 3,
        type: "Party",
        details: {
          Edad: "+12",
          "Cantidad de jugadores": "2-4 jugadores",
          Duración: "90-120min"
        }
      },
      {
        id: 2,
        favourite: false,
        title: "Russian Railroads",
        src:
          "http://www.cephalofair.com/wp-content/uploads/2014/05/russian_railroads.jpg",
        description:
          "In Russian Railroads, players compete in an exciting race to build the largest and most advanced railway network. In order to do so, the players appoint their workers to various important tasks. The development of simple tracks will quickly bring the players to important places, while the modernization of their railway network will improve the efficiency of their machinery. Newer locomotives cover greater distances and factories churn out improved technology. Engineers, when used effectively, can be the extra boost that an empire needs to race past the competition. There are many paths to victory: Who will ride into the future full steam ahead and who will be run off the rails? Whose empire will overcome the challenges ahead and emerge victorious?",
        value: 5,
        type: "Worker Placement",
        details: {
          Edad: "+12",
          "Cantidad de jugadores": "2-4 jugadores",
          Duración: "90-120min"
        }
      },
      {
        id: 3,
        favourite: false,
        title: "Mysterium",
        src:
          "https://geekandsundry.com/wp-content/uploads/2015/09/Mysterium-Feature-962x545.jpg",
        value: 4,
        type: "Cooperative",
        details: {
          Edad: "+12",
          "Cantidad de jugadores": "2-4 jugadores",
          Duración: "90-120min"
        }
      },
      {
        id: 4,
        favourite: false,
        title: "King of Tokyo",
        src: "http://www.scottking.info/Pics/IMG_5651-1024x682.jpg",
        value: 3,
        type: "Competitive",
        details: {
          Edad: "+12",
          "Cantidad de jugadores": "2-4 jugadores",
          Duración: "90-120min"
        }
      },
      {
        id: 5,
        favourite: false,
        title: "San guo sha",
        src: "http://www.sanguosha.com/uploads/201501/54c5af440f0e8.jpg",
        description:
          "Legends of the Three Kingdoms (a.k.a. San Guo Sha) is a card game based off the Chinese classical novel, Romance of the Three Kingdoms, which shares many rules with BANG!, the differences are as follows: The Monarch (Sheriff) may get an additional skill related to their kingdom allegiance; players routinely have two powers. Weapons may have their own additional powers. A card to let a player borrow a weapon from another. A card to cancel the effect of other cards. Peach (Beer) may be played by any player when someone loses their last life; there is no exemption of using Peach when there are only 2 players left. The game proceeds counter-clockwise.This is a compilation of the base Legends of the Three Kingdoms game and first three San Guo Sha expansions in a metal tin. All text is in Simplified Chinese.",
        value: 4.5,
        type: "Competitive",
        details: {
          Edad: "+12",
          "Cantidad de jugadores": "2-4 jugadores",
          Duración: "90-120min"
        }
      },
      {
        id: 6,
        favourite: false,
        title: "Feast for Odin",
        src:
          "https://www.board-game.co.uk/wp-content/uploads/2017/10/A-Feast-for-Odin-Gameplay-2.jpg",
        value: 4,
        type: "Worker Placement",
        details: {
          Edad: "+12",
          "Cantidad de jugadores": "2-4 jugadores",
          Duración: "90-120min"
        }
      },
      {
        id: 7,
        favourite: false,
        title: "Oráculo de delfos",
        src: "https://lpix.org/2825194/tablero%20individual.jpg",
        description:
          "In Stefan Feld's new game The Oracle of Delphi, the player's ships travel across a large variable game board of hexagonal tiles showing islands and the surrounding waters. Each player aims to reach certain islands to perform the twelve tasks given by Zeus. Rolling the dice (at the start of the turn) is equivalent to consulting the oracle, whereas the results represent her answers. The answers determine which actions you will be able to take, but you will always have three actions per turn. However, a slight divergence from your fate is often possible. In addition to the oracle, you can request support from the gods and you can acquire favor tokens, companions, and other special abilities that will help you win the race against other competitors. Differently equipped ships and the variable set-up of the game board will offer new challenging and interesting strategic and tactical decisions with every new game of The Oracle of Delphi that you play.",
        value: 5,
        type: "Strategy",
        details: {
          Edad: "+12",
          "Cantidad de jugadores": "2-4 jugadores",
          Duración: "90-120min"
        }
      },
      {
        id: 8,
        favourite: false,
        title: "Ora et Labora",
        src:
          "https://cdn.anyfinder.eu/assets/4bcbd403ca7eb24a6d76b4c62728af24ea6974fb85c26cba078af717c266827f",
        value: 4,
        type: "Worker Placement",
        details: {
          Edad: "+12",
          "Cantidad de jugadores": "2-4 jugadores",
          Duración: "90-120min"
        }
      },
      {
        id: 9,
        favourite: false,
        title: "Concept",
        src:
          "https://www.boardgamequest.com/wp-content/uploads/2014/12/Concept-Header.jpg",
        value: 3,
        type: "Party",
        details: {
          Edad: "+12",
          "Cantidad de jugadores": "2-4 jugadores",
          Duración: "90-120min"
        }
      },
      {
        id: 10,
        favourite: false,
        title: "Castles of Mad King Ludwig",
        src:
          "http://tubbyandcoos.com/wp-content/uploads/2017/08/Castles-of-Mad-King-Ludwig.jpg",
        value: 3,
        type: "Strategy",
        details: {
          Edad: "+12",
          "Cantidad de jugadores": "2-4 jugadores",
          Duración: "90-120min"
        }
      },
      {
        id: 11,
        favourite: false,
        title: "Tsuro",
        src:
          "https://www.gamesworld.com.au/wp-content/uploads/2016/01/tsuro-3.jpg",
        value: 2,
        type: "Party",
        details: {
          Edad: "+12",
          "Cantidad de jugadores": "2-4 jugadores",
          Duración: "90-120min"
        }
      },
      {
        id: 12,
        favourite: false,
        title: "Evolution",
        src:
          "https://www.teamboardgame.com/wp-content/uploads/2016/05/Evolution-Cards.jpg",
        value: 4,
        type: "Strategy",
        details: {
          Edad: "+12",
          "Cantidad de jugadores": "2-4 jugadores",
          Duración: "90-120min"
        }
      }
    ],
    favouriteGames:[]
  },
  mutations: {
    ADD_FAVOURITE(state, payload){
      const updatedStoreWithFavourite = this.state.gameList.map( game => {
        if (game.id === payload){
          game.favourite = !game.favourite
          state.favouriteGames = [...state.favouriteGames, game]
        }
        // if (game.id === payload) {
        //   game.favourite = !game.favourite;
        //   if (game.favourite == true) {
        //     state.favouriteGames = [...state.favouriteGames, game];
        //   } else {
        //     state.favouriteGames = [
        //       ...state.favouriteGames.slice(0, index),
        //       ...state.favouriteGames.slice(index + 1)
        //     ];
        //   }
        // }
        return game;
      })
      state.gameList = updatedStoreWithFavourite
    }
  },
  actions: {
    updateFavourite({commit}, payload){
      commit("ADD_FAVOURITE", payload)
    }
  },
  getters: {
    getGameList(state){
      return state.gameList.sort((a,b) => {
        return a.value < b.value ? 1 : -1
      })
    },
    getGame(state) {
      return (gameIDRouter) => {
        return state.gameList.find(game => game.id == gameIDRouter)
      }
    },
    getFavourites(state) {
      return state.favouriteGames
    }
  }
});

// Some steps to follow in this page:
// 1. Erase State
// 2. Create Actions and mutations to create new game 
// 3. Connect Firebase 
// 4. Now do it with firebase