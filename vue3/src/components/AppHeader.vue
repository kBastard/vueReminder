<template>
    <nav class="w-full bg-gradient-to-r from-blue-800 to-blue-600 text-white px-4 py-2">
        <router-link
                v-for="item in list"
                :to="item.path"
                :key="item.title"
                class="mx-2"
        >{{item
            .title}}</router-link>
    </nav>
</template>

<script>
  export default {
    name: "AppHeader",
    data() {
      return {
        list: [
          {title:'AddRemove', path: '/addRemove'},
          {title:'Calendar', path: '/calendar'},
          {title:'Markdown', path: '/markdown'},
          {title:'Slider', path: '/slider'},
        ]
      }
    }
  }
</script>

<style scoped>
</style>
