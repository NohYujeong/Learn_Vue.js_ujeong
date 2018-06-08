import { store } from '../store/store'

export const writeBoardGuard = (to, from, next) => {
    if(store.state.user) {
        next()
    } else {
        next('/')
    }
}

export const signGuard = (to, from, next) => {
    if(store.state.user) {
        next('/')
    } else {
        next()
    }
}

export const signOutGuard = (to, from, next) => {
    if(window.localStorage.getItem('user_idx') && window.localStorage.getItem('user_id')){
        window.localStorage.removeItem('user_idx')
        window.localStorage.removeItem('user_id')
        location.reload()
        next('/')
    } else {
        next('/')
    }
}