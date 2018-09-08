<template>
  <v-carousel hide-delimiters class="carousel__wrapper"> 
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: 'Home',
  props: {},
  data () {
    return {
      items: [
        {
          src: 'http://cdn.shopify.com/s/files/1/2642/6748/products/gloomhaven_1200x1200.jpg?v=1516375297'
        },
        {
          src: 'https://geekandsundry.com/wp-content/uploads/2016/07/scythe.jpg'
        },
        {
          src: 'http://www.nonsensicalgamers.com/wp-content/uploads/2014/07/8F9A3676.jpg'
        }
      ]
    }
  }
}
</script>

<style scoped>
.carousel__wrapper {
  height: 90vh;
}
</style>
