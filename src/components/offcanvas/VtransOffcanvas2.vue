<script setup lang="ts">
import { ref } from "vue";

const openOffcanvas = ref<boolean>(false);

function open(): void {
  openOffcanvas.value = true;
}

function close(): void {
  openOffcanvas.value = false;
}

function dismiss(event: PointerEvent): void {
  if (event.target === event.currentTarget) {
    close();
  }
}
</script>

<template>
  <div>
    <button title="opn-btn" type="button" class="fixed bottom-0 right-0 m-10 z-10 bg-blue-500 px-8 py-4 rounded-full text-white font-medium text-2xl cursor-pointer shadow-lg" v-on:click="open()">Show Offcanvas</button>
    <Transition> <div title="overlay" v-if="openOffcanvas" class="fixed inset-0 bg-blk-op-40 z-20" v-on:click="(event: PointerEvent) => dismiss(event)"></div></Transition>
  </div>
</template>

<style scoped>
.v-enter-from {
  opacity: 0;
}
.v-enter-to {
  opacity: 1;
}
.v-leave-from {
  opacity: 1;
}
.v-leave-to {
  opacity: 0;
}

.v-enter-active {
  transition: opacity 2s ease;
}
.v-leave-active {
  transition: opacity 2s ease;
}
</style>
