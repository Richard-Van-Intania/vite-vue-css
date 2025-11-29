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
    <button type="button" class="cursor-pointer my-4 mx-6" @click="open()">
      <Icon icon="ri:menu-line" style="color: black; font-size: 32px" />
    </button>
  </div>

  <div id="overlay" class="fixed inset-0 bg-blk-op-40 z-20" :class="show ? '' : 'hidden'">
    <!-- Transition only for the sliding panel -->
    <transition name="slide">
      <div v-if="show" class="fixed left-0 top-0 bg-white w-96 h-full flex flex-col py-4 px-6 z-30">
        <div class="flex justify-between items-center">
          <div class="text-lg font-medium">Offcanvas</div>
          <button class="cursor-pointer" @click="close()">
            <Icon icon="ri:close-line" style="color: black; font-size: 32px" />
          </button>
        </div>

        <div class="py-6">
          <hr class="border-gray-300" />
        </div>

        <div class="text-base text-gray-600">
          With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply. <br /><br />
          The European Union's General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible
          of high-risk data breaches that could personally affect them.
        </div>
      </div>
    </transition>
  </div>

  <div class="text-lg font-medium text-center">Offcanvas Demo</div>
</template>

<style scoped>
/* Slide animation */
.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-to,
.slide-leave-from {
  transform: translateX(0);
  opacity: 1;
}
</style>
