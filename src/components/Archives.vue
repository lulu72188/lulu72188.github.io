<template>
  <div class="content">
    <h1>Puzzle Archives</h1>
    <p> All puzzles are pulled from the following public archives.  If you are an archive owner/maintainer, and would like your puzzles removed from this site, please contact {{email}}.</p>
    <ul>
        <li><a href='https://www.mit.edu/~puzzle/huntsbyyear.html' target="_blank" rel="noopener noreferrer">The MIT Mystery Hunt Archive</a></li>
        <li><a href='https://puzzlehunt.club.cc.cmu.edu/previous-hunts/' target="_blank" rel="noopener noreferrer">Puzzlehunt CMU</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Archives',
  data () {
    return {
      email: 'todo@add.email'
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
  font-size: 20px;
}
li {
  margin: 10px 10px;
}
a {
  color: #42b983;
}
</style>
