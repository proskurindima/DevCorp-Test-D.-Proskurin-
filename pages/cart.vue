<template>
  <v-container
    fluid
    fill-height
    grid-list-xl
    align-start
  >
    <v-card
      width="100%"
    >
      <v-card-title class="title">Корзина</v-card-title>
      <v-divider></v-divider>
      <v-card-text>
          <v-data-table
            :headers="tableHeaders"
            :items="tableList ? tableList : []"
            no-data-text="Нет товаров"
            hide-actions
            disable-initial-sort
            must-sort
          >
            <template v-slot:items="props">
              <tr>
                <td class="text-xs-center">{{ props.item.title }}</td>
                <td class="text-xs-center">
                  <v-btn @click="removeCount(props.item)" class="title" icon>-</v-btn>
                  {{ props.item.count }}
                  <v-btn @click="addCount(props.item)" class="title" icon>+</v-btn>
                  </td>
                <td class="text-xs-center">{{ props.item.price * props.item.count}} $</td>
              </tr>
            </template>
          </v-data-table>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <span class="title ml-3">Всего: {{ totalPrice }} $</span>
        <v-spacer></v-spacer>
        <v-btn color="primary">Заказать</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    // Заголовки таблицы
    tableHeaders: [
      {
        text: 'Название продукта',
        value: '',
        align: 'center',
        sortable: false,
      },
      {
        text: 'Количество',
        value: '',
        align: 'center',
        sortable: false,
      },
      {
        text: 'Цена',
        value: '',
        align: 'center',
        sortable: false,
      },
    ]
  }),
  computed: {
    // Получение списка товаров в корзине
    tableList() {
      let list = this.$store.getters['cart/list'].map(i => ({...i}))
      return list
    },
    // Расчёт общей стоимости заказа
    totalPrice() {
      return this.tableList.reduce((r,i) => Number(r) + i.price * i.count, 0)
    }
  },
  
  methods: {
    // Увеличение кол-ва товара
    addCount(i) {
      i.count ++
      this.$store.commit('cart/setList', this.tableList)
    },
    // Уменьшение кол-ва товара
    removeCount(i) {
      if(i.count == 1) {
        if(!confirm(`Вы действительно хотите удалить ${i.title} из корзины?`)) {
          return
        }
        let list = this.tableList,
            index = list.indexOf(list.find(item => item.id == i.id))
        list.splice(index, 1)
        this.$store.commit('cart/setList', list)
      }
      else {
        i.count --
        this.$store.commit('cart/setList', this.tableList)
      }
      
    }
  },
}
</script>