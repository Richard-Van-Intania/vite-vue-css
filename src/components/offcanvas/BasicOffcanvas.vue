<script setup lang="ts">
import { ref } from "vue";
const show = ref<boolean>(false);
</script>

<template>
  <div class="fixed right-0 bottom-0 size-auto max-h-none max-w-none">
    <button type="button" class="bg-blue-500 px-8 py-4 rounded-full text-white font-medium text-2xl cursor-pointer shadow-lg m-10 z-10" v-on:click="show = !show">Show Offcanvas</button>
  </div>
  <div></div>
</template>

<style scoped></style>
