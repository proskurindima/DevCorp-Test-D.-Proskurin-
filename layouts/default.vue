<template>
  <v-app>
    <sidebar/>
    <v-toolbar
      color="primary"
      dark
      clipped-left
      fixed
      app
      dense
    >
      <v-toolbar-title>DevCorp Test Task</v-toolbar-title>
      <v-spacer></v-spacer>
      <nuxt-link to="/cart" class="mr-2 cart_icon">
        <v-icon>shopping_basket</v-icon>
        <span class="cart_length">{{ cartLength }}</span>
      </nuxt-link>
    </v-toolbar>
    <v-content>
      <v-container
        fluid
        pa-0
        class="content_wrapper"
      >
        <nuxt/>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>


export default {
  components: {
    sidebar: () => import('~/components/sidebar'),
  },
  computed: {
    // Получение кол-ва товаров в корзине
    cartLength() {
      let list = this.$store.getters['cart/list']
      return list.length
    }
  },

}
</script>
<style lang="sass">
  .cart_icon
    position: relative
    .cart_length
      display: block
      position: absolute
      right: -10px
      top: -8px
      width: 20px
      height: 20px
      border-radius: 20px
      text-align: center
      background-color: #fb8c00
      font-weight: 600
      color: #000
    
</style>