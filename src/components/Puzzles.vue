<template>
  <div class="content">
    <h1>Meta Puzzle Practice</h1>
    <p>Get better at solving metas with fewer feeder puzzles solved.  Then spam backsolves without annoying anyone on your team!</p>
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
    <p>Metas were chosen by scanning the archives I am familiar with and randomly clicking on meta puzzles.  I am only able to use puzzle that fit nicely into the format of this site.  This means puzzles with unusual structures (eg matching puzzles to metas; multiple answers per puzzle, interactive components) are currently not eligible.  I also only currently support answers that are alphanumerics - most punctuation and whitespace should be stripped by the checker, but you could probably break it if you try.  I intend to continue including puzzles regularly.  If you don't see your favorites, feel free to contact me and I will do my best to include it in the next batch.</p>
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
