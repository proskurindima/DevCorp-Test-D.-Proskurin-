export const state = () => ({
  list: {}
})

export const getters = {
  list: s => s.list,
}
export const mutations = {
  _setList:  (s, p) => s.list = p,
}
export const actions = {
  setList({ commit },p) {
    commit('_setList', p)
  }
}