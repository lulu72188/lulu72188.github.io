<template>
  <div class="content">
    <h1>Meta Puzzles</h1>
    <div class="lucky-div"><span class="fas fa-random lucky-button" @click="goToRandom"> I'm feeling lucky! </span></div>
    <ul id='meta-puzzles'>
      <li v-for="puzzle in puzzles"
        :class="{highlight:puzzle.hover}"
        :key="puzzle.title"
        @mouseover="handleHover(puzzle,true)"
        @mouseleave="handleHover(puzzle,false)"
      >
        <router-link :to="{path: '/puzzles/puzzle/' + puzzle.id }">
        <span class="puzzle-title">{{ puzzle.title }}</span> <span class="puzzle-details">({{puzzle.source}} - {{ puzzle.author }})</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { store } from '@/store.js'

export default {
  name: 'MetaPuzzles',
  data () {
    return {
      puzzles: store.puzzles,
    }
  },
  methods: {
    handleHover(puzzle,hovered) {
      puzzle.hover = hovered;
    },
    goToRandom() {
      console.log("ANNIE")
      let random_puzzle = store.puzzles[Math.floor(Math.random() * store.puzzles.length)]
      this.$router.push({ name: 'Puzzle', params: { id: random_puzzle.id } })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 10px;
  background: #5e9959;
  font-size: 20px;
  
}
li.highlight {
  background: #4b7a47;
}
.puzzle-title {
  font-size: 30px;
}
li a {
  text-decoration: none;
  color: #000000;
}
.lucky-button {
  padding: 2px 5px;
  border-radius: 10px;
  border: 2px solid #5e9959;
  box-shadow: 1px 2px #4b7a47;
  cursor: pointer;
  text-align: center;
}
</style>
