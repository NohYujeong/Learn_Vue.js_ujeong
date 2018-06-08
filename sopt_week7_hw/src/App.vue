<template>
  <v-app>
    <v-toolbar>
      <v-toolbar-title>SOPT 게시판</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat v-if="this.$store.state.user.user_idx!=null">
          {{this.$store.state.user.user_id}}님, 환영합니다!
        </v-btn>
        <v-btn flat v-if="this.$store.state.user.user_idx!=null" :item="logoutItem" router :to="logoutItem.link">
          <v-icon left>{{logoutItem.icon}}</v-icon>
          {{logoutItem.title}}
        </v-btn>
        <v-btn flat v-else :item="loginItem" router :to="loginItem.link">
          <v-icon left>{{loginItem.icon}}</v-icon>
          {{loginItem.title}}
        </v-btn>
        <v-btn flat v-for="item in toolbarItems" :key="item.title" router :to="item.link">
          <v-icon left>{{item.icon}}</v-icon>
          {{item.title}}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <router-view/>
  </v-app>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'App',
  data (){
    return {
      toolbarItems : [
        { icon: 'list', title: '글 리스트', link: '/' },
        { icon: 'create', title: '글 작성', link: '/board/new' },
        { icon: 'face', title: '회원가입', link: '/signUp' }
        ],
      logoutItem : {icon: 'backspace', title: '로그아웃', link:'/signOut'},
      loginItem : { icon: 'lock_open', title: '로그인', link: '/signIn' }
    }
  },
  computed: {
        ...mapGetters ({
            user: 'signInUser'
        })
    }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
