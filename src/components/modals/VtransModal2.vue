<script setup lang="ts">
import { ref } from "vue";
import { Icon } from "@iconify/vue";

const openModal = ref<boolean>(false);

function open(): void {
  openModal.value = true;
}

function close(): void {
  openModal.value = false;
}

function dismiss(event: PointerEvent): void {
  if (event.target === event.currentTarget) {
    close();
  }
}
</script>

<template>
  <div>
    <button title="opn-btn" type="button" class="fixed bottom-0 right-0 m-10 z-10 bg-blue-500 px-8 py-4 rounded-full text-white font-medium text-2xl cursor-pointer shadow-lg" v-on:click="open()">Show Modal</button>
    <Transition name="overlay">
      <div title="overlay" v-if="openModal" class="fixed inset-0 bg-blk-op-40 z-20"></div>
    </Transition>
    <Transition name="modal"
      ><div v-show="openModal" class="fixed inset-0 z-30 flex justify-center items-center" v-on:click="(event: PointerEvent) => dismiss(event)">
        <div class="w-[480px] h-72 bg-amber-100 px-5 py-4 rounded-2xl flex flex-col z-40">
          <div class="flex justify-between items-center">
            <div class="font-medium text-2xl">Modal title</div>
            <button type="button" class="cursor-pointer" v-on:click="close()"><Icon icon="ri:close-line" style="color: black; font-size: 32px" /></button>
          </div>
        </div></div
    ></Transition>
  </div>
</template>

<style scoped>
.overlay-enter-from,
.overlay-leave-to {
  opacity: 0;
}
.overlay-enter-to,
.overlay-leave-from {
  opacity: 1;
}

.overlay-enter-active,
.overlay-leave-active {
  transition: opacity 0.25s;
}

.modal-enter-from,
.modal-leave-to {
  transform: scale(0.975);
}
.modal-enter-to,
.modal-leave-from {
  transform: scale(1);
}

.modal-enter-active,
.modal-leave-active {
  transition: transform 0.25s;
}
</style>
