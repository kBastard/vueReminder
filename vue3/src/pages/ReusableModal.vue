<template>
    <section class="flex w-full">
        <div class="m-auto">
            <h1 class="text-2xl my5">Modal MODAL</h1>
            <Modal v-if="isModalOpen" @close="isModalOpen = false">
                <template v-slot:title>
                    Title test
                </template>
                <template v-slot:body>
                    bla bla bla
                </template>
            </Modal>
            <button @click="isModalOpen = true">Open Modal</button>
        </div>
    </section>
</template>

<script>
  import Modal from '../components/Modal'
  import {ref} from 'vue';

  export default {
    name: "ReusableModal",
    components: {Modal},
    setup() {
      const isModalOpen = ref(false);

      return {isModalOpen}
    }
  }
</script>

<style scoped>

</style>
