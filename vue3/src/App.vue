<template>
    <AppHeader />
    <div class="w-full flex">
        <router-view></router-view>
    </div>
    <teleport to="body">
        <LoginModal />
    </teleport>
</template>

<script>
    import AppHeader from './components/AppHeader'
    import LoginModal from "./components/LoginModal";
    import firebase from "./utilities/firebase";
  export default {
    components: {
      LoginModal,
      AppHeader,
    },
    data() {
      return {
        isLoggedIn: false,
        authUser: {},
      }
    },
    methods: {
    },
    computed: {
    },
    mounted() {
      console.log('na4alo');
      firebase.auth().onAuthStateChanged(user => {
        if(user) {
          console.log(user);
          this.$store.commit('setIsLoggedIn', true);
          this.$store.commit('setAuthUser', user);
          this.isLoggedIn = true;
          this.authUser = user;
        } else {
          console.log('netu');
          this.isLoggedIn = false;
          this.authUser = {};
        }
    })
    }
  }
</script>
