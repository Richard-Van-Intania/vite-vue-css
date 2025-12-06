<script setup lang="ts">
import { onMounted } from "vue";
import { Icon } from "@iconify/vue";

const props = defineProps({
  label: { type: String, required: true },
});

const emit = defineEmits(["closed"]);

onMounted(() => {
  setTimeout(() => {
    emit("closed");
  }, 5000);
});
</script>

<template>
  <div title="toast" class="flex justify-between items-center bg-blue-500 rounded-xl w-[480px] py-4 px-5">
    <div class="text-white font-medium text-xl">Hello, world! This is a toast message.</div>
    <button type="button" class="cursor-pointer" v-on:click="emit('closed')"><Icon icon="ri:close-line" style="color: white; font-size: 32px" /></button>
  </div>
</template>

<style scoped></style>
