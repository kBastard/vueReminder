<template>
    <section @click="close"
            class="z-20 h-screen w-screen bg-gray-500 top-0 left-0 fixed opacity-50"></section>
    <div class="absolute inset-0">
        <div class="flex h-full">
            <div class="z-30 m-auto p-2 bg-white rounded shadow">
                <div class="p-2 border">
                    <h1 class="text-2xl">
                        <slot name="title"></slot>
                    </h1>
                    <main>
                        <slot name="body"></slot>
                    </main>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
  export default {
    name: "Modal",
    setup(_, { emit }) {
      function close() {
        emit('close');
      }

      return {close}
    }
  }
</script>

<style scoped>

</style>
