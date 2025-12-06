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
    <div
      title="overlay-modal-body"
      class="fixed inset-0 bg-blk-op-40 z-20 transition-opacity flex justify-center items-center"
      v-bind:class="[openModal ? 'visible opacity-100' : 'invisible opacity-0']"
      v-on:click="(event: PointerEvent) => dismiss(event)"
    >
      <div class="w-[480px] h-72 bg-white px-5 py-4 rounded-2xl flex flex-col transition-transform" v-bind:class="[openModal ? 'visible scale-100' : 'invisible scale-95']">
        <div class="flex justify-between items-center">
          <div class="font-medium text-2xl">Modal title</div>
          <button type="button" class="cursor-pointer" v-on:click="close()"><Icon icon="ri:close-line" style="color: black; font-size: 32px" /></button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
