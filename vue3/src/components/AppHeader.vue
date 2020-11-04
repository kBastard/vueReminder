<template>
    <nav class="w-full bg-gradient-to-r from-blue-800 to-blue-600 text-white px-4 py-2">
        <router-link
                v-for="item in list"
                :to="item.path"
                :key="item.title"
                class="mx-2"
        >{{item
            .title}}</router-link>

        <button v-if="!isLoggedIn" class="mx-2" @click="openLogin">Login
        </button>
        <button v-else class="mx-2" @click="logout">Logout</button>
    </nav>
</template>

<script>
  import firebase from '../utilities/firebase'
  export default {
    name: "AppHeader",
    data() {
      return {
        list: [
          {title:'AddRemove', path: '/addRemove'},
          {title:'Calendar', path: '/calendar'},
          {title:'Markdown', path: '/markdown'},
          {title:'Slider', path: '/slider'},
          {title:'Calculator', path: '/calculator'},
          {title:'Modal', path: '/modal'},
          {title:'Chat', path: '/chat'},
          {title:'CRUD', path: '/crud'},
          {title:'Tensor', path: '/tensor'},
        ]
      }
    },
    computed: {
      isLoggedIn() {
        console.log(this.$store.state.isLoggedIn);
        return this.$store.state.isLoggedIn
      }
    },
    methods: {
      logout() {
        this.$store.commit('setIsLoggedIn', false);
        this.$store.commit('setAuthUser', {});
        firebase.auth().signOut()
          // .then(res => {}).catch(e => {})
      },
      openLogin() {
        console.log('works');
        this.$store.commit('setLoginModal', true);
      }
    }
  }
</script>

<style scoped>
</style>
