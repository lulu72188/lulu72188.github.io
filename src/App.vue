<template>
  <div id="app" class="main-wrapper">
    <nav class="main-nav">
      <div class="logo">
        Einna Nitram's Puzzles
      </div>
      <BurgerButton></BurgerButton>
    </nav>

    <Sidebar>
      <ul class="sidebar-panel-nav">
        <li><router-link to="/about" @click.native="CloseSidebar">About</router-link></li>
        <li><router-link to="/archives" @click.native="CloseSidebar">Puzzle Archives</router-link></li>
        <li><router-link to="/" @click.native="CloseSidebar">Meta Puzzle Practice</router-link></li>
      </ul>
    </Sidebar>
    <router-view/>
  </div>
</template>

<script>
import { store, mutations } from '@/store.js'

export default {
  name: 'App',
  methods: {
    CloseSidebar(event) {
      mutations.toggleNav()
    }
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  border: 0; margin: 0; padding: 0;
  font-family: 'Lato';
  height: 100%;
  background: #F8F0E3;
}

.logo {
  align-self: center;
  color: #F8F0E3;
  font-weight: bold;
  font-family: 'Lato';
  font-variant-caps: small-caps;
}

.main-nav {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0.8rem;
  background: #4b7a47;
  margin: 0px;
}

ul.sidebar-panel-nav {
  list-style-type: none;
}

ul.sidebar-panel-nav > li > a {
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
  display: block;
  padding-bottom: 0.5em;
}
.content {
  margin: 35px;
}
.main-wrapper {
  padding-bottom: 30px;
}
</style>

