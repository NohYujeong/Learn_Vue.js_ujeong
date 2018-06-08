export const boardGetters = {
    allBoards (state, getters) { 
        return state.boards
    },
    signInUser (state, getters) {
        return state.user
    },
    detailBoard (state, getters) { 
        return state.board
    }
}