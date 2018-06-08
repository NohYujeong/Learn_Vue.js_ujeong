import Vue from 'vue'
import Vuex from 'vuex'
import { boardGetters } from './getters.js'
import { boardMutations } from './mutations.js'
import { boardActions } from './actions.js'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    boards: [],
    user: {user_idx:window.localStorage.getItem('user_idx'), user_id:window.localStorage.getItem('user_id')},
    board: null
  },
  mutations: Object.assign({}, boardMutations),
  getters: Object.assign({}, boardGetters),
  actions: Object.assign({}, boardActions)

})