<template>
  <div class="puzzle-solution">
    <div v-if="isAnswerRevealed" class="revealed-answer">{{ feeder_answer }}</div>
    <div v-else @click.prevent="revealAnswer" class="hidden-answer">???</div>
  </div>
</template>

<script>
import { store, mutations } from '@/store.js'

export default {
  name: 'PuzzleSolution',
  props: ['meta_id', 'feeder_answer'],
  data () {
    return {
      msg: 'SOLUTION'
    }
  },
  computed: {
    isAnswerRevealed() {
      return store.puzzles.find(o => o.id === this.$props.meta_id).feeders.find(o => o.solution === this.$props.feeder_answer).revealed;
    }
  },
  methods: {
    revealAnswer() {
      mutations.revealFeeder(this.$props.meta_id, this.$props.feeder_answer)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.revealed-answer {
  padding: 4px 5px;
  font-family: 'Courier New', monospace;
}
.hidden-answer {
  padding: 2px 5px;
  border-radius: 10px;
  border: 2px solid #5e9959;
  box-shadow: 1px 2px #4b7a47;
  cursor: pointer;
  text-align: center;
}
</style>
