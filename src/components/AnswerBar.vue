<template>
    <div class="answerbar">
        <div class="answerbar-backdrop" @click="closeAnswerbarPanel" v-if="isPanelOpen"></div>
        <transition name="slide-right">
            <div v-if="isPanelOpen" class="answerbar-panel">
                <div class="answerbar-header">
                    <div class="close-div">
                        <span class="fas fa-times close-button" @click.prevent="closeAnswerbarPanel"></span>
                    </div>
                    <div class='answer-input' v-show="answer_input_visible">
                        <div class="answer-title">
                            Submit an Answer?
                        </div>
                        <div class="guess-panel">
                            <input v-model="guess" class="guess" v-on:keyup.enter="callInAnswer(guess)">
                            <button class="call-in" @click="callInAnswer(guess)"> Call it in!</button>
                        </div>
                    </div>
                </div>
                <div class="answerbar-content">
                    <div class="history">
                        Submission History
                    </div>
                    <table class="history-table">
                        <tr v-for="guess in guesses" >
                            <td class='guess-text'>{{ guess.text }} </td>
                            <td class='guess-response' :class="guess.guess_class">{{ guess.response }} </td>
                        </tr>
                    </table>
                    <div class='backsolve-panel' v-show="backsolve_panel_visible()">
                        <div class="answer-title">
                            Backsolve Time!
                        </div>
                        <div class="guess-panel" v-show="backsolve_input_visible()">
                            <input v-model="backsolve" class="guess" v-on:keyup.enter="callInBacksolve(backsolve)">
                            <button class="call-in" @click="callInBacksolve(backsolve)"> Call it in!</button>
                        </div>
                        <table class="history-table">
                            <tr v-for="backsolve in backsolves" >
                                <td class='guess-text'>{{ backsolve.text }} </td>
                                <td class='guess-response' :class="backsolve.guess_class">{{ backsolve.response }} </td>
                            </tr>
                        </table>

                    </div>

                </div>
                <div class="answerbar-footer">
                    <a :href="solution_link" target="_blank" rel="noopener noreferrer">Solution</a>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
    import { store, mutations } from '@/store.js'

    export default {
        props: ['solution', 'solution_link'],
        data: function()
        {
            return {
                guess: "",
                guesses: [],
                backsolve: "",
                backsolves: [],
                answer_input_visible: true,
                puzzle: store.puzzles.find(o => o.id === this.$route.params.id)
            }
        },
        methods: {
            closeAnswerbarPanel: mutations.toggleAnswer,
            callInAnswer: function(guess){
                guess = guess.toUpperCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s]/g,"");
                var response = 'INCORRECT';
                var guess_class = 'incorrect';
                if (guess == this.$props.solution) {
                    response = 'CORRECT';
                    this.answer_input_visible = false;
                    guess_class = 'correct';
                }
                else if (this.guesses.map(g => g.text).includes(guess) ) {
                    response = 'STILL INCORRECT';
                }
                else if (Object.keys(this.puzzle.solution_hints).includes(guess)) {
                    response = this.puzzle.solution_hints[guess]
                    guess_class = 'hint';
                }
                this.guesses.unshift({
                    text: guess,
                    response: response,
                    guess_class: guess_class,
                });
                this.guess = "";
            },
            callInBacksolve: function(guess){
                guess = guess.toUpperCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s]/g,"");
                var response = 'INCORRECT';
                var guess_class = 'incorrect';
                if (this.revealIfMatched(guess)) {
                    response = 'CORRECT'
                    guess_class = 'correct';
                }
                else if (this.backsolves.map(b => b.text).includes(guess) ) {
                    response = 'ALREADY TRIED';
                }
                this.backsolves.unshift({
                    text: guess,
                    response: response,
                    guess_class: guess_class
                });
                this.backsolve = "";
            },
            revealIfMatched(guess) {
                let remaining_feeders = this.unrevealedAnswers();
                if (remaining_feeders.length > 0 && remaining_feeders.includes(guess)) {
                    mutations.revealFeeder(this.$route.params.id, guess);
                    return true;
                }
                return false;
            },
            unrevealedAnswers() {
                return this.puzzle.feeders.filter(o => !o.revealed).map(f => f.solution)
            },
            unrevealedRemaining() {
                return this.unrevealedAnswers().length > 0;
            },
            backsolve_panel_visible() {
                let fully_solved_first = this.unrevealedAnswers().length == 0 && this.backsolves.length == 0;
                return !(this.answer_input_visible || fully_solved_first);
            },
            backsolve_input_visible() {
                return !this.answer_input_visible && this.unrevealedRemaining();
            },
        },
        computed: {
            isPanelOpen() {
                return store.isAnswerOpen
            },
        }
    }
</script>
<style>
    .slide-right-enter-active,
    .slide-right-leave-active
    {
        transition: transform 0.2s ease;
    }

    .slide-right-enter,
    .slide-right-leave-to {
        transform: translateX(100%);
        transition: all 150ms ease-in 0s
    }

    .answerbar-backdrop {
        background-color: rgba(0,0,0,.5);
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        right: 0;
        cursor: pointer;
    }

    .answerbar-panel {
        overflow-y: auto;
        background-color: #2b2d2f;
        position: fixed;
        right: 0;
        top: 0;
        height: 100vh;
        z-index: 999;
        padding: .5rem .8rem .5rem .8rem;
        width: 300px;
        justify-content: right;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .close-div {
      text-align: right;
      color: #FFFFFF;
      font-size: 20px;
    }
    .close-button {
        cursor: pointer;
    }
    .guess {
      background-color: #F8F0E3;
      margin-left: 20px;
    }
    .answer-title, .history {
      text-align: center;
      font-size: 20px;
      color: #F8F0E3;
      padding: .5rem;
    }
    .call-in {
      background-color: #5e9959;
    }
    .history-table {
      font-size: 15px;
      color: #F8F0E3;
    }
    .guess-text {
      width: 55%;
    }
    .guess-response {
      width: 10em;
    }
    .answerbar-header {
      flex: 0 1 auto;
    }
    .answerbar-content {
      flex: 1 1 auto;
    }
    .answerbar-footer {
      text-align: center;
      flex: 0 1 50px;
    }
    a {
      color: #42b983;
      font-size: 20px;
    }
    .correct {
      color: #5e9959;
    }
    .hint {
      color: #7e843d;
    }
    .incorrect {
      color: #9d2933;
    }
</style>
