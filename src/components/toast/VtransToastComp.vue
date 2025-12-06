<script setup lang="ts">
import { Icon } from "@iconify/vue";

const props = defineProps({
  label: { type: String, required: true },
  index: { type: Number, required: true },
});

const emit = defineEmits(["closed"]);
</script>

<template>
  <div title="toast" class="flex justify-between items-center bg-blue-500 rounded-xl w-[480px] py-4 px-5">
    <div class="text-white font-medium text-xl">{{ props.label }}</div>
    <button type="button" class="cursor-pointer" v-on:click="emit('closed', props.index)"><Icon icon="ri:close-line" style="color: white; font-size: 32px" /></button>
  </div>
</template>

<style scoped></style>
