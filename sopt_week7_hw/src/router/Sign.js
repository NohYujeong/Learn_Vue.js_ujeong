import SignUp from '@/pages/SignUp'
import SignIn from '@/pages/SignIn'
import { signGuard, signOutGuard } from './authGuard'

export const SignUpRoutes = {
    path: '/SignUp',
    name: 'SignUp',
    component: SignUp,
    beforeEnter: signGuard
}

export const SignInRoutes = {
    path: '/SignIn',
    name: 'SignIn',
    component: SignIn
}

export const SignOutRoutes = {
    path: '/SignOut',
    name: 'SignOut',
    beforeEnter: signOutGuard
    
}