<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { onMounted, ref } from "vue";
import type { Toast } from "../../utilities";

const props = defineProps<{
  toast: Toast;
}>();
const emit = defineEmits(["leaving", "gone"]);

onMounted(() => {
  setTimeout(() => {
    emit("leaving", props.toast.id);
    leavin.value = true;
  }, 5000);
});

onMounted(() => {
  setTimeout(() => {
    emit("gone", props.toast.id);
  }, 7000);
});

function dismiss() {
  emit("leaving"), props.toast.id;
  leavin.value = true;
  setTimeout(() => {
    emit("gone", props.toast.id);
  }, 2000);
}

const leavin = ref<boolean>(false);
</script>

<template>
  <div>
    <div class="flex items-center bg-blue-500 w-[480px] py-4 px-6 rounded-xl toast" v-bind:class="leavin ? 'toast-hide' : 'toast-show'">
      <div class="text-lg font-medium text-white flex-1">{{ props.toast.message }}</div>
      <button type="button" class="cursor-pointer" v-on:click="dismiss"><Icon icon="ri:close-line" style="color: #93c5fd; font-size: 24px" /></button>
    </div>
  </div>
</template>

<style scoped>
.toast.toast-show {
  animation: fadein 1s ease-in forwards;
}

.toast.toast-hide {
  animation: fadeout 1s ease-out forwards;
}

@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeout {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
