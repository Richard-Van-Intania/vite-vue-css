<script setup lang="ts">
import { ref } from "vue";
import VtransToastComp from "./VtransToastComp.vue";
import { monthNames } from "../../utilities";

const monthList = ref<string[]>([]);

function add(): void {
  monthList.value = monthNames;
}

function close(index: number): void {
  monthList.value.splice(index, 1);
}
</script>

<template>
  <div>
    <button title="add-btn" type="button" class="fixed left-0 bottom-0 m-10 z-10 bg-blue-500 px-8 py-4 rounded-full text-white font-medium text-2xl cursor-pointer shadow-lg" v-on:click="add()">Add Toast</button>
    <div class="fixed top-0 right-0 bottom-0 overflow-hidden au flex flex-col items-center py-4 px-5">
      <TransitionGroup tag="VtransToastComp"> <VtransToastComp v-for="(item, index) in monthList" v-bind:key="item" v-bind:label="item" v-bind:index="index" v-on:closed="(index: number)=>close(index)" class="my-2" /></TransitionGroup>
    </div>
  </div>
</template>

<style scoped>
.v-enter-from {
  opacity: 0;
}
.v-enter-to {
  opacity: 1;
}
.v-leave-from {
  opacity: 1;
  transform: translateX(0%);
}
.v-leave-to {
  opacity: 0;
  transform: translateX(120%);
}
.v-enter-active {
  transition: opacity 0.5s;
}
.v-leave-active {
  transition: opacity 0.5s, transform 1s;
}
</style>
