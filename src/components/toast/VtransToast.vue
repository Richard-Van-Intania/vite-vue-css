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
  <div></div>
</template>

<style scoped></style>
