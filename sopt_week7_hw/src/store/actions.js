import axios from 'axios'
import router from '../router/index'
import VueCookies from 'vue-cookies'

export const boardActions = {
    getAllBoards ({commit}) {
        commit('allBoards')
        axios.get('/api/board').then(response => {
            commit('allBoardsSuccess', response.data)
        })
    },
    signUp ({commit}, payload) {
        axios.post('/api/signup',payload).then(response => {
            commit('signUpSuccess')
        }).catch(error => {
            console.log(error)
            commit('signUpFail')
            router.push('/SignUp')
        })
    },
    signIn ({commit}, payload) {
        axios.post('/api/signin', payload).then(response => {
            const object = {'user_idx':response.data.user_idx, 'user_id':payload.user_id}
            commit('signInSuccess',object)
        })
    },
    writeBoard ({commit}, payload){
        axios.post('/api/board',payload).then(response => {
            commit('writeBoardSuccess')
        })
    },
    getDetailBoard ({commit}, payload) {
        const board_idx = payload
        commit('detailBoardSuccess', board_idx)
    }
}