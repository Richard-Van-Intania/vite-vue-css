<script setup lang="ts">
import { ref, watch } from "vue";
import { monthNames } from "../../utilities";

const show = ref<boolean>(false);
const month = ref<string>(monthNames[0] ?? "January");

function open(): void {
  show.value = true;
}

function close(): void {
  show.value = false;
}

function select(value: string): void {
  month.value = value;
  close();
}

function dismiss(event: any): void {
  if (event.target.matches(".outside")) {
    close();
  }
}

watch(month, (newMonth, oldMonth) => {
  console.log(`month has changed from ${oldMonth} to ${newMonth}`);
});
</script>

<template>
  <div class="fixed w-full h-full outside" v-on:click="(event) => dismiss(event)">
    <div class="flex justify-center items-center mt-4 outside">
      <div class="relative">
        <button type="button" class="hover:bg-blue-600 py-4 w-72 rounded-xl text-white font-medium text-2xl cursor-pointer" v-bind:class="[show ? 'bg-blue-600' : 'bg-blue-500']" v-on:click="open()">Dropdown</button>
        <div class="absolute left-0 top-18 z-10 py-4 rounded-xl bg-gray-100" v-bind:class="[show ? 'block' : 'hidden']">
          <div v-for="(item, index) in monthNames" v-bind:key="index" class="px-8 py-1 font-medium text-lg cursor-pointer hover:bg-gray-200" v-on:click="select(item)">{{ item }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
