<template>
  <v-container
    fluid
    fill-height
    grid-list-xl
  >
    <v-alert
      type="success"
      class="alerts ma-0"
      v-model="alert"
      dismissible
      transition="slide-x-transition"
    >
      Товар успешно добавлен!
    </v-alert>
    <v-layout
      wrap
    > 
      <template v-for="(item, index) in filteredList" >
        <productCard
          :key="index"
          :id="item.id"
          :title="item.title"
          :description="item.description"
          :image="item.image"
          :price="item.price"
          :isFavorite="item.isFavorite"
          @change="favorite(item.id)"
          @buy="buyItem(item)"
        />
      </template>
    </v-layout>
  </v-container>
</template>
<script>
import productCard from '~/components/productCard';

export default {
  components: {
    productCard
  }, 
  data: () => ({
    filter: null,
    alert: false,
  }),
  computed: {
    // Получение списка продуктов из store
    list() {
      return this.$store.getters['products/list']
    },
    // Фильтрация списка товаров исходя из выбранных категорий
    filteredList() {
      let list = this.list.map(i =>({...i})),
          filteredList = [] 

      for (const filter in this.filtration) {
        list.forEach(product => {
          if(product.category === filter && this.filtration[filter]) {
            filteredList.push(product)
          }
        })
      }


      // В ТЗ написано, что должны показываться только избранные товары. Поэтому я показываю все избранные, вне зависимости от выбранных категорий
      if(this.filtration.isFavorite ) {
        return list.filter(i => i.isFavorite)
      }
      
      else{
        return filteredList.length > 0 ? filteredList : list
      }
    },
    // Получение фильтрации из store
    filtration() {
      return this.$store.getters['filtration/list']
    }
  },
  methods: {
    // Добавление товара в избранное
    favorite(id) {
      let list = this.list.map(i =>({...i})),
          item = list[id - 1]

      item.isFavorite = !item.isFavorite

      this.$store.dispatch('products/setList', list)
    },
    // Добавление товара в корзину
    buyItem(item) {
      if(this.$store.dispatch('cart/addItem', item)) {
        this.showAlert()
      }
    },
    // Отображение "Товар добавлен в корзину"
    showAlert() {
      if(this.alert) {
        this.alert = false
        setTimeout(() => {
          this.alert = true
        }, 500)
        setTimeout(() => {
          this.alert = false
        }, 1500)
      }
      else {
        this.alert = true
        setTimeout(() => {
          this.alert = false
        }, 1500)
      }
        
      
    }
  },
}
</script>
<style lang="sass">
  .alerts
    position: fixed
    bottom: 0
    width: 100%
    z-index: 1000
    right: 0
</style>