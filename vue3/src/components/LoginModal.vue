<template>
    <div v-if="isLoginOpen">
    <section @click="close"
             class="z-20 h-screen w-screen bg-gray-500 top-0 fixed opacity-50"></section>
    <div class="absolute inset-0">
        <div class="flex h-full">
            <div class="z-30 m-auto p-2 bg-white rounded shadow">
                <h1 class="text-xl m-auto text-center">login</h1>
                <form class="p-2 my-2" action="submit" @submit.prevent="submitForm">
                    <div class="my-4">
                        <label>Username</label>
                        <input type="text"
                               name=""
                               ref="emailRef"
                               class="rounded shadow p-2 w-full"
                               v-model="form.email"
                        >
                    </div>
                    <div class="my-4">
                        <label>Password</label>
                        <input type="password"
                               name=""
                               class="rounded shadow p-2 w-full"
                               v-model="form.password"
                        >
                    </div>
                    <div class="my-4">
                        <button class="w-full rounded shadow-md bg-red-500"
                                type="submit">
                            <span v-if="isLoading !== true">Login</span>
                            <span v-else>LOOOOOADING</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>

    </div>
    </div>
</template>

<script>
  import firebase from '../utilities/firebase'
  export default {
    name: "LoginModal",
    methods: {
      submitForm() {
        this.isLoading = true;
        firebase.auth().signInWithEmailAndPassword(this.form.email, this.form.password).then(res => {
          console.log(res);
          this.$store.commit('setIsLoggedIn', true);
          this.isLoading = false;
          this.close();
        }).catch( e => {
          console.log(e);
          this.isLoading = false;
        });
      },
      close() {
        this.$store.commit('setLoginModal', false);
      }
    },
    mounted() {
        this.$refs.emailRef.focus();
    },
    data() {
      return {
        form: {
          email: '',
          password: ''
        },
        isLoading: false,
      }
    },
    computed: {
      isLoginOpen() {
        return this.$store.state.isLoginOpen
      }
    }
  }
</script>

<style scoped>

</style>
