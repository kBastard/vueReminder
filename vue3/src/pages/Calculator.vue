<template>
    <section class="w-full flex">
        <div class="m-auto">
            <h1 class="py-2 text-2xl text-center">Calculator</h1>
            <p class="text-3xl text-right mt-4">{{currentNumber}}</p>
            <div class="my-10 grid grid-cols-4 gap-1">
                <button @click="pressed('1')" class="p-2 border rounded shadow">1</button>
                <button @click="pressed('2')" class="p-2 border rounded shadow">2</button>
                <button @click="pressed('3')" class="p-2 border rounded shadow">3</button>
                <button @click="pressed('+')" class="p-2 border rounded shadow">+</button>
                <button @click="pressed('4')" class="p-2 border rounded shadow">4</button>
                <button @click="pressed('5')" class="p-2 border rounded shadow">5</button>
                <button @click="pressed('6')" class="p-2 border rounded shadow">6</button>
                <button @click="pressed('-')" class="p-2 border rounded shadow">-</button>
                <button @click="pressed('7')" class="p-2 border rounded shadow">7</button>
                <button @click="pressed('8')" class="p-2 border rounded shadow">8</button>
                <button @click="pressed('9')" class="p-2 border rounded shadow">9</button>
                <button @click="pressed('*')" class="p-2 border rounded shadow">*</button>
                <button @click="pressed('0')" class="p-2 border rounded shadow">0</button>
                <button @click="pressed('c')" class="p-2 border rounded shadow">C</button>
                <button @click="pressed('=')" class="p-2 border rounded shadow">=</button>
                <button @click="pressed('/')" class="p-2 border rounded shadow">/</button>

            </div>
        </div>

    </section>
</template>

<script>
    import {ref} from 'vue';
    import useWindowEvent from "../utilities/composition/useWindowEvent"
  export default {
    name: "Calculator",
    setup() {
      const operations = ['+','-','*','/'];
      const numbers = ['1','2','3','4','5','6','7','8','9','0'];
      const currentNumber = ref('');
      const operation = ref('');
      const prevNumber = ref('');

      function pressed(value) {
        if (value === '=' || value === 'Enter') calculate();
        else if (value === 'c') clear();
        else if (operations.includes(value)) applyOperation(value);
        else if (numbers.includes(value)) appendNumber(value);
      }

      function appendNumber(value) {
        currentNumber.value = currentNumber.value + value;
      }

      function applyOperation(value) {
        calculate();
        prevNumber.value = currentNumber.value;
        currentNumber.value = '';
        operation.value = value;
      }

      function calculate() {
        if (operation.value === '*')
        currentNumber.value = prevNumber.value * currentNumber.value
        else if (operation.value === '/')
          currentNumber.value = prevNumber.value / currentNumber.value
        else if (operation.value === '-')
          currentNumber.value = prevNumber.value - currentNumber.value
        else if (operation.value === '+')
          currentNumber.value = +prevNumber.value + +currentNumber.value

        prevNumber.value = '';
      }

      function clear() {
        currentNumber.value = '';
      }

      const handleKeydown = (e) => pressed(e.key);
      useWindowEvent("keydown", handleKeydown);

      return { pressed, clear, currentNumber, operation, prevNumber };
    }
  }
</script>

<style scoped>

</style>
