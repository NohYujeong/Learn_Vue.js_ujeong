import Vue from 'vue'
import Vuex from 'vuex'
import {productGetters} from './getters.js'
import {productMutations} from './mutations.js'
import {productActions} from './actions.js'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    products: []
  },
  getters: Object.assign({}, productGetters),
  mutations: Object.assign({}, productMutations),
  actions: Object.assign({}, productActions)
})
