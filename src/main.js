// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Velocity from 'velocity-animate'
import Vue from 'vue'

import App from './App'
import router from './router'

import AnswerBar from './components/AnswerBar.vue'
import AnswerButton from './components/AnswerButton.vue'
import BurgerButton from './components/BurgerButton.vue'
import Hints from './components/Hints.vue'
import PuzzleSolution from './components/PuzzleSolution.vue'
import Sidebar from './components/Sidebar.vue'

Vue.config.productionTip = false

Vue.component('AnswerBar', AnswerBar);
Vue.component('AnswerButton', AnswerButton);
Vue.component('BurgerButton', BurgerButton);
Vue.component('Hints', Hints);
Vue.component('PuzzleSolution', PuzzleSolution);
Vue.component('Sidebar', Sidebar);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App,
    BurgerButton,
    Sidebar
  },
  template: '<App/>'
})
