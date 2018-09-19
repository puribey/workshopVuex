import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import MyList from '@/components/MyList'
import GameDetail from '@/components/GameDetail'
import Favourites from '@/components/Favourites'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/myList',
      name: 'MyList',
      component: MyList
    },
    {
      path: '/favourites',
      name: 'Favourites',
      component: Favourites
    },
    {
      path: '/gameDetail/:id',
      name: 'GameDetail',
      component: GameDetail,
      props: true
    },

  ],
  mode: 'history'
})
