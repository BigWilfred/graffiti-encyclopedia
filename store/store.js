export const state = () => ({
  selected_letters: []
})
  
export const mutations = {
  addLetter(state, char){
    if(state.selected_letters.includes(char)) return // only add it once
    state.selected_letters.push(char)
  },
  removeLetter(state, char){
    state.selected_letters.splice(state.selected_letters.indexOf(char), 1)
  },
  clearAllLetters(state){
    state.selected_letters = []
  },
  removeLastLetter(state){
    state.selected_letters.pop()
  }
}
  