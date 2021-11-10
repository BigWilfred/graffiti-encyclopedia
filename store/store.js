export const state = () => ({
  selected_letters: []
})
  
export const mutations = {
  addLetter(state, char){
    state.selected_letters.push(char)
  },
  removeLetter(state, char){
    state.selected_letters.splice(state.selected_letters.indexOf(char), 1)
  }
}
  