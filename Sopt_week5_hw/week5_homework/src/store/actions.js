import axios from 'axios'

export const productActions = {
  getAllProducts ({commit}) {
    commit('allProduct')
    axios.get('http://13.125.118.111:3009/board')
      .then(response => {
        commit('allProductSuccess', response.data.data)
      })
  }
}
