<template>
  <v-navigation-drawer
    v-model="hideMenu"
    disable-route-watcher
    clipped
    fixed
    app
  >
    <template
      v-if="isCart"
    >
      <v-card
        height="100%" 
        flat 
      >
      <v-list>
        <v-list-tile router to="/">
          <v-list-tile-action>
              <v-icon>dashboard</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
               Главная
              </v-list-tile-title>
            </v-list-tile-content>
        </v-list-tile>
      </v-list>
      </v-card>
    </template>
    <template
      v-else
    >
      <v-card
        height="100%"   
      >
        <v-card-title class="title">
          Фильтрация
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <v-checkbox 
            v-model="filtration.apple"
            label="Смартфоны Apple"
            color="primary"
          />
          <v-checkbox 
            v-model="filtration.samsung"
            label="Смартфоны Samsung"
            color="primary"
          />
          <v-checkbox 
            v-model="filtration.xiaomi"
            label="Смартфоны Xiaomi"
            color="primary"
          />
          <v-checkbox 
            v-model="filtration.isFavorite"
            label="Избранное"
            color="primary"
          />
        </v-card-text>
        <v-list>
          <v-list-tile router to="/cart">
            <v-list-tile-action>
              <v-icon>shopping_basket</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
              Корзина
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-card>
    </template>
    
    
  </v-navigation-drawer>
  
</template>

<script>
export default {
  data: () => ({
    filtration: {
      apple: false,
      samsung: false,
      xiaomi: false,
      isFavorite: false
    },
    hideMenu: true,
    isCart: false
  }),
  
  created() {
    // Определение, находимся ли мы на странице корзины
    if(this.$route.path === '/cart') {
      return this.isCart = true
    }
    else {
      this.isCart = false
    }
  },
  watch: {
    // Добавление новых данных фильтрации в стор
    filtration: {
      handler(value) {
        this.$store.commit('filtration/_setList', {...this.filtration})
      },
      deep: true
    },
    // Определение, находимся ли мы на странице корзины
    '$route.path'(value) {
      if(value === '/cart') {
        this.isCart = true
      }
      else {
        this.isCart = false
      }
    },
  },
}
</script>