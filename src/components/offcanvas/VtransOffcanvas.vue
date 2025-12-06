<script setup lang="ts">
import { ref } from "vue";
import { Icon } from "@iconify/vue";

const openOffcanvas = ref<boolean>(false);

function open(): void {
  openOffcanvas.value = true;
}

function close(): void {
  openOffcanvas.value = false;
}

function dismiss(event: PointerEvent): void {
  if (event.target === event.currentTarget) {
    close();
  }
}
</script>

<template>
  <div>
    <button title="opn-btn" type="button" class="fixed bottom-0 right-0 m-10 z-10 bg-blue-500 px-8 py-4 rounded-full text-white font-medium text-2xl cursor-pointer shadow-lg" v-on:click="open()">Show Offcanvas</button>
    <Transition name="overlay"> <div title="overlay" v-if="openOffcanvas" class="fixed inset-0 bg-blk-op-40 z-20" v-on:click="(event: PointerEvent) => dismiss(event)"></div></Transition>
    <Transition name="offcanvas">
      <div title="offcanvas" v-if="openOffcanvas" class="fixed left-0 top-0 bottom-0 z-30 h-full w-[400px] bg-amber-200">
        <div title="offcanvas-column" class="flex flex-col px-5 py-4">
          <div class="flex justify-between items-center">
            <div class="font-medium text-2xl">Offcanvas</div>
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

.offcanvas-enter-from,
.offcanvas-leave-to {
  transform: translateX(-100%);
}
.offcanvas-enter-to,
.offcanvas-leave-from {
  transform: translateX(0%);
}

.offcanvas-enter-active,
.offcanvas-leave-active {
  transition: transform 0.25s;
}
</style>
