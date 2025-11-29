<script setup lang="ts">
import { v4 as uuidv4 } from "uuid";
import { ref } from "vue";
import { Icon } from "@iconify/vue";

interface Snackbar {
  id: string;
  message: string;
  leaving: boolean;
  leavingTime: Date | null;
}

const msg = ref<string>("");
const toastList = ref<Snackbar[]>([]);

function addSnackbar(params: Snackbar) {
  toastList.value.push(params);
  msg.value = "";
}

function markLeave(id: string) {
  for (const element of toastList.value) {
    if (element.id === id) {
      element.leaving = true;
      element.leavingTime = new Date();
    }
  }
}
</script>

<template>
  <div><input type="text" v-model="msg" class="bg-amber-100" /><button type="button" v-on:click="addSnackbar({ id: uuidv4(), message: msg, leaving: false, leavingTime: null })">Add Snackbar</button></div>
  <div class="fixed top-6 right-6 z-10 flex flex-col gap-1">
    <div v-for="(toastMessage, index) in toastList" v-bind:key="index" class="flex items-center bg-blue-500 w-[480px] py-4 px-6 rounded-xl toast" v-bind:class="toastMessage.leaving ? 'toast-hide' : 'toast-show'">
      <div class="text-lg font-medium text-white flex-1">{{ toastMessage.message }}</div>
      <div class="cursor-pointer" v-on:click="markLeave(toastMessage.id)"><Icon icon="ri:close-line" style="color: #93c5fd; font-size: 24px" /></div>
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
