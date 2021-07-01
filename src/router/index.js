import Vue from 'vue'
import Router from 'vue-router'
import Archives from '@/components/Archives'
import Home from '@/components/Home'
import Help from '@/components/Help'
import Puzzles from '@/components/Puzzles'
import Puzzle from '@/components/Puzzle'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/help',
      name: 'Help',
      component: Help
    },
    {
      path: '/archives',
      name: 'Archives',
      component: Archives
    },
    {
      path: '/puzzles',
      name: 'Puzzles',
      component: Puzzles
    },
    {
      path: '/puzzles/puzzle/:id',
      name: 'Puzzle',
      component: Puzzle
    },
  ]
})
