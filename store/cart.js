export const state = () => ({
  list: [],
})

export const getters = {
  list: s => s.list,
}
export const mutations = {
  setList:  (s, p) => s.list = p
}
export const actions = {
  addItem({commit, state}, newItem) {
    let list = state.list.map(i => ({...i}))
    if(state.list.length == 0) {
      newItem.count = 1
      list.push(newItem)
    }
    else {
      let item = list.find(item => item.id == newItem.id)
      if(item) {
        item.count ++
      }

      else {
        newItem.count = 1
        list.push(newItem)
      }
    }
    commit('setList', list)
  }
}