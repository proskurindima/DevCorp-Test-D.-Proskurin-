<template>
  <v-flex
    xs12
    sm6
    md3
  >
    <v-card>
      <v-card-title class="title">
        {{ title }} 
        <v-spacer/>
        <v-btn 
          v-if="isFavorite"
          title="Удалить из избранного" 
          @click="$emit('change')" 
          icon 
        >
          <v-icon color="#fb8c00">star</v-icon>
        </v-btn>
        <v-btn 
          v-else
          title="Добавить в избранное" 
          @click="$emit('change')" 
          icon
        >
          <v-icon>star_border</v-icon>
        </v-btn>
      </v-card-title>
      <v-divider/>
      <v-card-text>
        <v-img
          :src="image"
          height="300px"
          contain
        />
        <div class="subheading mt-3">
          {{ description }}
        </div>
      </v-card-text>
      <v-divider/>
      <v-spacer></v-spacer>
      <v-card-actions>
        <p class="price title ml-2">{{ price }} $</p>
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          @click="$emit('buy')" 
        >Купить</v-btn>
      </v-card-actions>
      <v-divider/>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  props: {
    id:           {type: Number, default: null},
    title:        {type: String, default: ''},
    image:        {type: String, default: ''},
    description:  {type: String, default: ''},
    price:        {type: String, default: ''},
    isFavorite:   {type: Boolean, default: false}
  },
}
</script>