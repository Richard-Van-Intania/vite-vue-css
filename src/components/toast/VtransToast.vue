<script setup lang="ts">
import { ref } from "vue";
import { Icon } from "@iconify/vue";

const openToast = ref<boolean>(false);

function open(): void {
  openToast.value = true;
}

function close(): void {
  openToast.value = false;
}
</script>

<template>
  <div>
    <button title="opn-btn" type="button" class="fixed bottom-0 right-0 m-10 z-10 bg-blue-500 px-8 py-4 rounded-full text-white font-medium text-2xl cursor-pointer shadow-lg" v-on:click="open()">Show Toast</button>
    <Transition>
      <div v-if="openToast" title="toast" class="fixed top-0 right-0 m-5 flex justify-between items-center bg-blue-500 rounded-xl w-[480px] py-4 px-5">
        <div class="text-white font-medium text-xl">Hello, world! This is a toast message.</div>
        <button type="button" class="cursor-pointer" v-on:click="close()"><Icon icon="ri:close-line" style="color: white; font-size: 32px" /></button>
      </div>
    </Transition>
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
  transform: translateX(0%);
}
.v-leave-to {
  opacity: 0;
  transform: translateX(120%);
}
.v-enter-active {
  transition: opacity 0.5s;
}
.v-leave-active {
  transition: opacity 0.5s, transform 1s;
}
</style>
