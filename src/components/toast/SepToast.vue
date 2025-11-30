<script setup lang="ts">
import { v4 as uuidv4 } from "uuid";
import { computed, ref } from "vue";
import type { Toast } from "../../utilities";
import ToastItem from "./ToastItem.vue";

const toastList = ref<Toast[]>([]);
const msg = ref<string>("");

function addSnackbar(params: Toast) {
  toastList.value.push(params);
  msg.value = "";
}

function markLeave(id: string) {
  for (const element of toastList.value) {
    if (element.id === id) {
      element.leaving = true;
    }
  }
}

function markGone(id: string) {
  for (const element of toastList.value) {
    if (element.id === id) {
      element.gone = true;
    }
  }
}

const list = computed(() => {
  return toastList.value.filter((element) => !element.gone);
});
</script>

<template>
  <div>
    <div><input type="text" v-model="msg" class="bg-amber-100" /><button type="button" v-on:click="addSnackbar({ id: uuidv4(), message: msg, leaving: false, gone: false })">Add Snackbar</button></div>
    <div class="fixed top-6 right-6 z-10 flex flex-col gap-1">
      <ToastItem v-for="(element, index) in list" v-bind:key="index" v-bind:toast="element" v-on:leaving="(id) => markLeave(id)" v-on:gone="(id) => markGone(id)" />
    </div>
  </div>
</template>

<style scoped></style>
