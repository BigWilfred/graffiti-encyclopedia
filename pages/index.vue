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
        <a v-for="(i, index) in Array(26)" :key="index" class="letter">
          {{index}}
        </a>
      </div>
      <div class="intro-button">
        <a class="btn" @click="add('B')">
          Advance
        </a>
        <a class="btn" @click="testClick()">
          Advance
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  methods: {
    testClick(){
      // this.$store.commit('store/addLetter', 'A')
      console.log(this.$store.state.store.selected_letters)
    },
    ...mapMutations({
      add: 'store/addLetter'
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
    }
  }
}
</style>