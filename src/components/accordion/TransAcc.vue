<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { ref } from "vue";
const show = ref<boolean>(false);
function toggle(): void {
  show.value = !show.value;
}
</script>

<template>
  <div class="flex justify-center mt-10">
    <div title="accordion body" class="w-[800px] border border-gray-300 rounded-2xl">
      <div class="flex justify-between items-center cursor-pointer px-5 py-6 rounded-t-2xl top-label" v-on:click="toggle()" v-bind:class="[show ? 'bg-blue-200 outline-2 outline-blue-400' : 'bg-white outline-0 outline-white ']">
        <div>Accordion Item #1</div>
        <Icon icon="ri:arrow-down-s-line" style="font-size: 32px" v-bind:class="[show ? 'icc-on text-blue-700' : 'icc-off text-gray-500']" />
      </div>
      <div class="acc-body overflow-hidden" v-bind:class="[show ? 'h-44' : 'h-0']">
        <div class="px-5 py-6 border-t border-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
      <div class="flex justify-between items-center cursor-pointer px-5 py-6 border-t border-gray-300">
        <div>Accordion Item #2</div>
        <Icon icon="ri:arrow-down-s-line" style="color: grey; font-size: 32px" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.acc-body {
  transition-property: height;
  transition-duration: 0.25s;
  transition-timing-function: ease;
}

.icc-on {
  transform: rotate(-180deg);
  transition-property: transform;
  transition-duration: 0.25s;
  transition-timing-function: ease;
}

.icc-off {
  transform: rotate(0deg);
  transition-property: transform;
  transition-duration: 0.25s;
  transition-timing-function: ease;
}

.top-label {
  transition: background-color 0.25s ease, outline-color 0.25s ease;
}
</style>
