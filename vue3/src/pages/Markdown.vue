<template>
    <div class="flex w-full flex-wrap">
        <h1 class="w-full text-center text-3xl">Markdown</h1>
        <section class="flex m-auto w-10/12 h-screen">
            <article class="w-1/2 border">
                <textarea class="w-full h-full" :value="text" ></textarea>
            </article>
            <article class="w-1/2 border bg-gray-100" v-html="markedText">
            </article>
        </section>
    </div>
</template>

<script>
  import marked from 'marked';
  export default {
    name: "Markdown",
    data() {
      return {
        text: 'example'
      }
    },
    computed: {
      markedText() {
        return marked(this.text);
      }
    }
  }
</script>

<style scoped>

</style>
