<script setup lang="ts">
import { ref } from "vue";
import { Icon } from "@iconify/vue";

const show = ref(false);

function open() {
  show.value = true;
}

function close() {
  show.value = false;
}
</script>

<template>
  <div id="btn-open">
    <button class="cursor-pointer m-10" @click="open">
      <Icon icon="ri:notification-2-line" style="color: black; font-size: 32px" />
    </button>
  </div>
  <div></div>
</template>

<style scoped></style>
