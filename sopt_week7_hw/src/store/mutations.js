export const boardMutations = {
    allBoards (state) {
        console.log('all boards start')
    },
    allBoardsSuccess (state, payload) {
        console.log('all boards success')
        state.boards = payload.data
    },
    signUpSuccess (state) {
        console.log('SignUpFinish')
    },
    signUpFail (state) {
        console.log('SignUpFail')
    },
    signInSuccess (state, payload) {
        console.log('SignInFinish')
        window.localStorage.setItem('user_idx',payload.user_idx)
        window.localStorage.setItem('user_id',payload.user_id)
        state.user = {user_idx:window.localStorage.getItem('user_idx'), user_id:window.localStorage.getItem('user_id')}
    },
    writeBoardSuccess (state) {
        console.log('write board success')
        location.reload()
    },
    detailBoardSuccess (state, payload) {
        const detail_board = state.boards.filter(function(b){return b.board_idx == payload})
        window.localStorage.setItem('detail_board', JSON.stringify(detail_board))
        state.board = JSON.parse(window.localStorage.getItem('detail_board'))[0]
    }
}