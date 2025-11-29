<script setup lang="ts">
import { ref } from "vue";
import { Icon } from "@iconify/vue";

const show = ref(false);

function open() {
  show.value = true;
}
function close() {
  show.value = false;
}
</script>

<template>
  <div id="btn-open">
    <button class="cursor-pointer my-4 mx-6" @click="open">
      <Icon icon="ri:menu-line" style="color: black; font-size: 32px" />
    </button>
  </div>
  <div id="overlay" v-if="show" class="fixed inset-0 size-auto max-h-none max-w-none bg-blk-op-40 z-20"></div>
  <div id="offcanvas-panel" class="fixed inset-0 bg-white w-96 h-full flex flex-col py-4 px-6 z-30 offcanvas" v-bind:class="{ 'offcanvas-show': show }">
    <div class="flex justify-between items-center">
      <div class="text-lg font-medium">Offcanvas</div>
      <div id="btn-close">
        <button type="button" class="cursor-pointer" v-on:click="close()"><Icon icon="ri:close-line" style="color: black; font-size: 32px" /></button>
      </div>
    </div>
    <div class="py-6"><hr class="h-0 border-0 border-t border-gray-300" /></div>
    <div class="text-base text-gray-600">
      With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply. <br /><br />
      The European Union's General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of
      high-risk data breaches that could personally affect them.
    </div>
  </div>
  <div class="text-lg font-medium text-center">Offcanvas Demo</div>
</template>

<style scoped>
.offcanvas {
  transform: translateX(-100%);
  transition: transform 0.25s ease-in-out;
}

.offcanvas-show {
  transform: translateX(0);
}
</style>
