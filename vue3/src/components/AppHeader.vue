<template>
    <nav class="w-full bg-gradient-to-r from-blue-800 to-blue-600 text-white px-4 py-2">
        <router-link
                v-for="item in list"
                :to="item.path"
                :key="item.title"
                class="mx-2"
        >{{item
            .title}}</router-link>

        <button v-if="!isLoggedIn" class="mx-2" @click="$emit('open-login-modal')">Login</button>
        <button v-else class="mx-2" @click="logout">Logout</button>
    </nav>
</template>

<script>
  import firebase from '../utilities/firebase'
  export default {
    name: "AppHeader",
    props: ['isLoggedIn'],
    data() {
      return {
        list: [
          {title:'AddRemove', path: '/addRemove'},
          {title:'Calendar', path: '/calendar'},
          {title:'Markdown', path: '/markdown'},
          {title:'Slider', path: '/slider'},
        ]
      }
    },
    methods: {
      logout() {
        firebase.auth().signOut()
          // .then(res => {}).catch(e => {})
      }
    }
  }
</script>

<style scoped>
</style>
