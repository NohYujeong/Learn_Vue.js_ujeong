import Vue from 'vue'
import Router from 'vue-router'
import HomeRoutes from './home'
import { SignUpRoutes,SignInRoutes,SignOutRoutes } from './Sign'
import { WriteBoardRoutes, detailBoardRoutes } from './board'

Vue.use(Router)

export default new Router({
  routes: [
    HomeRoutes, SignUpRoutes, SignInRoutes, WriteBoardRoutes,SignOutRoutes, detailBoardRoutes
  ],
  mode: 'history'
})
