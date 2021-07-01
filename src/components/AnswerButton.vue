<template>
    <div id="answer"
         :class="{ 'active' : isAnswerActive }"
         @click.prevent="toggle">
         <button type="button" style="font-size:24px" class="answer-button"><i class="fa fa-pencil"></i></button>
    </div>
</template>
<script>
    import { store, mutations } from '@/store.js'

    export default {
        computed: {
            isAnswerActive() {
                return store.isAnswerOpen
            }
        },
        methods: {
            toggle() {
                mutations.toggleAnswer()
            }
        }
    }
</script>
<style>
   .hidden {
        visibility: hidden;
    }

    .answer-button {
        cursor: pointer;
        background-color: transparent;
        padding: 2px 5px;
        border-radius: 10px;
        border: 2px solid #5e9959;
        box-shadow: 1px 2px #4b7a47;
    }

    /* remove blue outline */
    button:focus {
        outline: 0;
    }
</style>
