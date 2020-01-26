export const state = () => ({
  list: [
    {
      id: 1,
      title: 'iPhone 5',
      description: 'iPhone 5iPhone 5iPhone 5iPhone 5iPhone 5iPhone 5iPhone 5iPhone 5iPhone 5iPhone 5iPhone 5iPhone 5iPhone 5iPhone 5iPhone 5iPhone 5iPhone 5iPhone 5iPhone 5iPhone 5iPhone 5vvv',
      image: 'iPhone_5.png',
      price: '200',
      category: 'apple',
      isFavorite: true,
    },
    {
      id: 2,
      title: 'iPhone 6s',
      description: 'iPhone 6s',
      image: 'iPhone_6.png',
      price: '300',
      category: 'apple',
      isFavorite: false,
    },
    {
      id: 3,
      title: 'iPhone X',
      description: 'iPhone X',
      image: 'iPhone_X.png',
      price: '700',
      category: 'apple',
      isFavorite: false,
    },
    {
      id: 4,
      title: 'iPhone Xs',
      description: 'iPhone Xs',
      image: 'iPhone_Xs.png',
      price: '800',
      category: 'apple',
      isFavorite: false,
    },
    {
      id: 5,
      title: 'iPhone 11 Pro',
      description: 'Phone 11 Pro',
      image: 'iPhone_11_pro.png',
      price: '1100',
      category: 'apple',
      isFavorite: false,
    },
    {
      id: 6,
      title: 'Samsung Galaxy A30s',
      description: 'Samsung Galaxy A30s',
      image: 'S_Galaxy_A30s.jpg',
      price: '250',
      category: 'samsung',
      isFavorite: true,
    },
    {
      id: 7,
      title: 'Samsung Galaxy A50',
      description: 'Samsung Galaxy A50',
      image: 'S_Galaxy_A50.jpg',
      price: '300',
      category: 'samsung',
      isFavorite: false,
    },
    {
      id: 8,
      title: 'Samsung Galaxy A51',
      description: 'Samsung Galaxy A51',
      image: 'S_Galaxy_A51.jpg',
      price: '400',
      category: 'samsung',
      isFavorite: false,
    },
    {
      id: 9,
      title: 'Xiaomi Redmi Note 8T',
      description: 'Xiaomi Redmi Note 8T',
      image: 'X_Redmi_Note_8T.jpg',
      price: '200',
      category: 'xiaomi',
      isFavorite: true,
    },
    {
      id: 10,
      title: 'Xiaomi Redmi 7A',
      description: 'Xiaomi Redmi 7A',
      image: 'X_Redmi_7A.jpg',
      price: '100',
      category: 'xiaomi',
      isFavorite: false,
    },
  ],
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