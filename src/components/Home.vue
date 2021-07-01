<template>
  <div class="content">
    <h1>Home</h1>
    <div class="home-text">
      <p>Meta Puzzle Practice is a chance for puzzle solvers to practice their meta-solving skills, without the pesky details of having to solve all of the feeder puzzles.  Reveal as many puzzles as you like (use the <span class='fas fa-random'></span> button to reveal a random answer) and try to solve the meta with as few feeders as possible.  Then try to backsolve what's left!  You can find the answer panel behind the <span class="fa fa-pencil"></span> button.  I've been told it's not that obvious, I'm working on making it more discoverable.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
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
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.home-text {
  
}
</style>
