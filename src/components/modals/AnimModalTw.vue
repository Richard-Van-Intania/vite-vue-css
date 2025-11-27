<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { ref } from "vue";
const showDialog = ref<boolean>(false);

function open(): void {
  showDialog.value = true;
}

function close(): void {
  showDialog.value = false;
}

function dismiss(event: any): void {
  if (event.target === event.currentTarget) {
    close();
  }
}
</script>

<template>
  <div class="fixed right-0 bottom-0 size-auto max-h-none max-w-none">
    <button type="button" class="bg-blue-500 px-8 py-4 rounded-full text-white font-medium text-2xl cursor-pointer shadow-lg m-10 z-10" v-on:click="open()">Show dialog</button>
  </div>
  <div class="fixed inset-0 size-auto max-h-none max-w-none bg-blk-op-40 justify-center items-center z-20" v-bind:class="[showDialog ? 'flex' : 'hidden']" v-on:click="(event) => dismiss(event)">
    <div class="bg-white z-50 w-2xl rounded-xl p-6">
      <div class="flex justify-between items-center">
        <div class="text-lg font-medium">Terms of Service</div>
        <button type="button" class="cursor-pointer" v-on:click="close()"><Icon icon="ri:close-line" style="color: grey; font-size: 32px" /></button>
      </div>
      <div class="py-6"><hr class="h-0 border-0 border-t border-gray-300" /></div>
      <div class="text-base text-gray-600">
        With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply. <br /><br />
        The European Union's General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of
        high-risk data breaches that could personally affect them.
      </div>
      <div class="py-6"><hr class="h-0 border-0 border-t border-gray-300" /></div>
      <div class="flex gap-6">
        <button type="button" class="cursor-pointer bg-blue-700 py-3 px-5 rounded-xl text-base text-white" v-on:click="close()">I accept</button>
        <button type="button" class="cursor-pointer bg-gray-50 border border-gray-300 py-3 px-5 rounded-xl text-base text-gray-600" v-on:click="close()">Decline</button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
