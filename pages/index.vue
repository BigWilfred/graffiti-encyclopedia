<template>
  <div class="intro-container">
    <div>
      <div class="intro-content">
        <h1>
          Graffiti Encyclopedia
        </h1>
        <h4>Select the letters you would like to see</h4>
      </div>
      <div class="intro-letters">
        <a :class="{'included': $store.state.store.selected_letters.includes(char)}" v-for="(char, index) in alphabet" :key="index" class="letter" @click="add(char)">
          {{char.toUpperCase()}}
        </a>
        <a @click="pop()" class="letter">
          |B|
        </a>
        <a @click="clear()" class="letter">
          |X|
        </a>
      </div>
      <div class="intro-button">
        <a class="btn" @click="testClick()">
          Console Log State
        </a>
        <a class="btn" @click="clear()">
          Clear State
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data(){
    return{
      alphabet: 'abcdefghijklmnopqrstuvwxyz'.split('')
    }
  },
  methods: {
    testClick(){
      // this.$store.commit('store/addLetter', 'A')
      console.log(this.$store.state.store.selected_letters)
    },
    ...mapMutations({
      add: 'store/addLetter',
      clear: 'store/clearAllLetters',
      pop: 'store/removeLastLetter'
    })
  },
  mounted(){
    // add document typing listener
    document.addEventListener('keydown', e => {
      if(e.key === 'Backspace'){
        this.pop()
      }else{
        this.add(e.key)
      }
    })
  }
}
</script>


<style lang="scss" >
.intro-container{
  height:100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center; 
  text-align: center;

  > div{
    > div:not(.intro-button){
      margin-bottom: var(--p-lg);
    }
  }
  .intro-content{
    h1{
      margin-bottom: var(--p-sm);
    }
  }
  .intro-letters{
    display: grid;
    gap:var(--p-space);
    grid-template-columns: repeat(6, 1fr);
    justify-content: center;
    align-items: center;

    .letter{
      height:40px;
      width: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      border:1px solid var(--c-border);
      border-radius: var(--border-radius);

      &.included{
        background-color: #fff;
      }
    }
  }
}
</style>