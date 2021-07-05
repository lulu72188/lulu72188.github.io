<template>
  <div class="puzzle-solution">
    <transition name="feeder" mode="out-in">
      <div key=1 v-if="isAnswerRevealed" class="revealed-answer">{{ feeder_answer }}</div>
      <div key=2 v-else @click.prevent="revealAnswer" class="hidden-answer">???</div>
    </transition>
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
.feeder-enter-active, .feederrevealed-leave-active {
  transition: opacity 1s;
}
.feeder-enter, .feederrevealed-leave-to {
  opacity: 0
}
</style>
