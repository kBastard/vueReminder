<template>
    <div class="flex flex-wrap w-full">
        <div v-for="(slide, index) in slides"
             class="w-full absolute"
             :key="slide"
        >
            <transition name="fade">
            <div :class="slide"
                 style="height: 350px"
                 v-if="currentSlide === index"
            >
            </div>
            </transition>
        </div>
        <div class="w-full" style="height: 340px">
            <div class="absolute w-full flex justify-center">
                <div v-for="(item, index) in slides" :key="item"
                     :class="currentSlide === index ? 'bg-gray-700' : 'bg-gray-300'"
                     class="w-4 h-4 rounded-full mx-2 cursor-pointer"
                     @click="setSlide(index)"
                ></div>
            </div>
        </div>
        <!--<div class="my-10 flex w-full">-->
            <!--<div class="m-auto">-->
                <!--<transition name="fade">-->
                    <!--<h1 v-if="isShowing">Slider</h1>-->
                <!--</transition>-->
                <!--<button @click="isShowing = !isShowing" class="px-2 rounded border">toggle</button>-->
            <!--</div>-->
        <!--</div>-->
    </div>

</template>

<script>
  export default {
    name: "Slider",
    data() {
      return {
        currentSlide: 0,
        interval: '',
        slides: [
          'bg-blue-600',
          'bg-teal-600',
          'bg-red-600'
        ],
        isShowing: true
      }
    },
    methods: {
      setSlide(index) {
        this.currentSlide = index
      }
    },
    mounted() {
      this.interval = setInterval(() => {
        this.currentSlide = this.currentSlide === 2 ? 0 : this.currentSlide + 1;
      }, 1000);
    },
    beforeUnmount() {
      clearInterval(this.interval);
    }
  }
</script>

<style scoped>
    .fade-enter-active, .fade-leave-active {
        transition: all 1s ease;
    }

    .fade-enter-from {
        opacity: 0;
        transform: translateX(-100%);
    }

    .fade-leave-to {
        opacity: 0;
        transform: translateX(100%);
    }
</style>
