<script setup lang="ts">
import { ref } from "vue";
import { Icon } from "@iconify/vue";
const show = ref<boolean>(false);

function open(): void {
  show.value = true;
}

function close(): void {
  show.value = false;
}
</script>

<template>
  <div id="btn">
    <button type="button" class="cursor-pointer my-4 mx-6" v-on:click="close()"><Icon icon="ri:menu-line" style="color: black; font-size: 32px" /></button>
  </div>
  <div id="overlay" class="fixed inset-0 size-auto max-h-none max-w-none bg-blk-op-40 z-20"><div class=""></div></div>
</template>

<style scoped></style>
