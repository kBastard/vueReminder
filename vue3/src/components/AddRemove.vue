<template>
    <div class="m-auto">
        <h1 class="text-center text-2xl">DC Heroes {{ totalLength }} </h1>
        <ul>
            <li class="flex justify-between" v-for="(hero, index) in dcHeroes" :key="hero.name">
                {{hero.name}}
                <button v-on:click="remove(index)">x</button>
            </li>
        </ul>
        <form class="mt-10" @submit.prevent="addHero">
            <input class="border rounded" type="text" v-model="newHero">
            <button
                    class="border ml-5 p-1 rounded-lg bg-gradient-to-r from-red-700 to-pink-500"
                    type="submit">Submit</button>
        </form>
    </div>
</template>

<script>
  export default {
    name: "AddRemove",
    data() {
      return {
        newHero: '',
        title: 'test',
        dcHeroes: [
          {name: 'BlaBla'},
          {name: 'BlaBla1'},
          {name: 'BlaBla2'},
          {name: 'BlaBla3'},
        ]
      }
    },
    methods: {
      addHero() {
        if (this.newHero !== '') {
          this.dcHeroes.unshift({name: this.newHero});
          this.newHero = "";
        }
      },
      remove(index) {
        this.dcHeroes = this.dcHeroes.filter((hero, i) => i !== index);
      }
    },
    computed: {
      totalLength() {
        return this.dcHeroes.length;
      }
    }
  }
</script>

<style scoped>

</style>
