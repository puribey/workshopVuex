<template>
  <v-app :dark="isDark">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list>
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :key="i"
          :to="item.link"
          >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          flat
          v-for="(item, i) in items"
          :key="i"
          :to="item.link">
          <v-icon left dark>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-title v-text="title"></v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-slide-y-transition>
      <router-view></router-view>
      </v-slide-y-transition>
 <!-- <v-slide-x-transition mode="out-in">
        <router-view> </router-view>
      </v-slide-x-transition> -->
    </v-content>
    <v-footer :fixed="fixed" app class="index100">
      <span class="pl-2">&copy; 2018 PuriBey</span>
      <v-spacer></v-spacer>
      <v-btn @click="isDark = !isDark">Toggle to dark</v-btn>
    </v-footer>
  </v-app>
</template>

<script>
import Home from "./components/Home.vue";

export default {
  name: "app",
  components: {
    Home
  },
  data() {
    return {
      fixed: false,
      isDark: false,
      drawer: false,
      items: [
        { icon: "home", title: "Home", link: "/" },
        { icon: "favorite", title: "Favourites", link: "/favourites"},
        { icon: "playlist_add_check", title: "My List", link: "/myList" }
      ],
      title: "Puri's Boardgames"
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}
.index100 {
  z-index: 100;
}
</style>
