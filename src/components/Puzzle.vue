<template>
  <div class="content">
    <div class='title-bar'>
      <span class='title'>{{ puzzle.title }}</span>
      <AnswerButton></AnswerButton>
    </div>
    <div class='title-bar'>
      <span class=title-details><a :href="puzzle.link" target="_blank" rel="noopener noreferrer">{{ puzzle.source }} by {{ puzzle.author }}</a></span>
    </div>
    <div>
      <span class='flavor' v-html="puzzle.flavor"></span>
    </div>
    <div v-if="puzzle.puzzle_content" class='puzzle_content'>
      <div class='flavor' v-html="puzzle.puzzle_content"></div>
    </div>
    <div v-if="puzzle.notes">
      <p><span class='notes'><b>Notes:</b> {{ puzzle.notes }}</span></p>
    </div>
    <div class='feeders'>
      <table id="feeders">
        <thead><tr>
          <th> Puzzle Name </th>
          <th> Solution </th>
        </tr></thead>
        <tbody>
          <tr v-for="feeder in puzzle.feeders">
            <td> {{ feeder.title }} </td>
            <td> <PuzzleSolution :meta_id="puzzle.id" :feeder_answer="feeder.solution"> </PuzzleSolution> </td>
          </tr>
          <tr><td></td><td class="random-button" @click.prevent="revealRandom"><span class="fas fa-random"></span></td></tr>
        </tbody>
      </table>
    </div>
    <Hints></Hints>
    <AnswerBar :solution="puzzle.solution" :solution_link="puzzle.solution_link"></AnswerBar>
  </div>
</template>

<script>
import { store, mutations } from '@/store.js'

export default {
  name: 'Home',
  data () {
    return {
      puzzle: store.puzzles.find(o => o.id === this.$route.params.id)
    }
  },
  computed: {
    unrevealedAnswers() {
      return this.puzzle.feeders.filter(o => !o.revealed)
    }
  },
  methods: {
    revealRandom() {
      if (this.unrevealedAnswers.length > 0) {
        let next_reveal = this.unrevealedAnswers[Math.floor(Math.random() * this.unrevealedAnswers.length)];
        mutations.revealFeeder(this.puzzle.id, next_reveal.solution);
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.title-bar {
   display: flex;
   justify-content: space-between;
   padding: 0rem .8rem 0rem .8rem;
   margin: 0px;
 }

.title {
  font-size: 40px;
}
.title-details {
  font-size: 15px;
  float: right;
}
.random-button {
  font-size: 20px;
  text-align: center;
  cursor: pointer;
  background-color: transparent;
  padding: 2px 5px;
  border-radius: 10px;
  border: 2px solid #5e9959;
  box-shadow: 1px 2px #4b7a47;
}
td.gridded {
  border-color: black;
  border-style: solid;
  border-width: 2px;
  min-width: 2em;
  min-height: 1em;
}
</style>
