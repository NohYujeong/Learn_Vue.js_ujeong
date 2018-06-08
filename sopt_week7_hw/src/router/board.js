import WriteBoard from '@/pages/WriteBoard'
import DetailBoard from '@/pages/DetailBoard'
import {writeBoardGuard} from './authGuard'
import { store } from '../store/store'


export const WriteBoardRoutes = {
    path: '/board/new',
    name: 'WriteBoard',
    component: WriteBoard,
    beforeEnter: writeBoardGuard
}

export const detailBoardRoutes = {
    path: '/board/:board_id',
    name: 'detailBoard',
    component: DetailBoard
}