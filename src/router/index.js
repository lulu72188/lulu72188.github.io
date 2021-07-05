import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About'
import Archives from '@/components/Archives'
import Help from '@/components/Help'
import Puzzles from '@/components/Puzzles'
import Puzzle from '@/components/Puzzle'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Puzzles',
      component: Puzzles
    },
    {
      path: '/about',
      name: 'About',
      component: About
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
