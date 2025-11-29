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
  <div>
    <button type="button" class="cursor-pointer my-4 mx-6" v-on:click="close()"><Icon icon="ri:menu-line" style="color: black; font-size: 32px" /></button>
  </div>
</template>

<style scoped></style>
