export const productMutations = {

  allProduct (state) {
    console.log('this.allProduct test')
  },
  allProductSuccess (state, payload) {
    console.log('this.allProduct mutation test')
    state.products = payload.data
  }
}
