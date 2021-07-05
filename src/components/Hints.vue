<template>
  <div class="content">
    <ul>
      <li v-for="hint in hints" :key="hint.id">
        <transition name="hintrevealed" mode="out-in">
            <span key=1 class="hint-button" @click.prevent="revealHint(hint.id)" v-if="!isHintRevealed(hint.id)">{{ hint.name }}</span>
            <span key=2 class="hint-text" v-else><b>{{ hint.name }}: </b><span v-html="hint.text"></span></span>
        </transition>
      </li>
    </ul>
  </div>
</template>

<script>
import { store, mutations } from '@/store.js'

export default {
  name: 'Hints',
  data () {
    return {
    }
  },
  computed: {
    hints() {
      return store.puzzles.find(o => o.id === this.$route.params.id).hints;
    }
  },
  methods: {
    revealHint(hint_id) {
      mutations.revealHint(this.$route.params.id, hint_id);
      let hint_elements = document.getElementsByClassName(hint_id);
      for (var i=0, max=hint_elements.length; i < max; i++) {
        hint_elements[i].classList.add('highlight-text')
      }
    },
    isHintRevealed(hint_id) {
      return store.puzzles.find(o => o.id === this.$route.params.id).hints.find(o => o.id === hint_id).revealed;
    }
  },
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 10px;
  font-size: 20px;
}
.hint-button {
  cursor: pointer;
  background-color: transparent;
  padding: 2px 5px;
  border-radius: 10px;
  border: 2px solid #b4a5b8;
  box-shadow: 1px 2px #616161;
}
</style>
<style>
.highlight-text {
  transition: 1s;
  color: #b4a5b8;
  font-size: 17px;
}
.hintrevealed-enter-active, .hintrevealed-leave-active {
  transition: opacity .5s;
}
.hintrevealed-enter, .hintrevealed-leave-to {
  opacity: 0
}
</style>
