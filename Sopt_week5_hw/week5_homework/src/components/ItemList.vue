<template>
    <div>
        <div class="items">
            <div class="container">
                <template v-for="item in products">
                    <item :key="item.id" :product="item"></item>
                </template>
            </div>
        </div>
    </div>
</template>
<script>

import Item from './Item'
export default {
  name : 'item-list',
  data() {
      return {
    }
  },
  computed: {
    products () {
      return this.$store.getters.allProducts
    }
  },
  components: {
    'item' : Item
  },
  created () {
    if (this.products.length === 0) {
      this.$store.dispatch('getAllProducts')
    }
  }
}
</script>

<style>
.card {
    width:45vw;
    text-align: center;
}
.card-img-top {
    width:18vw;
    margin:auto;
}
.price-text {
    color:#494949;
}
</style>
